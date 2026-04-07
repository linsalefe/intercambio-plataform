"""
Motor de IA com RAG para atendimento via WhatsApp.
Usa OpenAI para embeddings + geração de respostas.
"""
import os
import json
import numpy as np
import tiktoken
from datetime import datetime
from openai import AsyncOpenAI
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models import KnowledgeDocument, AIConfig, Message, AIConversationSummary, Contact, ExactLead

client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

EMBEDDING_MODEL = "text-embedding-3-small"
DEFAULT_SYSTEM_PROMPT = """Você é um atendente virtual da equipe de Intercâmbio.
Seu papel é atender leads interessados em programas de intercâmbio.
Seja cordial, profissional e objetivo. Use as informações da base de conhecimento para responder.
Se não souber a resposta, diga que vai encaminhar para um consultor humano.
Nunca invente informações sobre preços, datas ou programas.
Responda de forma natural, como uma conversa no WhatsApp (mensagens curtas, use emojis com moderação)."""


# === Tokenização ===

def count_tokens(text: str, model: str = "gpt-4o") -> int:
    try:
        enc = tiktoken.encoding_for_model(model)
        return len(enc.encode(text))
    except Exception:
        return len(text) // 4


def split_into_chunks(text: str, title: str, max_tokens: int = 400) -> list[dict]:
    enc = tiktoken.encoding_for_model("gpt-4o")
    paragraphs = [p.strip() for p in text.split("\n") if p.strip()]

    chunks = []
    current_chunk = ""
    chunk_index = 0

    for paragraph in paragraphs:
        test_chunk = f"{current_chunk}\n{paragraph}".strip() if current_chunk else paragraph

        if len(enc.encode(test_chunk)) > max_tokens and current_chunk:
            tokens = len(enc.encode(current_chunk))
            chunks.append({
                "title": title,
                "content": current_chunk,
                "chunk_index": chunk_index,
                "token_count": tokens,
            })
            chunk_index += 1
            current_chunk = paragraph
        else:
            current_chunk = test_chunk

    if current_chunk:
        tokens = len(enc.encode(current_chunk))
        chunks.append({
            "title": title,
            "content": current_chunk,
            "chunk_index": chunk_index,
            "token_count": tokens,
        })

    return chunks


# === Embeddings ===

async def generate_embedding(text: str) -> list[float]:
    response = await client.embeddings.create(
        model=EMBEDDING_MODEL,
        input=text,
    )
    return response.data[0].embedding


def cosine_similarity(a: list[float], b: list[float]) -> float:
    a = np.array(a)
    b = np.array(b)
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))


# === RAG: Busca por Similaridade ===

async def search_knowledge(query: str, channel_id: int, db: AsyncSession, top_k: int = 3) -> list[dict]:
    query_embedding = await generate_embedding(query)

    result = await db.execute(
        select(KnowledgeDocument).where(
            KnowledgeDocument.channel_id == channel_id,
            KnowledgeDocument.embedding.isnot(None),
        )
    )
    documents = result.scalars().all()

    if not documents:
        return []

    scored = []
    for doc in documents:
        try:
            doc_embedding = json.loads(doc.embedding)
            score = cosine_similarity(query_embedding, doc_embedding)
            scored.append({
                "title": doc.title,
                "content": doc.content,
                "score": score,
            })
        except (json.JSONDecodeError, TypeError):
            continue

    scored.sort(key=lambda x: x["score"], reverse=True)
    return scored[:top_k]


# === Histórico de Conversa ===

async def get_conversation_history(contact_wa_id: str, db: AsyncSession, limit: int = 10) -> list[dict]:
    result = await db.execute(
        select(Message)
        .where(Message.contact_wa_id == contact_wa_id)
        .order_by(Message.timestamp.desc())
        .limit(limit)
    )
    messages = result.scalars().all()
    messages.reverse()

    history = []
    for msg in messages:
        role = "user" if msg.direction == "inbound" else "assistant"
        content = msg.content or ""

        if content.startswith("media:"):
            content = "[mídia enviada]"
        if content.startswith("template:") or content.startswith("[Template]"):
            content = "[mensagem de template enviada]"

        history.append({"role": role, "content": content})

    return history


# === Prompts por Estado do Fluxo ===

