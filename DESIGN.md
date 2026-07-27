# Design Reference: Allen Koch Portfolio

This document describes the final MVP implementation state of the portfolio.
It replaces the earlier Stitch-only handoff notes as the primary local design
reference.

## 1. Product State

The project is a static one-page React/Vite portfolio for Allen Koch, a junior
fullstack developer.

Current production status: release `1.1.1`.

The page includes the expected sections, responsive layout, local portrait/logo
assets, theme switching, language switching, project expansion/collapse, and a
back-to-top control. This is the stable design baseline.

Future design work should be limited by default to:

- restrained visual refinements
- accessibility and readability improvements
- small responsive fixes
- punctual content updates for projects, stack, bio, and links

Do not reopen broad MVP redesign work unless explicitly requested.

## 2. Current Structure

Implemented sections and global UI:

- fixed glass navbar
- hero
- projects
- stack / skills
- about
- contact
- footer
- dark/light theme toggle in the header
- FR/EN language toggle in the header
- back-to-top icon button in the bottom-right corner after scroll

The site remains static only:

- no routing
- no backend
- no database
- no authentication
- no complex form handling

## 3. Visual Direction

The design direction is a sober, modern developer portfolio:

- premium minimalism
- dark theme by default
- light theme available through the header toggle
- obsidian-like dark surfaces
- blue/cyan/violet accents
- careful glassmorphism
- restrained hover states and motion
- readable, professional portfolio content

Avoid:

- decorative over-engineering
- heavy neon effects
- excessive gradients
- cluttered hero copy
- adding new controls without a clear product reason

## 4. Theme System

Themes are implemented with CSS variables on `:root` and
`:root[data-theme="light"]`.

Dark theme remains the primary aesthetic:

- deep layered surfaces
- low-opacity white borders
- cyan/blue ambient lighting
- glass cards using backdrop blur

Light theme should preserve the same structure and hierarchy:

- soft neutral background
- white translucent panels
- darker text
- same blue/cyan/violet accent family
- no separate layout rules unless necessary

When changing styles, prefer updating shared tokens or existing component
classes over adding theme-specific one-offs.

Any design, color, or theme-style change made for the default dark theme must
be reflected coherently in light mode.

Any design change must also be checked and adapted for mobile and narrow
responsive layouts.

## 5. Color System

Primary dark tokens currently follow this family:

- background: `#10131a`
- lowest surface: `#0b0e14`
- text: `#e1e2eb`
- muted text: `#c4c5d9`
- primary blue: `#2e5bff`
- cyan accent: `#54d5ff`
- violet accent: `#6c04de`

Chip colors are intentionally shared between project cards and skill cards:

- blue: `#2f6bff`
- cyan: `#16e4ff`
- violet: `#b95cff`
- pink: `#ff3f7f`
- yellow: `#ffcc24`

Keep chips vivid but controlled. They should be visible, not neon.

## 6. Typography

Current font stack:

- headings / brand: Plus Jakarta Sans
- body: Inter
- labels / metadata / chips: Geist on desktop, system monospace on mobile

General rules:

- keep hero headings large but not crowded
- keep metadata short and scannable
- avoid long paragraphs in high-impact areas
- preserve readable line-height in body copy
- do not use viewport-width font scaling
- keep desktop typography faithful to this baseline; mobile may use lighter
  font-loading choices only when the performance benefit is intentional

## 7. Navbar

Current behavior:

- fixed at the top
- glass background with blur
- logo and name on the left
- main anchors in the center
- social links and toggles on the right at desktop widths
- compact controls on smaller screens

Header controls:

- theme toggle uses sun/moon icon states
- language toggle uses a globe icon plus `FR` / `EN`
- both controls must have accessible labels
- hover treatment should stay blue/cyan and restrained

Navbar anchors:

- Home
- Projets / Projects
- Stack
- About
- Contact

## 8. Hero

Current hero is the release `1.1.1` baseline.

Current content pattern:

- status pill
- large headline with highlighted phrase
- subtitle
- short note
- two CTA buttons

The hero should communicate quickly:

- Allen is a junior fullstack developer
- Rails / React / TypeScript are core tools
- he builds useful, maintainable web products
- AI workflows are a lever, not the whole positioning

## 9. Projects

Current behavior:

