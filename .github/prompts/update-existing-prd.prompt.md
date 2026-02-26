---
description: "Update an existing project's PRD package incrementally without rewriting unrelated sections."
agent: ask
---

Update documents in `src/<project-slug>/` based on the requested change.

Process:

1. Read current files first.
2. Identify impacted sections only.
3. Update related documents consistently:
   - `01-prd.md`
   - `02-roadmap.md`
   - `03-architecture-notes.md`
   - `04-task-breakdown.md`
   - `05-risks-and-decisions.md`
4. Preserve unaffected content.

Quality rules:

- Keep requirement IDs stable unless a requirement is intentionally removed.
- Add new IDs only when needed.
- Update acceptance criteria, risks, and dependencies for changed scope.
- End with a short "What changed" summary.
