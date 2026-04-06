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
| Docker | Containerização |
| Docker Compose | Orquestração local/produção |
| PostgreSQL 16 Alpine | Banco de dados containerizado |

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
│   ├── .env                     # Variáveis de ambiente (NÃO commitar)
│   └── .env.example
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
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🚀 Setup Local

### Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado
- Git

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/intercambio-plataform.git
cd intercambio-plataform
```

### 2. Configurar variáveis de ambiente

Copie o exemplo e preencha com seus dados:

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

Em outro terminal:

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

## 🔑 Credenciais Padrão

| Campo | Valor |
|---|---|
| Email | `linsalefe@gmail.com` |
| Senha | `Portugues5#` |
| Role | `admin` |

---

## 🐳 Portas dos Containers

| Serviço | Porta Externa | Porta Interna |
|---|---|---|
| Frontend (Next.js) | 3001 | 3000 |
| Backend (FastAPI) | 8001 | 8000 |
| PostgreSQL | 5443 | 5432 |

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

## ⚙️ Webhook WhatsApp (Meta)

Para receber mensagens, configure o webhook no Meta Developer:

1. Acesse [Meta for Developers](https://developers.facebook.com/)
2. Vá em **WhatsApp > Configuração**
3. Configure a URL do webhook: `https://SEU_DOMINIO/webhook`
4. Token de verificação: mesmo valor de `WEBHOOK_VERIFY_TOKEN` no `.env`
5. Assine os campos: `messages`, `message_deliveries`, `message_reads`

---

## 🔄 Exact Sales — Sincronização

- A sincronização roda **automaticamente a cada 10 minutos**
- Filtra apenas leads com `subSource` começando com `intercambio`
- Leads novos recebem template de boas-vindas e IA é ativada
- Endpoint manual: `POST /api/exact-leads/sync`

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
```

---

## 🚨 Troubleshooting

| Problema | Solução |
|---|---|
| Porta já em uso | Mude as portas no `docker-compose.yml` |
| Erro de senha no banco | Rode `docker compose down -v` e suba novamente |
| Token WhatsApp expirado | Gere novo token no Meta e atualize no canal |
| WSL needs updating (Windows) | Rode `wsl --update` como admin e reinicie |
| Container não sobe | Rode `docker system prune -f` e rebuild |

---

## 📄 Licença

Projeto privado — uso exclusivo da equipe de Intercâmbio.

---

*Última atualização: Abril 2026*