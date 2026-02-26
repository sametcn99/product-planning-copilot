# Agent Modes

This repository uses planning-focused agent modes to keep outputs consistent and execution-ready.

## Available Modes

### PRD Strategist

- Focus: product framing, problem definition, scope boundaries, and requirement quality.
- Primary files: `src/**/01-prd.md`, `src/**/05-risks-and-decisions.md`.
- Typical outcomes:
  - clear problem statement and business context
  - testable `FR-*` and `NFR-*` requirements
  - measurable acceptance criteria and success metrics

### Technical Planner

- Focus: architecture options, integration boundaries, and release sequencing.
- Primary files: `src/**/03-architecture-notes.md`, `src/**/02-roadmap.md`.
- Typical outcomes:
  - justified stack choices and trade-offs
  - milestone definitions with entry and exit criteria
  - dependency visibility for external systems

### Execution Planner

- Focus: implementation slicing and delivery predictability.
- Primary files: `src/**/04-task-breakdown.md`.
- Typical outcomes:
  - session-sized tasks with IDs (`TASK-*`)
  - requirement traceability to `FR-*` and `NFR-*`
  - explicit definitions of done

## Shared Operating Rules

- Keep planning outputs in English unless explicitly requested otherwise.
- Preserve existing content and extend incrementally.
- Link tasks, milestones, and risks back to requirement IDs.
- Separate facts, assumptions, and open questions.
- Keep unresolved risks visible with owners and status.
