# Design System: Allen Koch Portfolio Mockup

Source: Stitch project `projects/8511837461517665552` — "Allen Koch Portfolio Mockup".

This document records the design system and screen structure observed through the Stitch MCP server. It is an implementation reference for later React integration; it is not application code.

## 1. Available Screens

- `projects/8511837461517665552/screens/15952544702949969078`
  - Title: `ChatGPT Image 18 mai 2026, 15_40_10 (2).png`
  - Type: image reference only; no HTML code exposed.
  - Size: 1254 x 1254.
- `projects/8511837461517665552/screens/e0230b236d22403d9b4dc3c5a989272a`
  - Title: `Portfolio Allen Koch - Landing Page`
  - Type: desktop HTML screen.
  - Size: 2560 x 11874.
  - Main complete version: nav, hero, projects, stack, about, contact, footer.
- `projects/8511837461517665552/screens/e6cb19f8ded245d487c57bd1380b3426`
  - Title: `Portfolio Allen Koch - Premium Refined`
  - Type: desktop HTML screen.
  - Size: 2560 x 5388.
  - More compact version: nav, hero, selected projects, stack/mindset, footer.

## 2. Visual Theme

Dark-mode-first developer portfolio with an obsidian background, glassmorphic panels, low-opacity borders, cyan/blue/violet accents, and technical iconography. The intended personality is sophisticated, innovative, precise, and focused.

The dominant visual language is:

- Deep layered surfaces instead of flat black.
- Frosted glass cards and navigation using backdrop blur.
- 1px low-opacity borders for precision.
- Ambient cyan/blue/violet lighting behind content.
- Monospaced labels for developer metadata.
- Large geometric headlines with tight tracking.

## 3. Layout Structure

### Global Page

- Body is dark and full height.
- Top navigation is fixed, full width, and glassmorphic.
- Main content begins below the fixed nav.
- Content is constrained by a max-width container:
  - `1280px` in the Aetheric Developer Portfolio system.
  - `1200px` in the Kinetic Noir/Aetheric Precision variants.
- Sections are stacked vertically with large vertical gaps.
- Desktop grids use 12-column thinking, surfaced in the HTML as 2-column, 3-column, 5-column, and 12-column Tailwind grids.

### Navigation

- Fixed at the top with `z-50`.
- Height:
  - `h-20` in the complete landing page.
  - `h-16` in the refined screen.
- Glass background:
  - `rgba(16, 19, 26, 0.6)` plus `backdrop-filter: blur(20px)`.
  - Border bottom: `1px` white at about 10-12% opacity.
- Left: AK logo image plus text/monogram.
- Center: desktop nav links.
- Right: language toggle, dark-mode toggle, and mobile menu icon.
- Mobile behavior visible in classes: desktop links are `hidden md:flex`; menu button is `md:hidden`.

### Hero

- Large centered hero, not split-screen.
- Section height:
  - `min-h-[90vh]` in the full landing page.
  - `min-h-[80vh]` in the refined screen.
- Content:
  - Availability/status pill.
  - Large headline: "Construire des produits web clairs, utiles et maintenables."
  - Supporting paragraph.
  - Two CTA buttons: primary "Voir les projets" and secondary "Me contacter".
- Decorative background:
  - Ambient orbs behind content.
  - Gradient text on the hero keyword/phrase.
- One version includes a bouncing down-arrow indicator; treat as optional, not core.

### Projects

- Full version:
  - Section title and metadata overline.
  - Responsive grid: `grid-cols-1 md:grid-cols-2`.
  - Four project cards: Questonaut, Mission Control, Kane, Portfolio AK.
- Refined version:
  - Two project cards: Questonaut and Mission Control.
  - Cards include image, title, description, stack tags, and action icons.
- Project cards use image-first composition:
  - Aspect ratio: `aspect-video` or fixed image height `h-64`.
  - Image overlay gradient in the full version.
  - Image hover scale to `1.05`.

### Stack / Skills

- Full version:
  - Background band: `bg-surface-container-low`.
  - Bento-style grid: `grid-cols-1 md:grid-cols-3`.
  - Mixed-width cards using `md:col-span-2`.
  - Skill categories below in `grid-cols-2 md:grid-cols-5`.
- Refined version:
  - `grid-cols-1 lg:grid-cols-3`.
  - Left area: four technical cards in `grid-cols-1 md:grid-cols-2`.
  - Right area: glass side panel for "Approche & Mindset".
