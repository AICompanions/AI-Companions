# AIC AI Service (FastAPI)

Lightweight microservice for chat, embeddings, and future AI tasks.

## Endpoints

- `GET /health` → `{ "ok": true }`
- `POST /v1/chat` → `{ "reply": "stub", "provider": "mock" }` (stub)

## Run locally

```bash
# from repo root
cd apps/ai
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8001
```

Open: http://localhost:8001/health

## Environment

Create `.env` from example:

```
AI_PORT=8001
AI_PROVIDER=mock

```

## Project layout

```
apps/ai/
├─ app/
│  ├─ main.py          # FastAPI app + router mounts
│  ├─ config.py        # Pydantic settings
│  └─ routers/
│     └─ chat.py       # /v1/chat stub
├─ requirements.txt
└─ README.md

```

## Notes

- Keep endpoints small and stateless; add provider adapters under `app/providers/` later.
- Add rate limiting & auth (API key/JWT) before exposing publicly.
- For production, run via `uvicorn` behind a process manager (e.g., `gunicorn -k uvicorn.workers.UvicornWorker`).
