---
applyTo: "src/**/01-prd.md"
description: "Generate and maintain structured, testable PRDs with requirement IDs, measurable acceptance criteria, and clear scope boundaries."
---

# PRD Authoring Instructions

When editing a `01-prd.md` file:

- Use concise, decision-oriented sections.
- Always include a problem statement and business context.
- Include user personas and jobs-to-be-done.
- Keep scope explicit with `In Scope` and `Out of Scope` sections.
- Include explicit sections for:
  - Functional Requirements
  - Non-Functional Requirements
  - Acceptance Criteria
  - Success Metrics
  - Assumptions
  - Open Questions
  - Decision Log
- Use requirement IDs:
  - Functional requirements: `FR-001`, `FR-002`, ...
  - Non-functional requirements: `NFR-001`, `NFR-002`, ...
- Keep IDs stable after creation; do not renumber existing IDs unless explicitly requested.
- Make acceptance criteria measurable and testable.
- Include success metrics with baseline and target values when possible.
- Separate facts, assumptions, and open questions.
- Add a short decision log with rationale and trade-offs.

Quality guardrails:

- Avoid duplicate requirement IDs within the same PRD.
- Avoid vague verbs such as "optimize" or "improve" without measurable targets.
- Prefer one requirement per bullet to keep verification straightforward.

Use this default stack context unless the project states otherwise:

- Frontend: React, Next.js, Vue, Blazor, TypeScript, JavaScript
- Backend: .NET, NestJS, NodeJS, BunJS, C#
- Databases: PostgreSQL, MS SQL, SQLite, InfluxDB
- DevOps and Tooling: GitHub Actions, Docker, Coolify
- Desktop: Electron, .NET MAUI, .NET Windows Forms
- Languages: C#, TypeScript, JavaScript, Python
