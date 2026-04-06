# Intercâmbio Platform

Plataforma de gestão de leads e atendimento via WhatsApp para o setor de Intercâmbio.

---

## 📋 Visão Geral

Sistema completo para gerenciamento de leads de intercâmbio com:

- **WhatsApp Cloud API** — Envio e recebimento de mensagens via API oficial do Meta
- **IA de Atendimento** — Agente inteligente com RAG para atendimento inicial automatizado
- **Exact Sales** — Sincronização automática de leads do Exact Spotter (filtro: intercâmbio)
- **Kanban** — Pipeline visual de atendimento da IA
- **Dashboard** — Métricas em tempo real (contatos, mensagens, funil)
- **Multi-usuário** — Controle de acesso com roles (admin/atendente)

---

## 🛠 Stack Tecnológica

### Backend
| Tecnologia | Versão | Função |
|---|---|---|
| Python | 3.11 | Linguagem principal |
| FastAPI | 0.128.1 | Framework API REST |
| SQLAlchemy | 2.0.46 | ORM async |
| PostgreSQL | 16 | Banco de dados |
| OpenAI | 2.17.0 | Motor de IA (GPT-4o + Embeddings) |
| Uvicorn | 0.40.0 | Servidor ASGI |

### Frontend
| Tecnologia | Versão | Função |
|---|---|---|
| Next.js | 16.1.6 | Framework React |
| React | 19.2.3 | Biblioteca UI |
| Tailwind CSS | 4 | Estilização |
| Axios | 1.13.4 | HTTP Client |
| Lucide React | 0.563.0 | Ícones |
| Sonner | 2.0.7 | Notificações toast |

