# AI Companions (AIC)

> AI + VR/AR + Blockchain to build deeply personalized, emotionally responsive virtual companions—delivered as a modern web platform with a clean, scalable codebase.

AI Companions aims to create immersive, customizable **AI companions** that adapt to each user over time, with token-gated features and a path toward richer experiences in VR/AR and integrations with smart devices. The native utility token **$AIC** underpins access tiers, upgrades, staking mechanics, and future ecosystem utilities. [AI Companions](https://aivcompanions.com/)

---

## Contents

- [Vision & Scope](#vision--scope)
- [System Architecture](#system-architecture)
- [Monorepo Layout](#monorepo-layout)
- [Tech Stack](#tech-stack)
- [Quickstart (Local Dev)](#quickstart-local-dev)
- [Environments & Configuration](#environments--configuration)
- [Docker & Compose](#docker--compose)
- [API (NestJS)](#api-nestjs)
- [AI Service (FastAPI)](#ai-service-fastapi)
- [Web App (Nextjs)](#web-app-nextjs)
- [Database & Prisma](#database--prisma)
- [Smart Contracts](#smart-contracts)
- [Testing, Linting, CI](#testing-linting-ci)
- [Security & Privacy](#security--privacy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Vision & Scope

- **Personalized relationships:** Companions learn user preferences and evolve in personality, response style, and content over time.
- **Immersive UX:** The long-term plan includes richer **VR/AR** experiences and integrations with devices and wearables.
- **Tokenized utilities:** The **$AIC** token is intended for premium features, upgrades, potential staking, and marketplace interactions. [AI Companions](https://aivcompanions.com/)

> Exchange listings and third-party coverage (BitMart primary listing, 2024-09-09) have introduced $AIC to broader markets; see external resources for details. BitMart+1

---

## System Architecture

A modular architecture separates concerns across **Web (Next.js)**, **API (NestJS)**, **AI (FastAPI)**, and **Contracts (Foundry)**. This keeps iteration fast while isolating risk and enabling independent scaling.

```
[ Web (Next.js) ]  →  [ API (NestJS) ]  →  [ Postgres + Prisma ]
           │                   │
           └──────────────→  [ AI (FastAPI) ]
                                │
                           [ Vector DB (future) ]
                                      │
                           [ $AIC Contracts (Foundry) ]

```

---

## Monorepo Layout

```
aic/
├─ apps/
│  ├─ web/        # Next.js (App Router, TS, Tailwind, shadcn/ui)
│  ├─ api/        # NestJS REST API (Swagger, Prisma)
│  └─ ai/         # FastAPI microservice (chat, embeddings stubs)
├─ packages/
│  ├─ shared/     # TS types & zod schemas shared across web/api
│  └─ ui/         # (reserved) shared UI components
├─ contracts/     # Foundry scaffold (AIC token placeholder)
├─ docs/          # (optional) Nextra/Docusaurus site
├─ infra/
│  ├─ docker/     # Dockerfiles for web/api/ai
│  └─ docker-compose.yaml
├─ .github/workflows/ci.yml
├─ turbo.json
├─ tsconfig.base.json
├─ package.json
└─ README.md

```

---

## Tech Stack

- **Web:** Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · TanStack Query (later)
- **API:** NestJS · Prisma · PostgreSQL · Swagger
- **AI Service:** FastAPI · Pydantic · Uvicorn
- **Contracts:** Foundry (Solidity) — ERC-20 placeholder for **$AIC**
- **Tooling:** Turborepo · ESLint · Prettier · GitHub Actions · Docker

---

## Quickstart (Local Dev)

**Prereqs**

- Node.js 20+ and npm
- Python 3.11+
- Docker (optional, for compose)
- PostgreSQL (local or via Docker)

**Install**

```bash
npm install

```

**Dev (individual)**

```bash
# Web
npm run dev -w apps/web
# API
npm run dev -w apps/api
# AI (python)
cd apps/ai && python -m uvicorn app.main:app --reload --port 8001
```

**Dev (multi) with Turbo**

```bash
npm run dev
```

**Lint & build**

```bash
npm run lint
npm run build
```

---

## Environments & Configuration

Create env files based on examples:

- `apps/web/.env.example`
  ```
  NEXT_PUBLIC_API_URL=http://localhost:3001
  ```
- `apps/api/.env.example`
  ```
  PORT=3001
  DATABASE_URL=postgresql://postgres:postgres@localhost:5432/aic
  JWT_SECRET=changeme
  ```
- `apps/ai/.env.example`
  ```
  AI_PORT=8001
  AI_PROVIDER=mock
  ```

Copy to `.env` and adjust as needed.

---

## Docker & Compose

A minimal compose setup is provided to run **web**, **api**, **ai**, and **db**:

```bash
cd infra
docker compose up --build
```

- Web: [http://localhost:3000](http://localhost:3000/)
- API: [http://localhost:3001](http://localhost:3001/) (Swagger at `/docs`)
- AI: [http://localhost:8001](http://localhost:8001/)
- DB: postgres:16 on 5432 (volume persisted)

---

## API (NestJS)

- Health: `GET /health` → `{ ok: true }`
- Swagger Docs: `/docs` (auto-generated)

> Future: Auth, sessions, companions CRUD, billing/adapters, and token-gated endpoints.

**Prisma**

```bash
npm run prisma:generate -w apps/api
npm run prisma:migrate -w apps/api
npm run prisma:seed -w apps/api
```

---

## AI Service (FastAPI)

- Health: `GET /health`
- Chat stub: `POST /v1/chat` → returns a mock reply

> Future: provider adapters, embeddings pipeline, safety filters, and memory profiles.

Run locally:

```bash
cd apps/ai
python -m uvicorn app.main:app --reload --port 8001
```

---

## Web App (Next.js)

- Basic marketing & auth skeleton with Tailwind + shadcn/ui.
- Protected layout area for future dashboards and companion settings.

Dev:

```bash
npm run dev -w apps/web
```

---

## Database & Prisma

Initial schema includes **User** and **Session** tables. Extend via `apps/api/prisma/schema.prisma` and run migrations. For local dev, a default `postgres` user/password is used (see `.env.example`).

---

## Smart Contracts

A placeholder **AIC** ERC-20 scaffold exists under `/contracts` for future token utility (staking, marketplace fees, or access tiers). Refer to **Foundry** docs to build, test, and deploy.

> Token listings and external exchange info exist, but this repository focuses on application code. For market/ticker data, consult third-party resources independently. BitMart+2Bitget Wallet+2

---

## Testing, Linting, CI

- **ESLint/Prettier:** enforced across TS workspaces
- **GitHub Actions:** `ci.yml` runs install → lint → build on PRs and pushes
- **Recommended:** add unit tests (Vitest/Jest) and API e2e tests as features land

---

## Security & Privacy

- Follow least-privilege for service-to-service tokens and DB creds.
- Never commit secrets; use `.env` + secret managers in production.
- AI companion experiences must respect user privacy, consent, and data minimization. The space is evolving; implement transparent privacy disclosures and opt-outs.

> The official materials emphasize personalized companions and future VR/AR; treat security, consent, and safety as first-class requirements as we extend beyond chat into immersive contexts. AI Companions

---

## Roadmap

**Phase 1 (Q4 2024 – Q1 2025)**

Core foundation: whitepaper/site, token launch/listings, initial web/API/AI scaffolds, health endpoints, basic auth, and developer tooling. [AI Companions](https://aivcompanions.com/AIC_Whitepaper.pdf)

**Phase 2 (Q2 – Q3 2025)**

Customizable companions (MVP), improved personalization, content packs, initial marketplace concepts, expanded docs/community. [AI Companions](https://aivcompanions.com/AIC_Whitepaper.pdf)

**Phase 3 (Q4 2025 – Q1 2026)**

User-generated content, gamification loops, collectibles, social features. [AI Companions](https://aivcompanions.com/AIC_Whitepaper.pdf)

**Phase 4 (Q2 – Q3 2026)**

VR/AR integrations, wearables/smart-home hooks, cross-chain support, and advanced safety/controls. [AI Companions](https://aivcompanions.com/AIC_Whitepaper.pdf)

> Disclaimer: Timelines are directional and depend on delivery, audits, and ecosystem factors.

---

## Contributing

We welcome issues and PRs for:

- Bug fixes, docs, and developer UX improvements
- Modular feature work in `apps/web`, `apps/api`, or `apps/ai`
- Hardening security and building privacy tooling
- Testing coverage and CI enhancements

Please read **CONTRIBUTING.md** and follow conventional commits (e.g., `feat:`, `chore:`, `fix:`).

---

## License

MIT © AI Companions

---

### References & External Resources

- Official site: aivcompanions.com (vision, marketing site). [AI Companions](https://aivcompanions.com/)
- Whitepaper (PDF): roadmap, token/vision details. [AI Companions](https://aivcompanions.com/AIC_Whitepaper.pdf)

---
