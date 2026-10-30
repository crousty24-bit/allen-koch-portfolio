---
name: Monochrome Editorial Portfolio
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#605e5a'
  on-secondary: '#ffffff'
  secondary-container: '#e3dfda'
  on-secondary-container: '#64625f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e6e2dd'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#484743'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
  light-bg: '#F8F7F3'
  light-surface: '#ECEAE4'
  light-border: '#E2DFD7'
  light-text-primary: '#191919'
  light-text-secondary: '#73716D'
  dark-bg: '#171715'
  dark-surface: '#232320'
  dark-border: '#31302C'
  dark-text-primary: '#F5F2EB'
  dark-text-secondary: '#A5A29A'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 5.5rem
    fontWeight: '400'
    lineHeight: 5.5rem
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: 3.25rem
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Geist
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: 3.75rem
    letterSpacing: -0.035em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.5rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.4rem
    letterSpacing: 0.005em
  label-code:
    fontFamily: Space Mono
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
    letterSpacing: 0.06em
  label-caps:
    fontFamily: Geist
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
  space-2xl: 7rem
---

## Brand & Style

This design system expresses a refined, architectural, and gallery-grade digital presence for an independent senior web developer. Rooted in Swiss modernist typography, German functionalism, and high-end editorial publishing, the aesthetic balances uncompromising restraint with precise technical sophistication.

The core visual narrative relies on stark contrast, deliberate structural grids, generous white space, and hairline delineations. Rather than depending on decorative colors, gradients, or ambient skeuomorphism, visual energy is driven through dramatic typographic scale shifts, strict proportion, and tactile editorial rhythm. It evokes intellectual clarity, craftsmanship, meticulous attention to detail, and understated luxury.

## Colors

The palette is strictly monochromatic and warm-tinted, avoiding sterile digital blue-grays in favor of parchment, raw stone, charcoal, and archival ink tones. 

- **Light Mode Hierarchy**:
  - Canvas Background: `#F8F7F3` (Alabaster warmth)
  - Secondary Surface: `#ECEAE4` (Subtle tactile block)
  - Structural Hairlines: `#E2DFD7` (Crisp separation)
  - Primary Text & Structural Glyphs: `#191919` (Dense off-black)
  - Secondary & Caption Text: `#73716D` (Muted mineral gray)

- **Dark Mode Hierarchy**:
  - Canvas Background: `#171715` (Deep basalt)
  - Secondary Surface: `#232320` (Warm obsidian slab)
  - Structural Hairlines: `#31302C` (Subtle boundary stroke)
  - Primary Text & Structural Glyphs: `#F5F2EB` (Warm ivory)
  - Secondary & Caption Text: `#A5A29A` (Muted silver)

No chromatic accents (red, green, blue) exist across the system. Statuses, hover states, and active flags are conveyed entirely via tonal inversion, underline shifts, font-weight transitions, or hairline borders.

## Typography

The typographic hierarchy implements **Geist** for primary editorial and structural prose, paired with **Space Mono** for indexing, technical tags, metadata, and timestamps.

- **Editorial Headings**: Display and headline treatments use optical negative tracking (`-0.03em` to `-0.04em`) with tight line heights to maintain the stark character of Swiss broadsheets.
- **Reading Rhythm**: Body text utilizes generous leading (`1.6` multiplier) ensuring clean horizontal scan lines against flat surfaces.
- **Micro-Data & Indexing**: Technical parameters, year indicators, project counts, and navigational labels use uppercase `label-caps` or monospaced `label-code` to reinforce code-oriented craft and precise composition.

## Layout & Spacing

The layout is grounded in a 12-column architectural grid defined by crisp 1px borders, asymmetrical text columns, and monumental vertical gaps.

- **Breakpoints & Grids**:
  - **Desktop (1024px+)**: 12-column fluid grid, `2.5rem` gutters, `3.5rem` outer canvas padding. Max-width container caps at `1440px`.
  - **Tablet (768px - 1023px)**: 6-column grid, `1.5rem` gutters, `2rem` outer padding.
  - **Mobile (< 768px)**: 2-column or single-column stack, `1rem` gutters, `1.25rem` outer padding.

- **Editorial Vertical Rhythm**:
  - Major portfolio case studies and structural chapters are partitioned using `space-2xl` (`7rem`) to create unhurried, exhibition-style separation.
  - Information clusters (index lists, specs, technical summaries) use tight internal spacing (`space-sm` to `space-md`) framed inside spacious boundaries.

## Elevation & Depth

Visual hierarchy is constructed exclusively without ambient drop shadows, blurred overlays, or neomorphic gradients.

- **Flat Tonal Planes**: Depth is communicated strictly via surface variation. The foundational canvas (`#F8F7F3` light / `#171715` dark) sits behind inset tonal planes (`#ECEAE4` light / `#232320` dark).
- **Hairline Precision**: All container divisions, table boundaries, and section separations utilize crisp 1px solid borders (`#E2DFD7` in light mode, `#31302C` in dark mode). 
- **Layer Stacking**: Modals and slide-over drawers use flat contrasting panels with a solid 1px border. No drop shadows are cast onto the background; context is preserved by flat contrast and razor-sharp borders.

## Shapes

The shape vocabulary is strictly sharp (`roundedness: 0`), utilizing pure rectilinear forms (0px radius) across all interactive controls, cards, tags, and inputs.

The sharp geometry reinforces an uncompromising, structural, and modernist character. Every box, button, dialog, and media wrapper meets with mathematically square 90-degree corners, echoing editorial column rules and brutalist architectural drafting.

## Components

- **Buttons**:
  - **Primary**: Solid off-black background (`#191919` light / `#F5F2EB` dark), stark inverted text, 0px border radius, uppercase or sentence case in `label-code` or `body-sm`. Hover triggers total color inversion.
  - **Secondary / Ghost**: Transparent background with a 1px solid border. Hover fills with the opposite solid tone.
  - **Editorial Link**: Underlined text with a 1px baseline offset; hover triggers a sliding hairline rule or tonal fade to secondary text.

- **Cards & Project Items**:
  - Rendered with flat 1px borders or boundary rules with zero elevation. Images are framed in sharp rectangular viewports.
  - Metadata headers (number, year, client, stack) sit directly atop the card in `label-code`.

- **Lists & Tables**:
  - Index-style lists feature 1px top and bottom hairline borders.
  - Hovering a table row changes the surface color subtly to the secondary surface tone without shifting layout dimensions.

- **Form Fields & Inputs**:
  - Flat inputs with a single bottom 1px rule or a full hairline outline. Background is completely transparent or matched to the surface.
  - Labels are positioned in uppercase `label-caps` above the field. Focus is indicated by darkening/lightening the hairline border to the primary text tone.

- **Chips & Tags**:
  - Minimal rectangular boxes with a 1px solid border, `0.25rem` vertical and `0.5rem` horizontal padding, paired with `label-code` typography.

- **Checkboxes & Radios**:
  - Crisp square boxes (0px radius) with 1px borders. Checked state is marked by a solid square fill or clean diagonal/slash mark rather than a rounded dot.

- **Section Dividers**:
  - 1px solid rules spanning the full column width or grid extent, acting as compositional axes throughout the page.