- Categories observed:
  - Frontend
  - Backend
  - Base de donnees
  - Tools / Outils & AI
  - AI Workflow
  - Product Mindset
  - Delivery

### About

Visible in the full landing page only.

- 12-column desktop layout: `grid-cols-1 lg:grid-cols-12`.
- Portrait column: `lg:col-span-5`.
- Text column: `lg:col-span-7`.
- Portrait treatment:
  - `aspect-[4/5]`.
  - Rounded 2xl glass card.
  - Grayscale by default; color on hover.
  - Floating info badges for location and status.
  - Ambient blur behind portrait.
- Social links: GitHub, LinkedIn, Twitter/X with Material Symbols.

### Contact

Visible in the full landing page.

- Large centered glass panel.
- Padding: `p-12 md:p-24`.
- Radius: `rounded-3xl`.
- Hover gradient overlay from primary to secondary.
- Main CTA: mailto link with send icon.
- Three small metadata columns below CTA:
  - Availability.
  - Response status.
  - Location/timezone-style metadata.

### Footer

- Border top at low opacity.
- Background surface.
- Desktop: horizontal layout.
- Mobile: stacked centered layout.
- Contains AK mark, short label, and social links.

## 4. Design Tokens

### Core Color Palette

Primary project design system: Aetheric Developer Portfolio.

- `background`: `#10131a`
- `surface`: `#10131a`
- `surface-dim`: `#10131a`
- `surface-bright`: `#363940`
- `surface-container-lowest`: `#0b0e14`
- `surface-container-low`: `#191c22`
- `surface-container`: `#1d2026`
- `surface-container-high`: `#272a31`
- `surface-container-highest`: `#32353c`
- `surface-variant`: `#32353c`
- `on-background`: `#e1e2eb`
- `on-surface`: `#e1e2eb`
- `on-surface-variant`: `#c4c5d9`
- `outline`: `#8e90a2`
- `outline-variant`: `#434656`
- `primary`: `#b8c3ff`
- `on-primary`: `#002388`
- `primary-container`: `#2e5bff`
- `on-primary-container`: `#efefff`
- `secondary`: `#d4bbff`
- `on-secondary`: `#41008b`
- `secondary-container`: `#6c04de`
- `tertiary`: `#54d5ff`
- `on-tertiary`: `#003544`
- `tertiary-container`: `#007794`
- `error`: `#ffb4ab`
- `error-container`: `#93000a`

Observed gradient usage:

- Main CTA / accent gradient: `linear-gradient(135deg, #2e5bff 0%, #6c04de 100%)`.
- Kinetic variant accent gradient: `linear-gradient(135deg, #2e5bff 0%, #a855f7 100%)`.
- Hero gradient text in one version: `linear-gradient(to right, #b8c3ff, #54d5ff)`.

### Surfaces and Glass

- `.glass-card`: `rgba(255, 255, 255, 0.03)`, `1px solid rgba(255, 255, 255, 0.08)`, `backdrop-filter: blur(12px)`.
- `.glass-panel`: `rgba(15, 19, 26, 0.7)`, `backdrop-filter: blur(12px)`, low-opacity border.
- `.glass-nav`: `rgba(16, 19, 26, 0.6)`, `backdrop-filter: blur(20px)`.
- Ambient orbs: large absolute circles, about `600px`, low opacity, `blur(100px-120px)`, mix-blend/light overlay behavior.

### Radius

- `sm`: `0.25rem` / 4px.
- `DEFAULT`: either `0.25rem` or `0.5rem` depending on screen variant.
- `lg`: `0.5rem` / 8px.
- `xl`: `1rem` / 16px.
- `full`: `9999px`.
- Common implementation usage:
  - Buttons: 8px radius.
  - Cards: 16px radius.
  - Contact panel: large radius, about 24px.
  - Chips: pill radius.

## 5. Typography Scale

Primary design system:

- `display-hero`
  - Font: Plus Jakarta Sans.
  - Size: `72px`.
  - Weight: `800`.
  - Line-height: `1.1`.
  - Letter-spacing: `-0.04em`.
- `display-hero-mobile`
  - Font: Plus Jakarta Sans.
  - Size: `48px`.
  - Weight: `800`.
  - Line-height: `1.2`.
  - Letter-spacing: `-0.02em`.
- `headline-lg`
  - Font: Plus Jakarta Sans.
  - Size: `40px`.
  - Weight: `700`.
  - Line-height: `1.2`.