STATE_PROMPTS = {
    "no_flow": """Você é a NAT, assistente virtual do CENAT.
O lead ainda não está em nenhum fluxo de intercâmbio.
Responda de forma cordial e tente entender o interesse dele.
Se ele perguntar sobre programas, explique brevemente e direcione para agendar uma conversa com a consultora.""",

    "waiting_ok": """Você é a NAT, assistente virtual do CENAT.
Você enviou uma mensagem inicial sobre o programa {program_name} para o lead.
Seu objetivo é confirmar o interesse dele e avançar para a próxima etapa.
Se ele confirmar interesse (ok, sim, quero saber mais), avance.
Se ele fizer perguntas, responda brevemente com base na base de conhecimento.
Seja breve e natural.
""",

    "qualifying_language": """Você é a NAT, assistente virtual do CENAT.
O lead confirmou interesse no programa {program_name} (intercâmbio internacional).
Agora você precisa descobrir o nível de fluência dele no idioma {program_language}.
Faça isso de forma NATURAL e conversacional, não como um formulário.
Explique que as atividades são conduzidas por profissionais locais sem tradutor.
Apresente as 3 opções de forma amigável:
1️⃣ Fluente — compreendo e consigo me comunicar bem
2️⃣ Intermediário — compreendo e consigo manter conversas com certa facilidade  
3️⃣ Básico — entendo algumas expressões, mas tenho dificuldade para me comunicar
""",

    "scheduling": """Você é a NAT, assistente virtual do CENAT.
O lead está qualificado para o programa {program_name}.
Seu objetivo agora é agendar uma conversa breve com a consultora por ligação.
Proponha um horário nos próximos 2 dias úteis em horário comercial (9h-18h).
Seja natural: "Que ótimo! O próximo passo é uma conversa rápida com nossa consultora. Ela vai te explicar tudo sobre valores e condições. Você teria disponibilidade amanhã ou depois de amanhã? Qual horário fica melhor pra você?"
NÃO invente valores ou condições do programa.
""",

    "scheduled": """Você é a NAT, assistente virtual do CENAT.
O lead tem um agendamento confirmado para {scheduled_date} com a consultora.
Se ele tiver dúvidas, responda com base na base de conhecimento.
Se perguntar sobre valores, diga que a consultora vai explicar tudo na conversa agendada.
Confirme a data e horário se ele perguntar.
""",

    "meeting_day": """Você é a NAT, assistente virtual do CENAT.
Hoje é o dia da conversa agendada do lead com a consultora.
Confirme o horário e transmita confiança.
""",

    "post_meeting": """Você é a NAT, assistente virtual do CENAT.
O lead já teve a conversa com a consultora.
Agradeça pela participação e informe que as próximas orientações virão da consultora.
""",

    "disqualified": """Você é a NAT, assistente virtual do CENAT.
O lead não foi qualificado para o programa {program_name} por conta do nível de idioma.
Agradeça o interesse com empatia e apresente outros programas nacionais disponíveis.
Link: https://cenatsaudemental.com/cenat-intercambios
Seja gentil e não faça o lead se sentir rejeitado.
""",

    "discarded": """Você é a NAT, assistente virtual do CENAT.
O lead não respondeu aos follow-ups e foi descartado.
Se ele voltar a falar, seja cordial e verifique se ainda tem interesse.
""",

    "finished": """Você é a NAT, assistente virtual do CENAT.
O lead já foi qualificado e tem agendamento com a consultora para o programa {program_name}.
Responda dúvidas sobre o programa usando a base de conhecimento.
Se não souber, diga que a consultora vai explicar na conversa agendada.
Seja breve e natural.
""",

}


# === Geração de Resposta (atualizada com flow_context) ===

