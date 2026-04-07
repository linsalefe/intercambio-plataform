import os
import httpx
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models import ExactLead, Contact, Channel, Message, AIConversationSummary
from app.whatsapp import send_template_message

BASE_URL = "https://api.exactspotter.com/v3"

# Template que será enviado automaticamente para leads novos
AUTO_TEMPLATE_NAME = "mensagem_teste"
AUTO_TEMPLATE_LANG = "pt_BR"
# ID do canal (configurar após criar o canal)
AI_CHANNEL_ID = 1

# Mapeamento de programas por sub_source
PROGRAM_MAP = {
    "intercambiomanchester": {
        "name": "Visita de Estudos em Saúde Mental - Manchester",
        "flow_type": "internacional",
        "language": "inglês",
    },
    "intercambiobuenosaires": {
        "name": "Visita de Estudos em Saúde Mental - Buenos Aires",
        "flow_type": "internacional",
        "language": "espanhol",
    },
    "intercambioportugal": {
        "name": "Visita de Estudos em Saúde Mental - Portugal",
        "flow_type": "internacional",
        "language": "português",
    },
    "intercambiodinamarca": {
        "name": "Visita de Estudos em Saúde Mental - Dinamarca",
        "flow_type": "internacional",
        "language": "inglês",
    },
    # Nacionais
    "intercambiosp": {
        "name": "Intercâmbio São Paulo",
        "flow_type": "nacional",
        "language": None,
    },
    "intercambiorio": {
        "name": "Intercâmbio Rio de Janeiro",
        "flow_type": "nacional",
        "language": None,
    },
    "intercambiobelem": {
        "name": "Intercâmbio Belém",
        "flow_type": "nacional",
        "language": None,
    },
    "intercambioportoalegre": {
        "name": "Intercâmbio Porto Alegre",
        "flow_type": "nacional",
        "language": None,
    },
}


def get_program_from_subsource(sub_source: str) -> dict:
    """Identifica o programa com base no sub_source do Exact."""
    if not sub_source:
        return {"name": "Intercâmbio CENAT", "flow_type": "nacional", "language": None}

    clean = sub_source.lower().rstrip("0123456789")  # remove ano (2025, 2026)

    for key, program in PROGRAM_MAP.items():
        if clean == key:
            return program

    return {"name": sub_source, "flow_type": "nacional", "language": None}

# ID do usuário para comentários na timeline
EXACT_BOT_USER_ID = int(os.getenv("EXACT_BOT_USER_ID", "0"))


async def add_timeline_comment(lead_id: int, text: str):
    """Insere comentário na timeline do lead na Exact Spotter."""
    try:
        async with httpx.AsyncClient(timeout=15) as client:
            response = await client.post(
                f"{BASE_URL}/timelineAdd",
                headers=get_headers(),
                json={
                    "leadId": lead_id,
                    "text": text,
                    "userId": EXACT_BOT_USER_ID,
                },
            )
            if response.status_code in (200, 201):
                print(f"✅ Timeline atualizada para lead {lead_id}")
                return True
            else:
                print(f"❌ Erro timeline: {response.status_code} - {response.text}")
                return False
    except Exception as e:
        print(f"❌ Erro ao inserir timeline: {e}")
        return False


def get_headers():
    return {
        "Content-Type": "application/json",
        "token_exact": os.getenv("EXACT_SPOTTER_TOKEN")
    }


async def fetch_leads_from_exact(skip: int = 0, top: int = 500):
    """Busca leads do Exact Spotter com paginação."""
    async with httpx.AsyncClient(timeout=30) as client:
        response = await client.get(
            f"{BASE_URL}/Leads",
            headers=get_headers(),
            params={
                "$top": top,
                "$skip": skip,
                "$orderby": "Id desc"
            }
        )
        response.raise_for_status()
        return response.json()


def is_intercambio_lead(lead: dict) -> bool:
    """Verifica se o lead é de intercâmbio (subSource começa com 'intercambio')."""
    sub_source = lead.get("subSource")
    if sub_source and sub_source.get("value"):
        return sub_source["value"].lower().startswith("intercambio")
    return False


def parse_datetime(value: str):
    """Converte datetime string da API para objeto datetime."""
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00")).replace(tzinfo=None)
    except (ValueError, TypeError):
        return None


def format_phone(phone: str) -> str:
    """Formata telefone para padrão WhatsApp (55XXXXXXXXXXX)."""
    if not phone:
        return ""
    digits = "".join(c for c in phone if c.isdigit())
    if not digits.startswith("55"):
        digits = "55" + digits
    return digits


