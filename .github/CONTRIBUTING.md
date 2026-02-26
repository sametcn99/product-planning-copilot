# Contributing Guide

## Purpose

This repository stores project planning artifacts. Contributions should improve clarity, traceability, and execution readiness.

## Document Standards

- Project files live under `src/<project-slug>/`.
- Use kebab-case for `<project-slug>`.
- Keep the standard file set:
  - `00-project-brief.md`
  - `01-prd.md`
  - `02-roadmap.md`
  - `03-architecture-notes.md`
  - `04-task-breakdown.md`
  - `05-risks-and-decisions.md`

## Requirement Standards

- Functional requirements: `FR-001`, `FR-002`, ...
- Non-functional requirements: `NFR-001`, `NFR-002`, ...
- Requirements must be specific, measurable, and testable.

## Traceability Standards

- Roadmap items should map to requirement IDs.
- Tasks should map to one or more requirement IDs.
- Risks should reference impacted requirements or milestones.

## Copilot Customization Changes

When editing `.github/**` files:

- Keep descriptions explicit and discoverable.
- Use narrow `applyTo` patterns for instructions.
- Avoid broad context-loading patterns unless necessary.

## Pre-PR Checks

1. Run `node .github/hooks/scripts/validate-prd.mjs`.
2. Run `bun format`.
3. Complete the PR template checklist.