async def generate_ai_response(
    contact_wa_id: str,
    user_message: str,
    channel_id: int,
    db: AsyncSession,
    flow_context: dict = None,
) -> str | None:

    # 1. Buscar config da IA para o canal
    result = await db.execute(
        select(AIConfig).where(AIConfig.channel_id == channel_id)
    )
    ai_config = result.scalar_one_or_none()

    if not ai_config or not ai_config.is_enabled:
        return None

    model = ai_config.model or "gpt-4o"
    temperature = float(ai_config.temperature or "0.7")
    max_tokens = ai_config.max_tokens or 500

    # 2. Montar system prompt baseado no estado do fluxo
    flow_state = "no_flow"
    context_data = {}

    if flow_context:
        flow_state = flow_context.get("state", "no_flow")
        context_data = flow_context.get("context", {})

    state_prompt = STATE_PROMPTS.get(flow_state, STATE_PROMPTS["no_flow"])

    # Substituir variáveis no prompt
    state_prompt = state_prompt.format(
        program_name=context_data.get("program_name") or "Intercâmbio",
        program_language=context_data.get("program_language") or "inglês",
        scheduled_date=context_data.get("scheduled_date") or "data a definir",
    )

    # 3. Prompt base de comportamento
    base_prompt = """REGRAS DE COMPORTAMENTO:
- Você é a NAT, assistente virtual do CENAT (Centro Nacional de Saúde Mental)
- Fale como uma pessoa real no WhatsApp: mensagens curtas, tom amigável e acolhedor
- Use o nome do lead sempre que possível
- Use emojis com moderação (1-2 por mensagem no máximo)
- NUNCA invente informações sobre preços, datas ou detalhes do programa
- Se não souber algo, diga que a consultora vai explicar na conversa agendada
- Não mande mensagens longas. Máximo 3-4 linhas por mensagem
- Responda de forma natural, como se fosse uma conversa entre amigos profissionais
"""

    lead_name = context_data.get("lead_name") or ""
    if lead_name:
        base_prompt += f"\nO nome do lead é: {lead_name}. Use o nome dele naturalmente.\n"

    # 4. Buscar contexto do RAG
    relevant_docs = await search_knowledge(user_message, channel_id, db)
    rag_context = ""
    if relevant_docs:
        rag_context = "\n\n---\nINFORMAÇÕES DA BASE DE CONHECIMENTO:\n"
        for doc in relevant_docs:
            rag_context += f"\n[{doc['title']}] (relevância: {doc['score']:.2f})\n{doc['content']}\n"
        rag_context += "---\n"

    # 5. System prompt final
    system_prompt = base_prompt + "\n" + state_prompt + rag_context

    # Se o canal tem prompt customizado, adiciona como contexto extra
    if ai_config.system_prompt:
        system_prompt += f"\n\nCONTEXTO ADICIONAL DO CANAL:\n{ai_config.system_prompt}\n"

    # 6. Buscar histórico da conversa
    history = await get_conversation_history(contact_wa_id, db, limit=10)

    # 7. Montar mensagens para o GPT
    messages = [
        {"role": "system", "content": system_prompt},
    ]
    messages.extend(history)

    if not history or history[-1].get("content") != user_message:
        messages.append({"role": "user", "content": user_message})

    # 8. Chamar OpenAI
    try:
        response = await client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=temperature,
            max_completion_tokens=max_tokens,
        )
        ai_response = response.choices[0].message.content
        if not ai_response:
            return "Desculpe, não consegui processar. Um momento que vou transferir para um consultor 😊"
        return ai_response
    except Exception as e:
        print(f"❌ Erro ao gerar resposta IA: {e}")
        return None


# === Resumo da Conversa ===

async def generate_conversation_summary(contact_wa_id: str, db: AsyncSession) -> str | None:
    history = await get_conversation_history(contact_wa_id, db, limit=30)

    if not history:
        return None

    conversation_text = "\n".join([
        f"{'Lead' if m['role'] == 'user' else 'Atendente'}: {m['content']}"
        for m in history
    ])

    try:
        response = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "Resuma esta conversa de atendimento em 2-3 frases objetivas. "
                               "Inclua: interesse do lead, dúvidas principais, e status final."
                },
                {"role": "user", "content": conversation_text},
            ],
            temperature=0.3,
            max_tokens=200,
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"❌ Erro ao gerar resumo: {e}")
        return None


# === Anotação na Exact Spotter ===

async def save_annotation_to_exact(contact_wa_id: str, channel_id: int, db: AsyncSession):
    from app.exact_spotter import add_timeline_comment

    result = await db.execute(
        select(ExactLead).where(ExactLead.phone1 == contact_wa_id)
    )
    exact_lead = result.scalar_one_or_none()
    if not exact_lead:
        print(f"⚠️ Lead não encontrado na Exact para wa_id: {contact_wa_id}")
        return False

    history = await get_conversation_history(contact_wa_id, db, limit=30)
    if not history:
        return False

    card_result = await db.execute(
        select(AIConversationSummary).where(
            AIConversationSummary.contact_wa_id == contact_wa_id,
            AIConversationSummary.channel_id == channel_id,
        )
    )
    card = card_result.scalar_one_or_none()

    conversation_text = "\n".join([f"{m['role']}: {m['content']}" for m in history])

    try:
        response = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": """Gere um resumo objetivo do atendimento via WhatsApp feito pela IA.
Formato:
📋 RESUMO DO ATENDIMENTO (IA)
📅 Data: [data atual]
📌 Interesse: [programa de interesse]
📊 Status: [Qualificado/Não qualificado/Incompleto/Passou para humano]
📝 Observações: [algo relevante]

Seja breve e direto."""},
                {"role": "user", "content": f"Conversa:\n{conversation_text}"}
            ],
            max_completion_tokens=500,
        )
        summary = response.choices[0].message.content
    except Exception as e:
        summary = f"📋 Atendimento realizado pela IA em {datetime.now().strftime('%d/%m/%Y %H:%M')}. Erro ao gerar resumo: {e}"

    success = await add_timeline_comment(exact_lead.exact_id, summary)

    if card and summary:
        card.summary = summary
        await db.commit()

    return success