- `headline-md`
  - Font: Plus Jakarta Sans.
  - Size: `32px`.
  - Weight: `600`.
  - Line-height: `1.3`.
- `body-lg`
  - Font: Inter.
  - Size: `18px`.
  - Weight: `400`.
  - Line-height: `1.6`.
- `body-md`
  - Font: Inter.
  - Size: `16px`.
  - Weight: `400`.
  - Line-height: `1.6`.
- `label-mono`
  - Font: Geist.
  - Size: `14px`.
  - Weight: `500`.
  - Line-height: `1.0`.
  - Letter-spacing: `0.05em`.

Secondary screen variant:

- Headlines: Space Grotesk.
- Body: Plus Jakarta Sans.
- Labels: JetBrains Mono.
- `headline-xl`: `64px`, line-height `72px`, weight `700`, letter-spacing `-0.02em`.
- `headline-lg`: `48px`, line-height `56px`, weight `600`, letter-spacing `-0.01em`.
- `headline-md`: `32px`, line-height `40px`, weight `600`.
- `label-sm`: `12px`, line-height `16px`, letter-spacing `0.05em`.

Implementation default should use the primary design system unless the final Stitch mockup explicitly asks for the Kinetic Noir variant.

## 6. Spacing System

Base rhythm:

- Unit: 8px.
- Common increments: `8`, `16`, `24`, `32`, `48`, `64`.
- `element-gap`: `16px`.
- `gutter`: `24px`.
- `margin-mobile`: `20px` in the primary system; `16px` in the Kinetic variant.
- `container-max`: `1280px` in primary; `1200px` in variants.
- `section-gap`: `120px`.
- `section-gap-desktop`: `128px` in Kinetic variant.
- `section-gap-mobile`: `64px` in Kinetic variant.

Observed layout utilities:

- Section horizontal padding: `px-gutter`, `px-margin-mobile md:px-gutter`.
- Section vertical padding: `py-section-gap`.
- Project grid gap: `gap-8`.
- Skill bento grid gap: `gap-6`.
- About grid gap: `gap-16`.
- Contact spacing: `space-y-12`.

## 7. Reusable Components

### Fixed Glass Navbar

- Fixed top, full width.
- Glass background with blur 20px.
- Low-opacity bottom border.
- AK logo or text mark on the left.
- Nav links with active state:
  - Active link: primary text plus 2px bottom border.
  - Inactive link: `on-surface-variant`; hover to `on-surface`.
- Action buttons:
  - Material icons for language, dark mode, and menu.
  - Rounded icon hit area.

### Status Pill

- Inline-flex pill with glass background.
- Contains small pulsing dot.
- Uses mono label typography.
- Text examples: "Fullstack Developer — Rails / React · Web Products · AI Workflows".

### Primary Button

- Gradient background.
- White or high-emphasis text.
- Rounded `lg`.
- Padding: usually `px-8 py-4`; contact CTA uses `px-12 py-6`.
- Hover: brightness increase and/or scale to `1.05`.
- Active: scale to `0.95`.

### Secondary Button

- Glass card/panel background.
- Border at low opacity.
- Hover: white fill at 5-10% or brighter surface.
- Active: scale to `0.95` where present.

### Project Card

- Glass background.
- Rounded `xl`.
- Overflow hidden.
- Image area:
  - `aspect-video` or `h-64`.
  - Object-cover image.
  - Hover image scale to `1.05`.
  - Optional gradient overlay from background to transparent.
- Body:
  - Title.
  - Description.
  - Stack chips.
  - Action link or icon buttons.
- Hover:
  - Border moves toward primary at 30% opacity.
  - Optional lift or background brightening.

### Skill / Stack Card

- Glass panel/card with 24-32px padding.
- Icon square: `48px`, rounded `lg`, tinted accent background.
- Title and paragraph.
- Hover: background white 5% or border primary 30%.
- Bento variants can span two columns on desktop.

### Chip / Tag

- Pill shape.
- Small mono text.
- Background either `primary/10` or `surface-bright`.
- Optional 1px border at `primary/20` or `white/5`.

### About Portrait Block

- 4:5 portrait image.
- Glass wrapper with large radius.
- Grayscale default and color on hover.
- Floating glass metadata badges.
- Large blurred accent shape behind the portrait.

### Contact Panel

- Oversized glass card.
- Centered text.
- Hover gradient overlay with primary/secondary tint.
- Primary email CTA.
- Small metadata stats below.

## 8. Responsive Behavior

Verified from responsive classes:

