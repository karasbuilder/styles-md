---
id: brutalist-mono
name: Brutalist Mono
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: a specification sheet with opinions
summary: Monospace everywhere, hard black rules, zero radius and offset shadows. Loud orange for anything you can click. Structure is visible on purpose.
tags: [light, brutalist, mono, high-contrast, experimental]
quality: featured
tokens:
  color:
    bg: "#ffffff"
    surface: "#f2f2f0"
    fg: "#000000"
    muted: "#4a4a4a"
    accent: "#ff3b00"
    accentFg: "#000000"
    border: "#000000"
    success: "#007a3d"
    danger: "#d40000"
  font:
    sans: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    mono: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    scale: 1.25
    baseSize: "15px"
    weightBody: 400
    weightHeading: 700
    headingTracking: -0.03
  space:
    unit: "8px"
    gutter: "16px"
    section: "80px"
    maxWidth: "1000px"
  stroke:
    width: "2px"
  radius:
    sm: "0px"
    md: "0px"
    lg: "0px"
    full: "0px"
  motion:
    duration: "0ms"
    easing: "steps(1, end)"
  shadow:
    sm: "3px 3px 0 #000000"
    md: "6px 6px 0 #000000"
    lg: "10px 10px 0 #000000"
---

# Brutalist Mono

Nothing is hidden. Borders are black and 2px, shadows are hard offsets, and every element sits on
an 8px grid you can see if you squint.

## Principles

- Radius is zero everywhere. There are no exceptions and no pills.
- Every container gets a 2px black border. Borders are the layout.
- Shadows are solid offsets in black, never blurred.
- Transitions are instant. Motion has no place here.
- Headings are uppercase with tight negative tracking.

## Typography

One family, monospace, for everything. Hierarchy comes from weight (400 vs 700), case, and the
1.25 size ramp. Because mono is wide, the measure runs to 1000px and line height stays at 1.5.

## Colour

Black, white, one grey, one orange. `surface` is a barely-there grey used to separate a block from
the page when a border alone is not enough. `accent` is reserved strictly for interactive things.

## Components

- Button: accent fill, black label, 2px black border, `shadow-sm`; on press it translates 3px and drops the shadow.
- Card: `surface` fill, 2px black border, `shadow-md`, 24px padding.
- Input: white fill, 2px black border, 12px padding, mono text; focus adds `shadow-sm`.
- Nav: 2px bottom border, uppercase links at `text-sm`, 24px gap, accent underline when active.
- Table: 2px outer border, 1px inner rules, `surface` header row, 12px cells.
- Badge: 2px black border, `surface` fill, uppercase `text-xs`, 4px/8px padding.
- Heading: uppercase, weight 700, tracking -0.03em, black.
- Focus ring: 3px accent outline, 0 offset, square.

## Do / Don't

- Do label things in uppercase — nav, buttons, badges, table headers.
- Do keep the 8px grid visible; every gap is a multiple of 8.
- Do let content touch the borders. Padding is 24px maximum.
- Don't round any corner, ever.
- Don't blur a shadow.
- Don't animate anything, including hovers.
- Don't use accent for large fills — it is a 15% colour at most.
- Don't add a third font or a second accent.

## When to use

Portfolios, tools with personality, launch pages, anything that wants to look built rather than
designed. Wrong for enterprise software or long-form reading.
