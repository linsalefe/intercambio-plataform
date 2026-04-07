"""
Motor de fluxo da NAT — máquina de estados para qualificação de leads.
Fluxo Nacional e Internacional.
"""

# === Estados do Fluxo ===

FLOW_STATES = {
    # --- Entrada ---
    "welcome": {
        "description": "NAT envia saudação + áudio do programa",
        "next_on_response": "waiting_ok",
        "auto_advance": True,
    },
    "waiting_ok": {
        "description": "Aguardando lead confirmar que ouviu o áudio",
        "trigger": "ok",
        "next_nacional": "scheduling",
        "next_internacional": "qualifying_language",
        "follow_up_type": "follow_up_ok",
        "follow_up_sequence": [
            {"stage": 1, "delay_hours": 5},
            {"stage": 2, "delay_hours": 12},
            {"stage": 3, "delay_hours": 36},
            {"stage": 4, "delay_hours": 48},
            {"stage": 5, "delay_hours": 72},
            {"stage": 6, "delay_hours": 120},
            {"stage": 7, "delay_hours": 168},
            {"stage": 8, "delay_hours": 216},
            {"stage": 9, "delay_hours": 240},
        ],
    },

    # --- Qualificação Internacional ---
    "qualifying_language": {
        "description": "Pergunta sobre fluência no idioma do programa",
        "options": ["fluente", "intermediario", "basico"],
        "next_qualified": "scheduling",
        "next_disqualified": "disqualified",
    },

    # --- Agendamento ---
    "scheduling": {
        "description": "NAT propõe data/hora para conversa com consultora",
        "next_on_response": "scheduled",
        "follow_up_type": "follow_up_schedule",
        "follow_up_sequence": [
            {"stage": 1, "delay_hours": 6},
            {"stage": 2, "delay_hours": 24},
            {"stage": 3, "delay_hours": 48},
            {"stage": 4, "delay_hours": 120},
        ],
    },
    "scheduled": {
        "description": "Agendamento confirmado, aguardando dia da reunião",
        "next_on_date": "meeting_day",
    },
    "meeting_day": {
        "description": "Dia da reunião — enviar confirmação às 8h",
        "next": "post_meeting",
    },
    "post_meeting": {
        "description": "Pós-reunião — repassar info para consultora",
        "next": "completed",
    },

    # --- Finais ---
    "completed": {"description": "Fluxo concluído com sucesso"},
    "disqualified": {"description": "Lead não qualificado (idioma básico)"},
    "discarded": {"description": "Lead descartado por falta de resposta"},
}


# === Detecção de Intenção ===

OK_TRIGGERS = ["ok", "okay", "sim", "ouvi", "pronto", "escutei", "vi", "assisti", "beleza", "certo"]

FLUENCY_MAP = {
    "fluente": ["fluente", "fluência", "falo bem", "comunico bem", "1", "primeira"],
    "intermediario": ["intermediário", "intermediario", "certa facilidade", "2", "segunda"],
    "basico": ["básico", "basico", "dificuldade", "3", "terceira"],
}

POSITIVE_TRIGGERS = ["sim", "quero", "pode ser", "bora", "vamos", "claro", "com certeza", "tenho", "disponível", "ok", "beleza"]


def detect_ok(message: str) -> bool:
    """Detecta se o lead confirmou que ouviu o áudio."""
    msg = message.lower().strip()
    return any(trigger in msg for trigger in OK_TRIGGERS)


def detect_fluency(message: str) -> str | None:
    """Detecta nível de fluência na resposta do lead."""
    msg = message.lower().strip()
    for level, triggers in FLUENCY_MAP.items():
        if any(trigger in msg for trigger in triggers):
            return level
    return None


def detect_positive(message: str) -> bool:
    """Detecta resposta positiva genérica (para agendamento, etc)."""
    msg = message.lower().strip()
    return any(trigger in msg for trigger in POSITIVE_TRIGGERS)

from datetime import datetime, timedelta, timezone
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models import LeadFlowState, ScheduledMessage, Contact, Channel

SP_TZ = timezone(timedelta(hours=-3))


async def get_or_create_flow(
    contact_wa_id: str,
    channel_id: int,
    flow_type: str,
    program_name: str,
    db: AsyncSession,
    program_language: str = None,
) -> LeadFlowState:
    """Busca ou cria o estado do fluxo para um lead."""
    result = await db.execute(
        select(LeadFlowState).where(LeadFlowState.contact_wa_id == contact_wa_id)
    )
    flow = result.scalar_one_or_none()

    if not flow:
        flow = LeadFlowState(
            contact_wa_id=contact_wa_id,
            channel_id=channel_id,
            flow_type=flow_type,
            program_name=program_name,
            program_language=program_language,
            current_state="welcome",
            is_active=True,
        )
        db.add(flow)
        await db.flush()

    return flow


async def cancel_pending_follow_ups(contact_wa_id: str, db: AsyncSession):
    """Cancela todos os follow-ups pendentes de um lead."""
    result = await db.execute(
        select(ScheduledMessage).where(
            ScheduledMessage.contact_wa_id == contact_wa_id,
            ScheduledMessage.status == "pending",
        )
    )
    for msg in result.scalars().all():
        msg.status = "cancelled"


