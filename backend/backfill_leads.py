"""
Backfill da tabela exact_leads (popula a UI de Leads).

SEGURANCA: este script NAO ENVIA NADA.
Nao importa app.whatsapp, send_welcome nem flow_engine — e fisicamente
incapaz de disparar template ou criar fluxo. So le do Exact e grava em exact_leads.

Uso (dentro do container do backend):
  python backfill_leads.py            # PREVIEW: mostra o que faria, NAO grava
  python backfill_leads.py --commit   # grava no banco (continua sem enviar nada)
"""
import os
import sys
import asyncio
from datetime import datetime
from collections import Counter

import httpx
from sqlalchemy import select

from app.database import async_session
from app.models import ExactLead

BASE_URL = "https://api.exactspotter.com/v3"
MAX_PAGES = 60  # trava de seguranca (60 * 500 = 30000 leads)

# --- Filtro de intercambio ---
# Tudo que comeca com "intercambio" entra automaticamente.
# Abaixo, as variantes de nomenclatura antiga "inter*"/outras que TAMBEM sao intercambio.
# EDITE A VONTADE: remover uma linha = aquele programa nao entra.
# (Modo so-leitura/preview, entao mexer aqui nao tem risco de disparo.)
EXTRA_ALLOWLIST = {
    "intertrieste",      # intertrieste2025
    "interbuenosaires",  # interbuenosaires2026 + interbuenosairesprovincia
    "interuk",           # interuk
    "intercuritiba",     # intercuritiba
    "calicolombia",      # calicolombia2025  <-- confirme se e intercambio
}


def is_intercambio(sub_source_value):
    if not sub_source_value:
        return False
    s = sub_source_value.lower()
    if s.startswith("intercambio"):
        return True
    return any(s.startswith(stem) for stem in EXTRA_ALLOWLIST)


def get_headers():
    return {"Content-Type": "application/json", "token_exact": os.getenv("EXACT_SPOTTER_TOKEN")}


def parse_datetime(value):
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00")).replace(tzinfo=None)
    except (ValueError, TypeError):
        return None


def map_lead(lead):
    return {
        "name": lead.get("lead") or "",
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


async def fetch_page(client, skip, top=500):
    r = await client.get(
        f"{BASE_URL}/Leads",
        headers=get_headers(),
        params={"$top": top, "$skip": skip, "$orderby": "Id desc"},
    )
    r.raise_for_status()
    return r.json().get("value", [])


async def main(commit):
    matched = []
    total_seen = 0

    async with httpx.AsyncClient(timeout=30) as client:
        skip, page = 0, 0
        while page < MAX_PAGES:
            leads = await fetch_page(client, skip)
            if not leads:
                break
            page += 1
            for ld in leads:
                total_seen += 1
                ss = ld.get("subSource")
                val = ss.get("value") if ss else None
                if is_intercambio(val):
                    matched.append(ld)
            if len(leads) < 500:
                break
            skip += 500

    inserted = 0
    updated = 0
    new_by_subsource = Counter()

    async with async_session() as db:
        for ld in matched:
            exact_id = ld["id"]
            res = await db.execute(select(ExactLead).where(ExactLead.exact_id == exact_id))
            existing = res.scalar_one_or_none()
            data = map_lead(ld)
            if existing:
                updated += 1
                if commit:
                    for k, v in data.items():
                        setattr(existing, k, v)
                    existing.synced_at = datetime.utcnow()
            else:
                inserted += 1
                new_by_subsource[data["sub_source"] or "(sem subSource)"] += 1
                if commit:
                    db.add(ExactLead(exact_id=exact_id, **data))
        if commit:
            await db.commit()

    mode = "COMMIT (gravado no banco)" if commit else "PREVIEW (NADA gravado)"
    print(f"=== BACKFILL {mode} | NENHUMA mensagem enviada ===")
    print(f"Leads varridos na API: {total_seen}")
    print(f"Bateram no filtro intercambio: {len(matched)}")
    print(f"  -> NOVOS (entrariam na UI): {inserted}")
    print(f"  -> ja existiam (so update): {updated}")
    print()
    print("=== NOVOS por subSource ===")
    for val, cnt in new_by_subsource.most_common():
        print(f"  {cnt:5d}  {val}")


if __name__ == "__main__":
    asyncio.run(main("--commit" in sys.argv))
