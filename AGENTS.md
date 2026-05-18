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

## Product Goal

Build a one-page professional portfolio for a junior fullstack developer.

The site must present:

- profile and positioning
- selected projects
- technical stack
- developer skills
- about section
- contact CTA
- GitHub, LinkedIn, X, and email links

## Design Reference

Use `DESIGN.md` as the primary design reference.

Key visual direction:

- dark theme by default
- premium minimalism
- sober modern developer aesthetic
- glassmorphism used carefully
- obsidian background
- blue/cyan/violet accents
- responsive one-page layout
- restrained animations and hover states

## Expected Sections

- Navbar
- Hero
- Projects
- Stack / Skills
- About
- Contact
- Footer

Navbar anchors:

- Home
- Projets
- Stack
- About
- Contact

## Implementation Rules

- Make minimal, targeted changes.
- Do not refactor unrelated code.
- Prefer existing project structure.
- Keep content data-driven where useful.
- Do not add dependencies unless explicitly validated.
- Do not introduce routing unless explicitly requested.
- Do not add backend logic.
- Do not implement theme or language toggles unless explicitly validated.

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
