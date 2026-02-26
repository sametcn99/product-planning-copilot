---
description: "Create a complete planning document set for a new project folder under src/."
agent: ask
---

Create a new planning package in `src/<project-slug>/` using this structure:

1. `00-project-brief.md`
2. `01-prd.md`
3. `02-roadmap.md`
4. `03-architecture-notes.md`
5. `04-task-breakdown.md`
6. `05-risks-and-decisions.md`

Collect missing inputs first, then generate concise, execution-ready docs.

Requirements:

- Keep all content in English.
- Use requirement IDs (`FR-*`, `NFR-*`) in PRD.
- Reference requirement IDs in roadmap and task breakdown.
- Include measurable success criteria and risk mitigations.

Default stack context:

- Frontend: React, Next.js, Vue, Blazor, TypeScript, JavaScript
- Backend: .NET, NestJS, NodeJS, BunJS, C#
- Databases: PostgreSQL, MS SQL, SQLite, InfluxDB
- DevOps and Tooling: GitHub Actions, Docker, Coolify
- Desktop: Electron, .NET MAUI, .NET Windows Forms
- Languages: C#, TypeScript, JavaScript, Python
