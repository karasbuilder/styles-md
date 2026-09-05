---
id: pastel-brutalist
name: Pastel Brutalist
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: a sticker sheet that handles your invoices
summary: Cream page, white cards, 2px ink outlines and hard offset shadows. Flat pastel fills and one ultra-heavy display face carry all the volume.
tags: [light, brutalist, playful, pastel, saas, marketing]
quality: draft
showcase:
  - label: Big Speaker
    url: https://loa-store.vercel.app
    embed: true
    note: Speaker shop built from this spec with Next.js and Tailwind v4
fonts:
  - family: Geist
    role: sans
    license: OFL-1.1
    url: https://github.com/vercel/geist-font
  - family: Geist Sans
    role: sans
    license: OFL-1.1
    url: https://github.com/vercel/geist-font
    note: The name the npm `geist` package registers. Same font as Geist.
  - family: Geist Mono
    role: mono
    license: OFL-1.1
    url: https://github.com/vercel/geist-font
  - family: Inter
    role: sans
    license: OFL-1.1
    url: https://github.com/rsms/inter
    note: Fallback. Close enough in width that the layout holds if Geist is missing.
  - family: Gasoek One
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Gasoek+One
  - family: Archivo Black
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Archivo+Black
    note: Fallback. Same ultra-heavy weight, slightly narrower.
tokens:
  color:
    bg: "#f5f2f0"
    surface: "#ffffff"
    fg: "#151617"
    muted: "#63615f"
    accent: "#b09cfb"
    accentFg: "#151617"
    border: "#151617"
    success: "#4ecb71"
    danger: "#ff6b52"
  font:
    sans: '"Geist", "Geist Sans", Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
    mono: '"Geist Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Gasoek One", "Archivo Black", "Arial Black", Impact, sans-serif'
    scale: 1.25
    baseSize: "16px"
    weightBody: 400
    weightHeading: 800
    headingTracking: -0.02
  space:
    unit: "4px"
    gutter: "24px"
    section: "96px"
    maxWidth: "1200px"
  stroke:
    width: "2px"
  radius:
    sm: "8px"
    md: "12px"
    lg: "16px"
    full: "9999px"
  motion:
    duration: "180ms"
    easing: "cubic-bezier(0.34, 1.4, 0.64, 1)"
  shadow:
    sm: "2px 2px 0 #151617"
    md: "4px 4px 0 #151617"
    lg: "8px 8px 0 #151617"
---

# Pastel Brutalist

Brutalist structure with the edges taken off. Every box is outlined in ink and printed a second
time as a hard shadow, but the corners are round and the fills are pastel, so the page reads as
friendly rather than severe.

## Principles

- Every element that holds content gets a 2px ink border. The border is the drawing.
- Shadows are solid ink offsets, never blurred. Depth is a second copy of the shape, down and right.
- Corners stay round. 12px is the house radius and it is what keeps the black outlines warm.
- Fills are flat pastel. A tint fills the shape, ink outlines it, nothing gradients in between.
- Display type carries all the volume. Body text stays at base size and stays quiet.
- Pressing something moves it into its own shadow: translate 2px, drop the offset to zero.

## Typography

Two families with opposite jobs. The display stack is a single ultra-heavy weight used only for
headings, set tight at -0.02em with line height near 1.0, because at that weight the letters
already fill the line. Everything else is the sans at 400. The mono stack handles small uppercase
labels and any number that sits in a table or a metric, where tabular figures matter.

## Colour

The cream page is what makes plain white cards read as raised, so the two are not
interchangeable. Ink is the only line colour and the only shadow colour. `accent`, `success` and
`danger` are tints for filling shapes, not for setting text: use them behind an ink label, and let
ink or `muted` carry the prose.

## Components

- Button (primary): `accent` fill, ink label at weight 600, 2px border, `radius-md`, 12px/20px padding, `shadow-sm`.
- Button (secondary): `surface` fill, identical border, shadow and metrics. Only the fill changes.
- Card: `surface` fill, 2px border, `radius-lg`, 24px padding, `shadow-md`.
- Tinted card: same as card with a pastel fill. One per group, so the eye has a landing spot.
- Input: `surface` fill, 2px border, `radius-md`, 10px/14px padding; focus adds `shadow-sm`.
- Nav: floating bar inset 16px from the top, `surface` fill, 2px border, `radius-lg`, `shadow-sm`.
- Badge: `radius-full`, 2px border, tint fill, mono uppercase at `text-xs`, 4px/10px padding.
- Table: 2px outer border, 1px inner rules, `surface` header row in mono uppercase, 12px/16px cells.
- Heading: `"Gasoek One", "Archivo Black", "Arial Black", sans-serif`, tracking -0.02em, line height 1.0.
- Focus ring: 3px `accent` outline at 2px offset, following the element radius.

## Do / Don't

- Do outline every tinted shape. A pastel fill with no border dissolves into the cream.
- Do keep all shadow offsets pointing the same way. One light source, down and right.
- Do use mono uppercase at `text-xs` for micro labels: badges, table headers, metric captions.
- Do let headings run wide and wrap. The display face is meant to fill its measure.
- Don't blur a shadow or tint it any colour other than ink.
- Don't set the page to pure white. The cream is why the cards read as raised.
- Don't set body copy, buttons or labels in the display family. It is for headings only.
- Don't put more than three tints in one view, or the outlines stop reading as structure.
- Don't drop the border to 1px on small elements. Badges and inputs keep the full 2px.

## When to use

Marketing sites, pricing pages, launch pages and developer products that want warmth without
losing structure. A poor fit for dense dashboards and long-form reading, where the outlines and
offsets become noise.
