---
id: slate-enterprise
name: Slate Enterprise
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: quiet authority in a boardroom
summary: Cool slate neutrals, a serious blue, small radii and high density. The default for business software that has to look credible before it looks nice.
tags: [light, enterprise, saas, dense, professional, neutral]
quality: featured
tokens:
  color:
    bg: "#ffffff"
    surface: "#f8fafc"
    fg: "#0f172a"
    muted: "#52607a"
    accent: "#1d4ed8"
    accentFg: "#ffffff"
    border: "#cdd5e0"
    success: "#15803d"
    danger: "#b91c1c"
  font:
    sans: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif'
    mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    scale: 1.2
    baseSize: "14px"
    weightBody: 400
    weightHeading: 600
    headingTracking: -0.018
  space:
    unit: "4px"
    gutter: "20px"
    section: "72px"
    maxWidth: "1280px"
  stroke:
    width: "1px"
  radius:
    sm: "4px"
    md: "6px"
    lg: "8px"
    full: "9999px"
  motion:
    duration: "140ms"
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  shadow:
    sm: "0 1px 2px rgba(15,23,42,0.06)"
    md: "0 4px 12px rgba(15,23,42,0.08)"
    lg: "0 12px 32px rgba(15,23,42,0.12)"
---

# Slate Enterprise

Credible, dense and unremarkable in the best way. This is the style that gets through a
procurement review.

## Principles

- Density first. 14px base, 32px table rows, 20px gutters.
- Blue signals action and nothing else. Status uses green, amber and red.
- Small radii throughout — 6px is the default and 8px is the ceiling.
- Every destructive action needs a confirmation step and red is reserved for it.
- Tables are the primary interface. Design them before you design anything else.

## Typography

Inter at 14px with a 1.2 ratio. The ramp is intentionally shallow because most screens are
tables and forms, not headlines. Line height 1.55 body, 1.3 headings. Numeric columns use tabular
figures, right aligned, always.

## Colour

Pure white page with a cool slate `surface` for panels, headers and hover rows. `border` is a
neutral blue-grey used everywhere structure is needed. Status colours are muted, never bright.

## Components

- Button (primary): accent fill, white label, `radius-md`, 8px/16px padding, `text-sm`.
- Button (secondary): white fill, 1px border, `fg` label, same metrics.
- Card: white fill, 1px border, `radius-lg`, 20px padding, `shadow-sm`.
- Input: white fill, 1px border, `radius-md`, 7px/10px padding, `text-sm`; focus adds a 2px accent ring.
- Nav: 56px tall, white, 1px bottom border; sidebar 240px on `surface`.
- Table: 1px horizontal rules, 32px rows, `surface` sticky header, `text-sm`, hover row tint.
- Badge: tinted status fill, matching dark text, `radius-sm`, `text-xs`, 2px/8px padding.
- Toolbar: 48px tall, `surface` fill, 1px bottom border, search left, actions right.

## Do / Don't

- Do use `text-sm` for table content, form labels and secondary actions.
- Do keep forms in a single column with labels above fields.
- Do show counts, timestamps and owners — enterprise users want metadata.
- Don't use large radii or playful motion; both undermine credibility here.
- Don't put more than one primary button in a view.
- Don't use saturated colour for anything except status and the accent.
- Don't exceed 72px between sections; the density should feel deliberate.
- Don't hide bulk actions behind hover — keep them in a persistent toolbar.

## When to use

B2B dashboards, admin panels, CRMs, internal tooling, compliance products. Wrong for consumer apps
or anything that needs to feel distinctive.
