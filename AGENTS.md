# AGENTS.md

## Project Role

This repository is a static developer portfolio for Allen Koch.

Act as a pragmatic coding agent. Prioritize clarity, maintainability, accessibility, and a clean implementation over visual over-engineering.

## Stack

- React
- Vite
- TypeScript
- ESLint
- Biome
- Static site only
- No backend
- No database
- No authentication
- No complex form handling

## Product State

This repository contains the final MVP release state for a one-page
professional portfolio for a junior fullstack developer.

Current status: release `1.0.0`.

The current implementation is considered the stable product baseline. Future
changes should be limited to minor front/design polish or punctual content
updates:

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

Use `DESIGN.md` as the primary design reference.

Key visual direction:

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

## Expected Sections

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
- Do not introduce routing unless explicitly requested.
- Do not add backend logic.
- Do not add new global controls unless explicitly validated.
- Preserve the current static-site scope: no backend, no database, no auth.
- Keep the existing theme and language state local to the frontend.
- Keep dark and light themes coherent: any change to default dark-mode design,
  colors, or theme styling must be reflected appropriately in light mode.
- Treat the `1.0.0` implementation as the baseline. Do not reopen broad MVP
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
