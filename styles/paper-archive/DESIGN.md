---
id: paper-archive
name: Paper Archive
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: a well-kept reference library
summary: Warm grey paper, small type, dense information and no ornament. Made for documentation and reference material that people scan rather than read.
tags: [light, docs, dense, reference, neutral, muted]
quality: featured
tokens:
  color:
    bg: "#f4f2ee"
    surface: "#fdfcfa"
    fg: "#2b2a27"
    muted: "#63605a"
    accent: "#2f5bd8"
    accentFg: "#ffffff"
    border: "#cbc6bc"
    success: "#3d6b3a"
    danger: "#a8322b"
  font:
    sans: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif'
    mono: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    scale: 1.2
    baseSize: "15px"
    weightBody: 400
    weightHeading: 600
    headingTracking: -0.01
  space:
    unit: "4px"
    gutter: "20px"
    section: "64px"
    maxWidth: "1240px"
  stroke:
    width: "1px"
  radius:
    sm: "3px"
    md: "4px"
    lg: "6px"
    full: "9999px"
  motion:
    duration: "120ms"
    easing: "ease-out"
---

# Paper Archive

Documentation styling with no personality budget spent on decoration. Everything goes into
scannability: clear hierarchy, tight rows, and a sidebar you can navigate without thinking.

## Principles

- Optimise for scanning, not reading. Short paragraphs, frequent headings, lots of lists.
- Three-column layout: nav, content, page outline. The outline is not optional.
- Blue is a link colour and nothing else — never a button fill on the page body.
- Code is a first-class citizen; give it a tinted surface and real padding.
- Headings carry a persistent anchor link revealed on hover.

## Typography

Inter at 15px with a conservative 1.2 ratio. Because the ramp is shallow, headings rely on weight
and the horizontal rule beneath `h2` for separation. Line height 1.65 in prose, 1.45 in lists.
Inline code uses mono at 0.9em with a tinted background.

## Colour

Warm grey paper with a near-white content surface. `border` is a soft taupe used constantly — for
sidebar dividers, table rules, callout edges and code block outlines.

## Components

- Sidebar: 260px wide, `bg` fill, 1px right border, `text-sm` links, accent + weight 600 when active.
- Content: `surface` fill, 1240px max width, 40px padding.
- H2: `text-2xl`, 1px bottom border, 40px above and 16px below.
- Code block: `bg` fill, 1px border, `radius-md`, mono `text-sm`, 16px padding, copy button top right.
- Callout: 3px left rule in accent or danger, tinted fill, `radius-sm`, 16px padding.
- Table: 1px rules, 10px/14px cells, `bg` header row, `text-sm` throughout.
- Breadcrumb: `text-sm` at `muted`, `/` separators, above the page title.
- Page outline: right rail, 220px, `text-sm` `muted` links, accent when in view.

## Do / Don't

- Do keep sections 64px apart and paragraphs under five lines.
- Do use tables and lists instead of prose wherever the content allows.
- Do show the file path or route above every code sample.
- Don't add shadows, gradients or illustration. This style has no mood to sell.
- Don't centre anything except the site footer.
- Don't use accent as a background fill outside of a single primary CTA in the nav.
- Don't exceed `text-3xl`, even for the page title.
- Don't hide navigation behind a menu on desktop.

## When to use

API references, product documentation, changelogs, internal wikis, handbooks. Wrong for marketing
sites, where it reads as unfinished.
