---
name: Deterministic Infrastructure System
colors:
  surface: '#11131c'
  surface-dim: '#11131c'
  surface-bright: '#373943'
  surface-container-lowest: '#0c0e17'
  surface-container-low: '#191b24'
  surface-container: '#1d1f29'
  surface-container-high: '#282933'
  surface-container-highest: '#33343e'
  on-surface: '#e2e1ef'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#e2e1ef'
  inverse-on-surface: '#2e303a'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002387'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#104af0'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#ffb59b'
  on-tertiary: '#5b1a00'
  tertiary-container: '#c24100'
  on-tertiary-container: '#ffece6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812900'
  background: '#11131c'
  on-background: '#e2e1ef'
  surface-variant: '#33343e'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  proof-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a Solana protocol that prioritizes mathematical certainty and high-throughput reliability. The brand personality is institutional, technical, and futuristic, evoking a sense of "verifiable truth" through clean geometry and deterministic visual structures.

The aesthetic blends **High-Tech Minimalism** with **Glassmorphism**. It avoids all playful or organic elements in favor of rigid grids, structured data visualizations, and subtle depth. Visual cues like background glows and "proof-grid" patterns suggest a vast, computational space where every pixel serves a functional purpose. The tone is serious and authoritative, catering to developers and institutional validators who require high-density information presented with absolute clarity.

## Colors

The palette is anchored by a deep midnight base to emphasize depth and focus. 

- **Base & Surface:** The foundation is a rich `#050810`. Surfaces use a slightly lighter `#0E121D` to create tonal layering.
- **Primary:** Electric Cobalt (`#2D5BFF`) is the "Action" color, reserved for critical calls to action and primary navigation states.
- **Accents:** Cyan Glow is used for interactive hover states and decorative data-flow highlights.
- **Semantic:** Emerald Green is the "Verifiable" status indicator. It should only be used to confirm successful proofs, finalized transactions, or healthy node status.
- **Glassmorphism:** Overlays use white or primary color values with low opacity (4–12%) and high background blur (16px–32px) to simulate frosted glass.

## Typography

Typography prioritizes legibility and technical precision. 

- **Primary Sans-Serif:** Geist is utilized for headlines to provide a sharp, modern geometric feel. Inter is used for body copy due to its exceptional readability at smaller scales.
- **Technical Monospace:** JetBrains Mono is the secondary typeface. It is strictly reserved for wallet addresses, transaction hashes, "Proof" elements, and technical log data. 
- **Hierarchy:** Use tight tracking for large headlines and slightly increased tracking for monospace data to enhance the "machine-readable" aesthetic.

## Layout & Spacing

The layout is governed by a **12-column fixed grid** on desktop, transitioning to a fluid stack on mobile.

- **The Proof Grid:** A subtle 32px background grid should be visible in the background, serving as a structural guide.
- **Rhythm:** All spacing must be multiples of 4px. Use larger `xxl` gaps to separate major sections, reinforcing a minimalist and institutional "airy" feel despite the technical content.
- **Margins:** Desktop views use 80px side margins, while mobile devices collapse to 20px.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and **Backdrop Blurs** rather than traditional drop shadows.

- **Surface Tiers:** Primary content sits on the base. Floating panels or modals use a `glass` effect: a semi-transparent background with a `32px` backdrop blur and a `1px` stroke.
- **Borders:** Borders should use a subtle linear gradient (Top-Left to Bottom-Right) from `white/10%` to `white/2%`. This creates a "razor-thin" high-tech edge.
- **Atmospheric Depth:** Use large, low-opacity radial glows in Primary Cobalt or Cyan behind key interactive modules to create a sense of three-dimensional light sources.

## Shapes

The shape language is "Soft-Technical." Elements use a consistent **4px (0.25rem)** border radius to maintain a precise, engineered appearance.

- **Small Components:** Buttons and inputs use the standard 4px radius.
- **Large Containers:** Cards and modals may use up to 8px (rounded-lg) for a slightly softer feel against the background.
- **Strictness:** Avoid pill-shaped or highly rounded elements, as they contradict the institutional and serious tone of the system.

## Components

- **Buttons:** Primary buttons use a solid Cobalt Blue background with white text. Secondary buttons are "Ghost" style with a 1px gradient border and no background fill.
- **Status Chips:** Specifically for "Verifiable" status, use a small Emerald Green dot icon next to Monospace text, housed in a subtle green-tinted glass container.
- **Input Fields:** Darker than the surface (`#050810`), with a focus state that activates a Cyan outer glow and a Primary Blue border.
- **Cards:** Defined by the "Glass" treatment—subtle border gradients and backdrop filters. Avoid heavy fills; let the background grid peek through.
- **Deterministic Diagrams:** Flow lines between components should be 1px wide, using Cyan or Primary Blue, with square terminators rather than rounded arrows to emphasize the technical "circuit" nature of the protocol.
- **Data Tables:** High-density, using Monospace for all numerical values. Rows are separated by thin `1px` lines at 5% opacity.