### Infraestrutura
| Tecnologia | Função |
|---|---|
| Docker + Docker Compose | Containerização e orquestração |
| Nginx | Proxy reverso + SSL termination |
| Certbot (Let's Encrypt) | Certificado HTTPS gratuito |
| Contabo VPS | Servidor de produção (Ubuntu 24.04) |

---

## 📁 Estrutura do Projeto

```
intercambio-plataform/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py              # FastAPI app + webhook WhatsApp
│   │   ├── database.py          # Conexão async com PostgreSQL
│   │   ├── models.py            # Modelos SQLAlchemy
│   │   ├── routes.py            # Rotas principais (contatos, mensagens, dashboard)
│   │   ├── auth.py              # JWT + hash de senhas
│   │   ├── auth_routes.py       # Login, registro, CRUD de usuários
│   │   ├── whatsapp.py          # Funções de envio WhatsApp Cloud API
│   │   ├── exact_spotter.py     # Sync de leads do Exact Sales
│   │   ├── exact_routes.py      # Rotas da Exact Sales
│   │   ├── ai_engine.py         # Motor de IA com RAG
│   │   ├── ai_routes.py         # Config IA, upload docs, test chat
│   │   ├── kanban_routes.py     # Kanban de atendimento IA
│   │   └── create_tables.py     # Script de criação de tabelas
│   ├── setup.py                 # Script de setup inicial (user + canal)
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env                     # Variáveis de ambiente (NÃO commitar)
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── login/           # Página de login
│   │   │   ├── dashboard/       # Dashboard com métricas
│   │   │   ├── conversations/   # Inbox WhatsApp
│   │   │   ├── leads-pos/       # Lista de leads Exact
│   │   │   ├── kanban/          # Kanban IA
│   │   │   ├── ai-config/       # Configuração do agente IA
│   │   │   ├── users/           # Gestão de usuários
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── AppLayout.tsx    # Layout autenticado
│   │   │   └── Sidebar.tsx      # Menu lateral
│   │   ├── contexts/
│   │   │   └── auth-context.tsx # Context de autenticação
│   │   └── lib/
│   │       └── api.ts           # Axios configurado
│   ├── public/
│   ├── Dockerfile
│   ├── .env.local               # NEXT_PUBLIC_API_URL (NÃO commitar)
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🚀 Setup Local (Desenvolvimento)

### Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado
- Git

### 1. Clonar o repositório

```bash
git clone git@github.com:linsalefe/intercambio-plataform.git
cd intercambio-plataform
```

### 2. Configurar variáveis de ambiente

```bash
cp backend/.env.example backend/.env
```

Edite `backend/.env`:

```env
DATABASE_URL=postgresql+asyncpg://intercambio_user:intercambio_pass@db:5432/intercambio_db
SECRET_KEY=intercambio-platform-secret-2025
JWT_ALGORITHM=HS256
WHATSAPP_TOKEN=SEU_TOKEN_DO_META
WHATSAPP_PHONE_NUMBER_ID=SEU_PHONE_NUMBER_ID
WEBHOOK_VERIFY_TOKEN=SEU_TOKEN_DE_VERIFICACAO
EXACT_SPOTTER_TOKEN=SEU_TOKEN_EXACT
OPENAI_API_KEY=SUA_CHAVE_OPENAI
FRONTEND_URL=http://localhost:3001
```

### 3. Subir os containers

```bash
docker compose up --build
```

### 4. Criar as tabelas no banco

```bash
docker compose exec backend python -m app.create_tables
```

### 5. Criar usuário admin e canal WhatsApp

```bash
docker compose exec backend python setup.py
```

### 6. Acessar a plataforma

- **Frontend:** http://localhost:3001
- **Backend API:** http://localhost:8001
- **Health check:** http://localhost:8001/health

---

## 🌐 Deploy em Produção

### Ambiente de produção atual

| Item | Valor |
|---|---|
| Servidor | Contabo Cloud VPS 10 SSD |
| IP | `38.242.215.167` |
| OS | Ubuntu 24.04 |
| Domínio | `intercambio.cenatdata.online` |
| SSL | Let's Encrypt (auto-renova) |
| Backend | Porta 8002 (interna 8000) |
| Frontend | Porta 3001 (interna 3000) |
| PostgreSQL | Porta 5443 (interna 5432) |

### Passo a passo do deploy

#### 1. Instalar dependências na VPS

```bash
apt update && apt install -y docker.io docker-compose-v2 nginx certbot python3-certbot-nginx
systemctl enable docker && systemctl enable containerd
```

#### 2. Clonar e configurar

```bash
cd /root
git clone git@github.com:linsalefe/intercambio-plataform.git intercambio
```

Criar `backend/.env` com as variáveis de produção e `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=https://intercambio.cenatdata.online/api
```

#### 3. Subir containers

```bash
cd /root/intercambio
docker compose up -d --build
docker compose exec backend python -m app.create_tables
```

#### 4. Configurar Nginx

Criar `/etc/nginx/sites-available/intercambio`:

```nginx
server {
    listen 80;
    server_name intercambio.cenatdata.online;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8002;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /webhook {
        proxy_pass http://127.0.0.1:8002/webhook;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /health {
        proxy_pass http://127.0.0.1:8002/health;
        proxy_set_header Host $host;
    }
}
```

```bash
ln -sf /etc/nginx/sites-available/intercambio /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

#### 5. Gerar certificado SSL

```bash
certbot --nginx -d intercambio.cenatdata.online --non-interactive --agree-tos -m seu@email.com
```

#### 6. Verificar

```bash
curl https://intercambio.cenatdata.online/health
# Esperado: {"status":"online"}
```

---

## 📱 Webhook WhatsApp (Meta Cloud API)

### Configuração

Este projeto usa **override_callback_uri** no nível do WABA, permitindo que múltiplos projetos compartilhem o mesmo app Meta com WABAs diferentes.

| Item | Valor |
|---|---|
| App Meta | API WPP CENAT (ID: 88462874541479) |
| WABA | Cenat - Intercâmbio (ID: 820806221040124) |
| Phone Number ID | 1043680765495660 |
| Número | +55 11 95213 6429 |
| Webhook URL | `https://intercambio.cenatdata.online/webhook` |
| Verify Token | Definido em `WEBHOOK_VERIFY_TOKEN` no `.env` |

### Como funciona o override

Em vez de alterar o webhook global do app (que é usado por outro projeto), configuramos um `override_callback_uri` no WABA do intercâmbio:

```bash
curl -s -X POST "https://graph.facebook.com/v22.0/WABA_ID/subscribed_apps" \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"override_callback_uri":"https://intercambio.cenatdata.online/webhook","verify_token":"SEU_TOKEN"}'
```

Isso permite que cada WABA envie webhooks para servidores diferentes, mesmo usando o mesmo app.

### Verificação do webhook

```bash
curl "https://intercambio.cenatdata.online/webhook?hub.mode=subscribe&hub.verify_token=SEU_TOKEN&hub.challenge=1234567890"
# Esperado: 1234567890
```

### Tipos de mensagem processados

O webhook processa automaticamente: `text`, `image`, `audio`, `video`, `document`, `sticker` e atualizações de status (`sent`, `delivered`, `read`).

---

## 🔄 Exact Sales — Sincronização

| Item | Valor |
|---|---|
| API | Exact Spotter v3 |
| Intervalo | A cada 10 minutos (automático) |
| Filtro | `subSource` começando com `intercambio` |
| Template auto | `mensagem_teste` (pt_BR) |
| Total de leads | ~1301 (abril 2026) |

### Fluxo automático

1. O job roda a cada 10 minutos
2. Busca leads da Exact Spotter com paginação
3. Filtra apenas leads de intercâmbio (`subSource`)
4. Leads **novos** recebem template de boas-vindas via WhatsApp
5. Contato é criado no banco com IA ativada
6. Card é criado no Kanban

### Endpoint manual

```bash
POST /api/exact-leads/sync
```

---

## 🤖 IA de Atendimento

O agente de IA usa RAG (Retrieval Augmented Generation):

1. **Base de conhecimento** — Upload de documentos `.txt`/`.md` que são divididos em chunks e vetorizados
2. **Busca semântica** — Quando o lead pergunta algo, busca os chunks mais relevantes
3. **Contexto** — Histórico da conversa + docs relevantes são enviados ao GPT
4. **Configurável** — Prompt, modelo, temperatura e max_tokens por canal

### Configuração via interface:
1. Acesse **Config IA** no menu
2. Ative a IA para o canal
3. Escreva o prompt do sistema
4. Faça upload dos documentos da base de conhecimento

---

## 🔑 Credenciais Padrão

| Campo | Valor |
|---|---|
| Email | `linsalefe@gmail.com` |
| Senha | `Portugues5#` |
| Role | `admin` |

---

## 🐳 Portas dos Containers

| Serviço | Local | Produção | Interna |
|---|---|---|---|
| Frontend (Next.js) | 3001 | 3001 | 3000 |
| Backend (FastAPI) | 8001 | 8002 | 8000 |
| PostgreSQL | 5443 | 5443 | 5432 |

> **Nota:** Em produção o backend usa porta 8002 porque a 8001 já é usada por outro projeto na mesma VPS.

---

## 📡 API Endpoints

### Autenticação
| Método | Rota | Descrição |
|---|---|---|
| POST | `/api/auth/login` | Login (retorna JWT) |
| GET | `/api/auth/me` | Dados do usuário logado |
| POST | `/api/auth/register` | Criar usuário (admin) |
| GET | `/api/auth/users` | Listar usuários (admin) |
| PATCH | `/api/auth/users/{id}` | Editar usuário (admin) |
| DELETE | `/api/auth/users/{id}` | Excluir usuário (admin) |

### Dashboard
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/dashboard/stats` | Estatísticas gerais |

### Contatos & Mensagens
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/contacts` | Listar contatos |
| GET | `/api/contacts/{wa_id}` | Detalhes do contato |
| PATCH | `/api/contacts/{wa_id}` | Atualizar contato |
| GET | `/api/contacts/{wa_id}/messages` | Mensagens do contato |
| POST | `/api/contacts/{wa_id}/read` | Marcar como lido |

### Envio WhatsApp
| Método | Rota | Descrição |
|---|---|---|
| POST | `/api/send/text` | Enviar texto |
| POST | `/api/send/template` | Enviar template |
| POST | `/api/send/media` | Enviar mídia |

### Canais
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/channels` | Listar canais |
| POST | `/api/channels` | Criar canal |

### Tags
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/tags` | Listar tags |
| POST | `/api/tags` | Criar tag |
| DELETE | `/api/tags/{id}` | Excluir tag |

### Exact Sales
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/exact-leads` | Listar leads sincronizados |
| POST | `/api/exact-leads/sync` | Forçar sincronização |
| GET | `/api/exact-leads/stats` | Estatísticas dos leads |
| GET | `/api/exact-leads/{id}/details` | Detalhes via API Exact |
| POST | `/api/exact-leads/bulk-send-template` | Envio em massa |

### IA
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/ai/config/{channel_id}` | Config da IA |
| PUT | `/api/ai/config/{channel_id}` | Atualizar config IA |
| PATCH | `/api/ai/contacts/{wa_id}/toggle` | Ligar/desligar IA no contato |
| GET | `/api/ai/documents/{channel_id}` | Listar docs do RAG |
| POST | `/api/ai/documents/{channel_id}` | Upload doc para RAG |
| DELETE | `/api/ai/documents/{channel_id}/{title}` | Excluir doc |
| POST | `/api/ai/test-chat` | Testar conversa com IA |

### Kanban
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/kanban/cards` | Listar cards |
| GET | `/api/kanban/stats` | Estatísticas |
| PATCH | `/api/kanban/cards/{id}/move` | Mover card |
| PATCH | `/api/kanban/cards/{id}` | Atualizar card |
| POST | `/api/kanban/cards/{id}/generate-summary` | Gerar resumo IA |

### Webhook WhatsApp
| Método | Rota | Descrição |
|---|---|---|
| GET | `/webhook` | Verificação do Meta |
| POST | `/webhook` | Receber mensagens |

---

## 🗃 Modelos do Banco

| Tabela | Descrição |
|---|---|
| `users` | Usuários da plataforma |
| `channels` | Canais WhatsApp (número + token) |
| `contacts` | Contatos/leads do WhatsApp |
| `messages` | Mensagens enviadas/recebidas |
| `tags` | Tags para categorizar contatos |
| `contact_tags` | Relação N:N contatos ↔ tags |
| `exact_leads` | Leads sincronizados do Exact Sales |
| `ai_configs` | Configuração da IA por canal |
| `knowledge_documents` | Documentos do RAG (chunks + embeddings) |
| `ai_conversation_summaries` | Cards do Kanban IA |

---

## 🎨 Design System

Identidade visual baseada no **EduFlow Design System**:

- **Cor primária:** `#1D4ED8` (Blue-700)
- **Fonte:** Inter (interface) + JetBrains Mono (dados)
- **Radius:** 8px base
- **Background:** `#f8f9fb` (light) / `#0a1628` (login/sidebar)
- **Componentes:** Tailwind CSS utility-first

---

## 📦 Comandos Úteis

```bash
# === LOCAL ===

# Subir containers
docker compose up --build

# Subir em background
docker compose up -d

# Parar containers
docker compose down

# Parar e remover volumes (reset do banco)
docker compose down -v

# Ver logs do backend
docker compose logs -f backend

# Ver logs do frontend
docker compose logs -f frontend

# Acessar shell do backend
docker compose exec backend bash

# Criar tabelas
docker compose exec backend python -m app.create_tables

# Rodar setup inicial
docker compose exec backend python setup.py

# Restart apenas o backend
docker compose restart backend

# === PRODUÇÃO (VPS) ===

# Acessar VPS
ssh root@38.242.215.167

# Deploy de atualização
cd /root/intercambio && git pull && docker compose up -d --build

# Ver logs em produção
cd /root/intercambio && docker compose logs -f backend

# Restart em produção
cd /root/intercambio && docker compose restart backend

# Renovar certificado SSL (automático, mas manual se necessário)
certbot renew

# Testar webhook
curl "https://intercambio.cenatdata.online/webhook?hub.mode=subscribe&hub.verify_token=SEU_TOKEN&hub.challenge=1234567890"

# Verificar status dos containers
cd /root/intercambio && docker compose ps

# Forçar sync Exact Sales
curl -X POST https://intercambio.cenatdata.online/api/exact-leads/sync -H "Authorization: Bearer SEU_JWT"
```

---

## 🚨 Troubleshooting

| Problema | Solução |
|---|---|
| Porta já em uso | Mude as portas no `docker-compose.yml` |
| Erro de senha no banco | Rode `docker compose down -v` e suba novamente |
| Token WhatsApp expirado | Gere novo token no Meta Business Manager → Usuários do sistema → Gerar token |
| Webhook não recebe mensagens | Verifique o override do WABA: `GET /v22.0/WABA_ID/subscribed_apps` |
| 502 Bad Gateway | Verifique se os containers estão rodando: `docker compose ps` |
| Frontend 502 após rebuild | Certifique-se que o Dockerfile do frontend faz `npm run build` antes de `npm run start` |
| Template não encontrado | Liste os templates: `GET /v22.0/WABA_ID/message_templates` e confira nome/idioma |
| Container não sobe | Rode `docker system prune -f` e rebuild |
| WSL needs updating (Windows) | Rode `wsl --update` como admin e reinicie |
| SSL expirado | Rode `certbot renew && systemctl reload nginx` |

---

## 📄 Licença

Projeto privado — uso exclusivo da equipe de Intercâmbio.

---

*Última atualização: Abril 2026*