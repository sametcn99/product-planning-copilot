# PRD Planning System

This repository is designed to be forked so teams can set up their own documentation-first planning system quickly.

## Main Goal

Fork this repo, rename it for your team, and immediately start producing consistent planning artifacts with built-in quality rules.

What you get out of the box:

- standard project planning structure under `src/<project-slug>/`
- traceable requirement system (`FR-*`, `NFR-*`, `TASK-*`, `RISK-*`)
- reusable Copilot instructions, prompts, and skill assets
- deterministic validation hook for planning quality gates

## Fork and Setup

1. Fork this repository to your GitHub account or organization.
2. Clone your fork locally.
3. Install dependencies:
   - `npm install`
4. Verify formatting and validation tools:
   - `npm run format:check`
   - `node .github/hooks/scripts/validate-prd.mjs`

## Create Your First Project Space

1. Create `src/<project-slug>/` in kebab-case, for example `customer-support-copilot`.
2. Copy all files from `src/_project-template/` into the new folder.
3. Fill documents in this order:
   - `00-project-brief.md`
   - `01-prd.md`
   - `03-architecture-notes.md`
   - `02-roadmap.md`
   - `04-task-breakdown.md`
   - `05-risks-and-decisions.md`

## Default Folder Standard

Every project folder under `src/` should include:

1. `00-project-brief.md`
2. `01-prd.md`
3. `02-roadmap.md`
4. `03-architecture-notes.md`
5. `04-task-breakdown.md`
6. `05-risks-and-decisions.md`

## Planning Rules (Built In)

- `01-prd.md` should include both `FR-*` and `NFR-*` IDs.
- `01-prd.md` should include a `Decision Log` section.
- `04-task-breakdown.md` should include `TASK-*` IDs and links to `FR-*` or `NFR-*`.
- `05-risks-and-decisions.md` should include `RISK-*` IDs.
- `02-roadmap.md` should define milestones.

These are enforced by:

- hook config: `.github/hooks/prd-validation.json`
- validator: `.github/hooks/scripts/validate-prd.mjs`

## Customize for Your Team

Start here:

- `.github/copilot-instructions.md`: repository-wide behavior
- `.github/AGENTS.md`: agent role definitions
- `.github/instructions/*.instructions.md`: file-specific standards
- `.github/prompts/*.prompt.md`: reusable workflows
- `.github/skills/prd-planning/`: templates and quality checklist

Recommended customization order:

1. update wording in `.github/copilot-instructions.md` for your domain
2. adjust `applyTo` coverage in `.github/instructions/`
3. adapt templates in `.github/skills/prd-planning/templates/`
4. tighten or relax checks in `.github/hooks/scripts/validate-prd.mjs`

## Repository Layout

```text
.
|-- .github/
|   |-- copilot-instructions.md
|   |-- AGENTS.md
|   |-- instructions/
|   |-- prompts/
|   |-- skills/
|   `-- hooks/
|-- src/
|   |-- _project-template/
|   `-- <project-slug>/
|-- package.json
`-- README.md
```

## Useful Commands

```bash
npm run format
npm run format:check
node .github/hooks/scripts/validate-prd.mjs
```

## Keeping Your Fork Updated

1. Add upstream remote:
   - `git remote add upstream <original-repo-url>`
2. Fetch updates:
   - `git fetch upstream`
3. Rebase or merge as your team policy requires.
4. Resolve conflicts in `.github/**` carefully, because these files define your planning system behavior.

## Who This Is For

- product and engineering teams that want a repeatable PRD-to-execution flow
- agencies and consultancies managing multiple project plans
- teams using Copilot with repository-level planning governance