async def send_welcome_to_new_lead(lead_data: dict, db: AsyncSession):
    """Envia template de boas-vindas e ativa a IA para um lead novo."""
    phone = format_phone(lead_data.get("phone1", ""))
    if not phone or len(phone) < 12:
        print(f"⚠️ Lead {lead_data.get('name')} sem telefone válido")
        return

    name = lead_data.get("name", "")

    # Buscar canal
    result = await db.execute(select(Channel).where(Channel.id == AI_CHANNEL_ID))
    channel = result.scalar_one_or_none()
    if not channel:
        print("❌ Canal não encontrado")
        return

    # Enviar template
    try:
        send_result = await send_template_message(
            to=phone,
            template_name=AUTO_TEMPLATE_NAME,
            language=AUTO_TEMPLATE_LANG,
            phone_number_id=channel.phone_number_id,
            token=channel.whatsapp_token,
            parameters=[name],
        )

        if "messages" not in send_result:
            print(f"❌ Falha ao enviar para {name} ({phone}): {send_result}")
            return

        # Criar ou atualizar contato
        contact_result = await db.execute(select(Contact).where(Contact.wa_id == phone))
        contact = contact_result.scalar_one_or_none()
        if not contact:
            contact = Contact(
                wa_id=phone,
                name=name,
                channel_id=AI_CHANNEL_ID,
                ai_active=True,
                lead_status="novo",
            )
            db.add(contact)
            await db.flush()
        else:
            contact.ai_active = True
            if not contact.name:
                contact.name = name

        # Salvar mensagem do template
        from datetime import timezone, timedelta
        SP_TZ = timezone(timedelta(hours=-3))

        message = Message(
            wa_message_id=send_result["messages"][0]["id"],
            contact_wa_id=phone,
            channel_id=AI_CHANNEL_ID,
            direction="outbound",
            message_type="template",
            content=f"[Template] {name}",
            timestamp=datetime.now(SP_TZ).replace(tzinfo=None),
            status="sent",
        )
        db.add(message)

        # Criar card no Kanban
        summary = AIConversationSummary(
            contact_wa_id=phone,
            channel_id=AI_CHANNEL_ID,
            status="em_atendimento_ia",
            lead_name=name,
            ai_messages_count=0,
        )
        db.add(summary)

        # Criar estado do fluxo
        from app.flow_engine import get_or_create_flow
        program = get_program_from_subsource(lead_data.get("sub_source", ""))
        await get_or_create_flow(
            contact_wa_id=phone,
            channel_id=AI_CHANNEL_ID,
            flow_type=program["flow_type"],
            program_name=program["name"],
            db=db,
            program_language=program["language"],
        )

        print(f"🤖 Template enviado para {name} ({phone})")

    except Exception as e:
        print(f"❌ Erro ao enviar welcome para {name}: {e}")


async def sync_exact_leads(db: AsyncSession):
    """Sincroniza leads de intercâmbio do Exact Spotter com o banco local."""
    skip = 0
    top = 500
    total_synced = 0
    total_new = 0
    total_updated = 0
    new_leads_to_contact = []

    while True:
        data = await fetch_leads_from_exact(skip=skip, top=top)
        leads = data.get("value", [])

        if not leads:
            break

        for lead in leads:
            if not is_intercambio_lead(lead):
                continue

            exact_id = lead["id"]
            result = await db.execute(
                select(ExactLead).where(ExactLead.exact_id == exact_id)
            )
            existing = result.scalar_one_or_none()

            lead_data = {
                "name": lead.get("lead", ""),
                "phone1": lead.get("phone1"),
                "phone2": lead.get("phone2"),
                "source": lead.get("source", {}).get("value") if lead.get("source") else None,
                "sub_source": lead.get("subSource", {}).get("value") if lead.get("subSource") else None,
                "stage": lead.get("stage"),
                "funnel_id": lead.get("funnelId"),
                "sdr_name": lead.get("sdr", {}).get("name") if lead.get("sdr") else None,
                "register_date": parse_datetime(lead.get("registerDate")),
                "update_date": parse_datetime(lead.get("updateDate")),
            }

            if existing:
                for key, value in lead_data.items():
                    setattr(existing, key, value)
                existing.synced_at = datetime.utcnow()
                total_updated += 1
            else:
                new_lead = ExactLead(exact_id=exact_id, **lead_data)
                db.add(new_lead)
                total_new += 1
                new_leads_to_contact.append(lead_data)

            total_synced += 1

        if len(leads) < top:
            break

        skip += top

    await db.commit()

    # Enviar template para leads novos
    for lead_data in new_leads_to_contact:
        await send_welcome_to_new_lead(lead_data, db)

    await db.commit()

    return {
        "total_synced": total_synced,
        "new": total_new,
        "updated": total_updated,
        "welcome_sent": len(new_leads_to_contact),
    }