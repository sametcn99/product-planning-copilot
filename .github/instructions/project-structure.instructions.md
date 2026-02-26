---
applyTo: "src/**"
description: "Preserve and apply the standard documentation structure for each project folder under src."
---

# Project Structure Instructions

For each project under `src/<project-slug>/`, prefer this document set:

1. `00-project-brief.md`
2. `01-prd.md`
3. `02-roadmap.md`
4. `03-architecture-notes.md`
5. `04-task-breakdown.md`
6. `05-risks-and-decisions.md`

Guidelines:

- Use kebab-case for `<project-slug>`.
- Do not delete existing documents unless explicitly requested.
- If content is missing, create the missing file with a clear section scaffold.
- Keep cross-document consistency for names, requirement IDs, and milestones.
- Keep terminology consistent across all six files (project name, persona names, milestone labels).
- When adding IDs (`FR-*`, `NFR-*`, `TASK-*`, `RISK-*`), avoid reusing existing IDs in the same project folder.