async def schedule_follow_ups(flow: LeadFlowState, db: AsyncSession):
    """Agenda a próxima mensagem de follow-up baseada no estado atual."""
    state_config = FLOW_STATES.get(flow.current_state)
    if not state_config or "follow_up_sequence" not in state_config:
        return

    # Cancela follow-ups anteriores
    await cancel_pending_follow_ups(flow.contact_wa_id, db)

    sequence = state_config["follow_up_sequence"]
    now = datetime.now(SP_TZ).replace(tzinfo=None)

    # Agenda apenas o próximo follow-up (não todos de uma vez)
    next_stage = flow.follow_up_stage + 1
    for step in sequence:
        if step["stage"] == next_stage:
            scheduled_msg = ScheduledMessage(
                contact_wa_id=flow.contact_wa_id,
                channel_id=flow.channel_id,
                message_type=state_config["follow_up_type"],
                scheduled_for=now + timedelta(hours=step["delay_hours"]),
                follow_up_stage=step["stage"],
            )
            db.add(scheduled_msg)
            break


def advance_state(flow: LeadFlowState, new_state: str):
    """Avança o lead para o próximo estado."""
    flow.previous_state = flow.current_state
    flow.current_state = new_state
    flow.follow_up_stage = 0
    flow.last_lead_response_at = datetime.now(SP_TZ).replace(tzinfo=None)


async def process_lead_message(
    contact_wa_id: str,
    message: str,
    channel_id: int,
    db: AsyncSession,
) -> dict:
    """
    Processa a mensagem do lead e retorna a ação a ser tomada.

    Retorna:
        {
            "action": "ai_respond" | "disqualify" | "schedule" | "ignore",
            "state": "estado_atual",
            "context": { dados adicionais para o prompt da IA }
        }
    """
    result = await db.execute(
        select(LeadFlowState).where(LeadFlowState.contact_wa_id == contact_wa_id)
    )
    flow = result.scalar_one_or_none()

    # Se não tem fluxo ativo, deixa a IA responder normalmente
    if not flow or not flow.is_active:
        return {"action": "ai_respond", "state": "no_flow", "context": {}}

    # Atualizar timestamp da última resposta
    flow.last_lead_response_at = datetime.now(SP_TZ).replace(tzinfo=None)

    # Cancelar follow-ups pendentes (lead respondeu)
    await cancel_pending_follow_ups(contact_wa_id, db)

    state = flow.current_state
    response = {"state": state, "context": {
        "flow_type": flow.flow_type,
        "program_name": flow.program_name,
        "program_language": flow.program_language,
        "lead_name": None,
    }}

    # Buscar nome do lead
    contact_result = await db.execute(
        select(Contact).where(Contact.wa_id == contact_wa_id)
    )
    contact = contact_result.scalar_one_or_none()
    if contact and contact.name:
        response["context"]["lead_name"] = contact.name

    # === MÁQUINA DE ESTADOS ===

    if state == "welcome" or state == "waiting_ok":
        if detect_ok(message):
            if flow.flow_type == "internacional":
                advance_state(flow, "qualifying_language")
                response["action"] = "ai_respond"
                response["state"] = "qualifying_language"
            else:
                advance_state(flow, "scheduling")
                response["action"] = "ai_respond"
                response["state"] = "scheduling"
        else:
            # Não detectou "ok", IA responde naturalmente e mantém estado
            flow.current_state = "waiting_ok"
            await schedule_follow_ups(flow, db)
            response["action"] = "ai_respond"
            response["state"] = "waiting_ok"

    elif state == "qualifying_language":
        fluency = detect_fluency(message)
        if fluency:
            flow.language_fluency = fluency
            if fluency in ("fluente", "intermediario"):
                flow.qualified = True
                advance_state(flow, "scheduling")
                response["action"] = "ai_respond"
                response["state"] = "scheduling"
            else:
                flow.qualified = False
                advance_state(flow, "disqualified")
                flow.is_active = False
                flow.finished_reason = "disqualified"
                response["action"] = "disqualify"
                response["state"] = "disqualified"
        else:
            # IA tenta entender melhor
            response["action"] = "ai_respond"

    elif state == "scheduling":
        if detect_positive(message):
            advance_state(flow, "scheduled")
            response["action"] = "schedule"
            response["state"] = "scheduled"
        else:
            await schedule_follow_ups(flow, db)
            response["action"] = "ai_respond"

    elif state == "scheduled":
        # Lead já está agendado, IA responde dúvidas
        response["action"] = "ai_respond"
        response["context"]["scheduled_date"] = flow.scheduled_date.isoformat() if flow.scheduled_date else None

    elif state == "meeting_day":
        response["action"] = "ai_respond"

    elif state == "post_meeting":
        response["action"] = "ai_respond"

    elif state in ("completed", "disqualified", "discarded"):
        response["action"] = "ai_respond"
        response["context"]["finished"] = True

    else:
        response["action"] = "ai_respond"

    await db.commit()
    return response