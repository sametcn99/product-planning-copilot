---
description: "Convert a PRD into a milestone roadmap and implementation task breakdown with dependencies."
agent: ask
---

Using `src/<project-slug>/01-prd.md` as the source of truth:

1. Update `02-roadmap.md` with milestones and exit criteria.
2. Update `04-task-breakdown.md` with actionable tasks.
3. Update `05-risks-and-decisions.md` with delivery risks.

Rules:

- Every task must map to one or more requirement IDs.
- Highlight critical path tasks and external dependencies.
- Define done criteria for each task.
- Keep estimates relative (S, M, L) unless exact dates are provided.
