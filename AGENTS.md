# AGENTS.md

## Redesign preparation — 2026-10-27

Allen has explicitly requested an audit and preparation for a redesign positioning
the portfolio as an AI developer offering freelance services. Design is assigned
to Claude; technical audit, architecture and verification are handled by Codex.
Read [WORKFLOW.md](WORKFLOW.md), [brief.md](brief.md),
[runs-workflow.md](runs-workflow.md), the relevant recent entries of
[runs-journal.md](runs-journal.md), and [docs/README.md](docs/README.md).
Release 1.3.2 remains the implementation baseline. Allen's expanded redesign
request supersedes its minor-polish limits: plan a complete new visual system
on one page with anchor navigation, contact/quote form, services, preserved
personal projects, separate client projects and a future trust section. The four imported
Stitch variants and their monochrome design system in
`docs/maquettes_references/` are the visual model to reproduce and adapt under
Claude's design ownership; Allen has not selected one variant. Form processing
must be decided before implementation; no provider, new dependency,
general backend, database or authentication is selected by this planning request.
Preserve accessibility, FR/EN, both themes and mobile performance requirements.

## Run and delegation discipline

For non-trivial work, identify the bounded RUN, its mandate, acceptance criteria,
preserved contracts and verification before editing. Keep at most one RUN active;
delegate only useful bounded subtasks with explicit file ownership using
`docs/handoff-contracts.md`. Roles are capabilities, not automatically available
agents. Claude owns visual design; Codex owns coordination and final integration.
Main agents must delegate when the expected benefit exceeds total handoff,
execution and integration cost. Before choosing a subagent, read
`docs/custom-agents.md` for proposed profiles, user model preferences, effort
selection and fallback rules. The human selects the main agent model.
Record actual contributors, checks, failures and handoff state in the journal.
Do not claim independent review when the implementer performed the review.
Planning a future RUN does not authorize executing it automatically. Session
instructions and existing user authorization take precedence over repository policy.

## Project Role

This repository is a static developer portfolio for Allen Koch.

Act as a pragmatic coding agent. Prioritize clarity, maintainability, accessibility, and a clean implementation over visual over-engineering.

## Stack (current implementation baseline)

- React
- Vite
- TypeScript
- ESLint
- Biome
- Static site only
- No backend
- No database
- No authentication
- Baseline has no form processing; contact/quote processing is planned separately

## Product State

This repository contains the final MVP release state for a one-page
professional portfolio for a junior fullstack developer.

Current status: release `1.3.2`.

The current implementation is considered the stable product baseline. Future
changes outside the explicitly requested redesign remain limited to minor
front/design polish or punctual content updates:

- add or update selected projects
- update stack data
- update bio copy
- update GitHub, LinkedIn, X, or email links
- refine small visual details, accessibility, SEO, or performance issues

The site must present:

- profile and positioning
- selected projects
- technical stack
- developer skills
- about section
- contact CTA
- GitHub, LinkedIn, X, and email links
- dark/light theme toggle
- FR/EN language toggle
- back-to-top action after scroll

## Design Reference

Use `DESIGN.md` for the historical baseline and the current redesign direction.
For the complete redesign, use the updated brief, Claude design brief and imported
Stitch references. The palette below describes the 1.3.2 baseline, not the
monochrome reference for the redesign.

Baseline 1.3.2 visual direction:

- dark theme by default
- light theme available via header toggle
- premium minimalism
- sober modern developer aesthetic
- glassmorphism used carefully
- obsidian background
- blue/cyan/violet accents
- responsive one-page layout
- restrained animations and hover states
- concise bilingual content in French and English

## Baseline Sections

- Navbar
- Hero
- Projects
- Stack / Skills
- About
- Contact
- Footer

Global UI:

- Home
- Projets
- Stack
- About
- Contact
- dark/light icon toggle in the header
- FR/EN language toggle in the header
- minimal back-to-top icon button in the bottom-right corner after scroll

## Implementation Rules

- Make minimal, targeted changes.
- Do not refactor unrelated code.
- Prefer existing project structure.
- Keep content data-driven where useful.
- Do not add dependencies unless explicitly validated.
- For new base UI components (buttons, inputs, selects, dialogs, accordions,
  etc.), use shadcn/ui when a suitable component exists. Consult the Shadcn MCP
  before implementation and reuse already integrated components. Adapt their
  appearance to the validated design; justify any exception.
- Before the first shadcn/ui integration, scope its coexistence with the current
  native CSS: tokens, cascade, global styles/resets, themes and responsive behavior.
  This decision does not authorize Tailwind installation, replacement of native
  CSS, new dependencies or a general migration of existing components. Validate
  the integration approach and any required dependencies before implementation.
- Do not introduce routing unless explicitly requested.
- Add form-processing logic only within the scoped contact run after its
  service/endpoint decision; no general backend is authorized by default.
- Do not add new global controls unless explicitly validated.
- Keep the redesign on one page with anchor navigation and a contact form,
  without database or authentication by default.
- Keep the existing theme and language state local to the frontend.
- Keep dark and light themes coherent: any change to default dark-mode design,
  colors, or theme styling must be reflected appropriately in light mode.
- Keep responsive behavior coherent: any design change must be checked and
  adapted for mobile and narrow viewports.
- Preserve the current mobile-performance baseline: no WebGL particles on
  mobile, reduced expensive effects on mobile, responsive WebP assets, and
  lighter mobile font loading where documented in `DESIGN.md`.
- Any mobile performance optimization must explicitly state whether desktop
  rendering is expected to change. If desktop should remain unchanged, verify
  desktop and mobile separately.
- Treat the `1.3.2` implementation as the baseline. Do not reopen broad MVP
  polish work unless explicitly requested.
- Future changes should be maintenance-oriented by default: content updates,
  minor UI refinements, accessibility fixes, SEO updates, or dependency hygiene.

## Code Quality

- Use TypeScript types for content data.
- Keep components small and readable.
- Keep styling consistent with `DESIGN.md`.
- Avoid hard-coded repeated content inside components when a data file is clearer.
- Prefer semantic HTML.
- Ensure accessible labels, alt text, focus states, and valid links.

## Verification

Before finalizing implementation work, run:

- `npm run build`
- `npm run lint`
- `npm run biome:check`

If a command cannot be run, state why clearly.

For release validation, also run:

- `npm audit --audit-level=moderate`
