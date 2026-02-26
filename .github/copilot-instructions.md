# Copilot Instructions For PRD Repository

This repository is dedicated to product planning artifacts.
The primary goal is to generate and maintain high-quality planning documents for many different project types.

## Core Objective

- Treat this repository as a documentation-first workspace.
- Prioritize clarity, traceability, and execution readiness over implementation details.
- Produce planning outputs in English unless explicitly requested otherwise.

## Repository Conventions

- Each project lives under `src/<project-slug>/`.
- Prefer this file structure for each project:
  - `00-project-brief.md`
  - `01-prd.md`
  - `02-roadmap.md`
  - `03-architecture-notes.md`
  - `04-task-breakdown.md`
  - `05-risks-and-decisions.md`
- Use kebab-case for folder names.
- Keep documents concise, scannable, and decision-oriented.

## Planning Standards

- Every PRD should include:
  - Problem statement and business context
  - User personas and jobs-to-be-done
  - Scope (in-scope / out-of-scope)
  - Functional and non-functional requirements
  - Success metrics and acceptance criteria
  - Milestones, risks, assumptions, and dependencies
- Requirements must be testable and unambiguous.
- Prefer numbered requirement IDs (for example `FR-001`, `NFR-001`).

## Tech Stack Context

Use this stack as default recommendation context when planning:

- Frontend: React, Next.js, Vue, Blazor, TypeScript, JavaScript
- Backend: .NET, NestJS, NodeJS, BunJS, C#
- Databases: PostgreSQL, MS SQL, SQLite, InfluxDB
- DevOps and Tooling: GitHub Actions, Docker, Coolify
- Desktop: Electron, .NET MAUI, .NET Windows Forms
- Languages: C#, TypeScript, JavaScript, Python

When documenting architecture choices, explicitly justify why a stack subset fits the project.

## Output Quality Rules

- Avoid vague statements such as "improve performance"; define measurable targets.
- Separate facts, assumptions, and open questions.
- Add a short "Decision Log" section when proposing trade-offs.
- End planning documents with explicit next actions.

## Editing Behavior

- Preserve existing project docs unless the request is to refactor them.
- Extend documents incrementally; do not rewrite entire files unnecessarily.
- Keep markdown formatting consistent and clean.
