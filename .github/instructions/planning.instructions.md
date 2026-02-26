---
applyTo: "src/**/{02-roadmap.md,04-task-breakdown.md,05-risks-and-decisions.md}"
description: "Create milestone-based plans, implementation-ready tasks, and explicit risk tracking linked to requirement IDs."
---

# Planning Instructions

When editing roadmap, task, and risk documents:

- Link work items back to PRD requirement IDs.
- Prefer phases and milestones over date-heavy plans when dates are uncertain.
- Define each milestone with:
  - goal
  - key outputs
  - entry criteria
  - exit criteria
  - owner role
- Give milestones consistent IDs (for example `MILE-001`) when milestones are listed as discrete items.
- Break tasks into units that can be completed in one focused work session.
- Each task should include:
  - ID (`TASK-001`)
  - description
  - related requirement IDs
  - dependencies
  - definition of done
- Maintain a dedicated risk log with:
  - ID (`RISK-001`)
  - impact
  - likelihood
  - mitigation
  - owner
  - status

Execution guardrails:

- Mark critical path tasks or dependencies explicitly.
- Keep statuses normalized (for example `open`, `mitigating`, `closed`) to simplify tracking.
- Ensure each task has a verifiable definition of done, not only activity language.

Keep documents practical and execution-focused. Avoid generic advice.