- Desktop nav links are hidden below `md`; a menu icon appears below `md`.
- Hero CTAs stack vertically by default and become horizontal at `sm`.
- Project cards collapse from 2 columns to 1 column below `md`.
- Stack cards collapse from 3 columns to 1 column below `md`.
- About section collapses from 12-column desktop layout to one column below `lg`.
- Footer changes from row to stacked column below `md`.
- Typography adapts hero headline from mobile to desktop:
  - `text-display-hero-mobile md:text-display-hero`.
- Side margins reduce on mobile to `16px` or `20px`.

Unknown from MCP output:

- No separate mobile screen was exposed.
- Menu open/close behavior is not represented in the static HTML.
- No tablet-specific screenshot was exposed; tablet behavior must be inferred from `md`/`lg` classes.

## 9. Assets and Icons

### Image Assets

All observed image assets are hosted as `lh3.googleusercontent.com/aida-public/...` URLs.

- AK logo image in navbar.
- Project image: Questonaut dashboard/productivity interface.
- Project image: Mission Control terminal/command-center interface.
- Project image: Kane AI/neural network visualization.
- Project image: Portfolio AK workstation/portfolio view.
- About portrait image.
- Separate square image-reference screen exists with no HTML.

### Icon System

Observed icon source:

- Google Material Symbols Outlined.
- Font loaded from Google Fonts:
  - `Material Symbols Outlined`.

Observed symbols:

- `language`
- `translate`
- `dark_mode`
- `menu`
- `keyboard_double_arrow_down`
- `arrow_downward`
- `mail`
- `arrow_forward`
- `code`
- `open_in_new`
- `developer_mode`
- `bolt`
- `psychology`
- `inventory_2`
- `web`
- `dns`
- `database`
- `build`
- `location_on`
- `verified`
- `terminal`
- `link`
- `alternate_email`
- `send`

## 10. Interaction States

Observed from classes:

- Nav links:
  - Hover text changes from `on-surface-variant` to `on-surface`.
  - Some variants add `hover:bg-surface-bright/50`.
  - Active link has primary text and bottom border.
- Icon buttons:
  - Hover background `white/5` or text color change.
  - Some variants use `hover:scale-95`.
- Primary buttons:
  - Hover scale `1.05`.
  - Active scale `0.95`.
  - Hover brightness increase or blue shadow.
- Secondary buttons:
  - Hover white overlay or brighter surface.
  - Active scale `0.95`.
- Project cards:
  - Hover primary border at 30% opacity.
  - Image scales to `1.05`.
  - Some variants use hover lift.
- About portrait:
  - Grayscale default, full color on hover.
- Contact panel:
  - Gradient overlay fades in on group hover.
- Status dots:
  - `animate-pulse`.
- Ambient hero indicator:
  - One version includes `animate-bounce`; optional and not core to the design system.

## 11. Implementation Notes for Later React Integration

- Start from the primary Aetheric Developer Portfolio tokens unless the final Stitch handoff specifies another design system asset.
- Preserve the dark-mode glassmorphism and spacing rhythm before adding content.
- Keep the initial React component mapping aligned with the current repo folders:
  - `Navbar`
  - `Hero`
  - `ProjectCard`
  - `StackSection`
  - `AboutSection`
  - `ContactSection`
  - `Footer`
- Do not hard-code Stitch-hosted image URLs as final production assets without user confirmation; treat them as visual references unless explicitly approved.
- The MCP output provides static HTML and classes, not runtime behavior. Mobile menu state, theme toggling, language toggling, and external project links still need product decisions before implementation.

## 12. Integration Decisions Applied

- Implementation target: single static React/Vite landing page.
- Primary visual source: `Portfolio Allen Koch - Landing Page`.
- Secondary visual source: `Portfolio Allen Koch - Premium Refined`, used for cleaner project cards and the stack/mindset bento structure.
- Styling approach: native CSS with design tokens; Tailwind is not installed and is not required for v1.
- Theme scope: dark theme only in v1.
- Language scope: French only in v1.
- Toggles: light/dark and FR/EN controls are intentionally not implemented as interactive state in v1.
- Logo: `ChatGPT Image 18 mai 2026, 15_40_10 (2).png` is saved locally as `src/assets/images/ak-logo.png` for the navbar.
- Stitch-hosted project and portrait images are used as temporary visual references; replace them with final local assets before production if ownership or permanence is uncertain.
- Project links are rendered only when real GitHub or live URLs are available; no placeholder project URLs should be invented.
