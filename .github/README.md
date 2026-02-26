# .github Workspace Guide

This folder contains shared Copilot customization and contribution standards for the planning repository.

## Directory Map

- `copilot-instructions.md`: always-on repository behavior and writing standards
- `AGENTS.md`: planning-focused agent mode definitions
- `instructions/`: file-targeted rules applied by `applyTo` patterns
- `prompts/`: reusable prompt workflows for common planning operations
- `skills/`: task-specific workflows with templates and checklists
- `hooks/`: deterministic post-edit checks

## Operating Principles

- Treat `src/` as the source of truth for project planning artifacts.
- Keep documents concise, scannable, and testable.
- Prefer incremental updates over full rewrites.
- Maintain traceability between requirements, tasks, milestones, and risks.

## Hook Behavior

- Hook config: `hooks/prd-validation.json`
- Validator script: `hooks/scripts/validate-prd.mjs`
- Trigger: post-edit for `src/**/*.md`
- Goal: fail fast on missing planning files and missing required IDs/sections (`FR-*`, `NFR-*`, `TASK-*`, `RISK-*`, Decision Log, milestone coverage)

## Rule Layers

- Repository-wide: `copilot-instructions.md`
- File-scoped: `instructions/*.instructions.md`
- Quality overlay: `instructions/documentation-quality.instructions.md`
- Deterministic enforcement: `hooks/prd-validation.json` + `hooks/scripts/validate-prd.mjs`

## Recommended Maintenance Routine

1. Keep `instructions/*.instructions.md` aligned with document templates.
2. Keep `prompts/*.prompt.md` short and outcome-oriented.
3. Keep `skills/prd-planning/` assets in sync with repository conventions.
4. Re-run formatting after updates: `bun format`.