- first three projects shown by default
- icon toggle expands to all projects
- same toggle collapses back to the initial list
- project cards include image, status, title, description, stack chips, and links

Design rules:

- keep project cards image-first
- keep descriptions concise
- do not invent project URLs
- render disabled/empty links carefully
- preserve accessible image alt text in both languages

Project-card chips use the shared vivid palette from section 5 with no strong
neon glow.

## 10. Stack / Skills

Current structure:

- stack cards for technical categories
- interactive skills tree below the stack grid
- external icons from Simple Icons

Keep stack and skills dense but readable. The skills tree should stay scannable,
keyboard accessible, and clear on mobile without turning the section into a
marketing block.

## 11. About

Current structure:

- portrait card using local asset `src/assets/images/allen-portrait1.jpg`
- grayscale portrait by default, color on hover
- data-driven accordion below the main About layout
- data-driven journey timeline with its first half shown by default
- accessible timeline toggle expands or collapses the complete journey
- floating tags for location/status
- social links below copy

Design rules:

- floating tags must stay readable over the portrait
- preserve the 4:5 portrait format
- keep copy direct and professional
- avoid adding decorative elements unless they improve composition

## 12. Contact

Current structure:

- centered glass contact panel
- short text
- email CTA
- three metadata columns

The contact section should remain simple. Do not add a form unless explicitly
requested.

## 13. Footer

Current structure:

- no `AK` monogram in the footer
- left brand label
- centered social links
- right copyright text on desktop
- stacked centered layout on mobile

Keep the footer quiet and aligned. It should close the page without competing
with the contact CTA.

## 14. Interactions

Implemented interactions:

- navbar hover states
- CTA hover states
- card hover lift / image scale
- portrait grayscale-to-color hover
- project expand/collapse icon rotation
- dark/light theme toggle
- FR/EN language toggle
- back-to-top button appears after scroll

Future effects should be restrained. Add motion only when it improves
orientation, hierarchy, or perceived quality.

## 15. Mobile Performance Baseline

The mobile performance baseline intentionally differs from desktop in a few
bounded areas:

- WebGL particles are desktop-only and must not load on mobile.
- Expensive blur, backdrop-filter, glow, and non-essential animations are
  reduced at mobile widths.
- Mobile uses responsive WebP assets and may use lighter font loading.
- Desktop visual fidelity remains a separate requirement and must be checked
  when changing performance, typography, effects, or responsive rules.

Future mobile optimizations must state whether desktop rendering is expected
to remain unchanged. If unchanged, validate desktop and mobile separately.

## 16. Content And I18n

Copy is currently managed through `src/data/i18n/i18n.ts` and passed through
typed props.

Current languages:

- French
- English

Rules:

- keep French and English copy aligned in meaning
- keep hero copy short
- keep project and skill descriptions concise
- preserve TypeScript typing for translated content
- do not hard-code new display copy inside components when it belongs in i18n

## 17. Assets

Local assets:

- `src/assets/images/generated/ak-logo.webp`
- `src/assets/images/allen-portrait1.jpg`
- `src/assets/images/generated/allen-portrait-360.webp`
- `src/assets/images/generated/allen-portrait-640.webp`
- `src/assets/images/generated/allen-portrait-900.webp`
- `public/projects/kane.png`
- `public/projects/mission-control.png`
- `public/projects/portfolio-ak.png`
- `public/projects/questonaut.png`
- `public/projects/rubber-duck-ia.svg`
- `public/projects/generated/*.webp`

Project visuals are local assets in the release baseline. Keep future project
visuals local unless there is a clear reason to use a stable external asset.

Original PNG/JPG project and portrait assets act as source/fallback files.
Generated WebP files under `public/projects/generated/` are treated as
immutable deploy assets; create a new filename when replacing their content.

## 18. Implementation Constraints

When implementing future changes:

- keep edits minimal and targeted
- preserve the existing React component structure
- prefer native CSS and existing tokens
- do not add dependencies unless explicitly validated
- do not introduce routing
- do not introduce backend logic
- keep semantic HTML and accessible labels
- preserve the mobile-performance baseline unless a change explicitly targets it
- verify desktop and mobile separately when a mobile optimization claims desktop
  rendering is unchanged
- run `npm run build`, `npm run lint`, and `npm run biome:check` before
  finalizing implementation work
- keep changes maintenance-oriented unless a broader redesign is explicitly
  requested
