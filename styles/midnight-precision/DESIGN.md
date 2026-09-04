---
id: midnight-precision
name: Midnight Precision
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: a precision instrument at midnight
summary: Dark, quiet and exact. Tight tracking, restrained colour, and a single indigo accent that only appears where an action lives.
tags: [dark, minimal, saas, product, high-contrast]
quality: featured
tokens:
  color:
    bg: "#0a0b0d"
    surface: "#141519"
    fg: "#f2f3f5"
    muted: "#9ba1ad"
    accent: "#7c8cf8"
    accentFg: "#0a0b0d"
    border: "#2f333b"
    success: "#4ec9a5"
    danger: "#f2555a"
  font:
    sans: '"Inter", "Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif'
    mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    scale: 1.2
    baseSize: "15px"
    weightBody: 400
    weightHeading: 560
    headingTracking: -0.022
  space:
    unit: "4px"
    gutter: "24px"
    section: "96px"
    maxWidth: "1120px"
  stroke:
    width: "1px"
  radius:
    sm: "4px"
    md: "8px"
    lg: "12px"
    full: "9999px"
  motion:
    duration: "160ms"
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  shadow:
    sm: "0 1px 2px rgba(0,0,0,0.4)"
    md: "0 4px 16px rgba(0,0,0,0.45)"
    lg: "0 16px 48px rgba(0,0,0,0.55)"
---

# Midnight Precision

The house style for tools people keep open all day. Everything is low-noise until it needs
attention. Colour is a signal, not decoration.

## Principles

- Accent colour marks exactly one action per view. A second accent means you picked the wrong one.
- Depth comes from surface lightness, never from borders plus shadows plus fills at once.
- Headings sit tight: negative tracking, medium weight, never bold.
- Interface text stays at base size or smaller. Only page titles exceed it.
- Motion is short and linear-feeling. Nothing bounces, nothing fades slower than 200ms.

## Typography

Inter at 15px with a 1.2 ratio gives a narrow ramp, so the gap between body and heading is
deliberately small so that hierarchy comes from weight and spacing rather than size. Use
`weightHeading` (560) for every heading level and let the size step carry the rest. Numerals in
tables and metrics use the mono stack with tabular figures.

## Colour

The two greys do the work: `bg` for the page, `surface` for anything raised. `border` is visible
but never assertive. It exists so a card reads as a card at a glance, not so it draws a box.
Reserve `accent` for primary buttons, active nav items and focus rings.

## Components

- Button (primary): accent fill, `accentFg` label, `radius-md`, 10px/16px padding, no shadow.
- Button (secondary): transparent fill, 1px border, `fg` label, same metrics as primary.
- Card: `surface` fill, 1px border, `radius-lg`, 24px padding, `shadow-sm` only when interactive.
- Input: `bg` fill, 1px border, `radius-md`, 9px/12px padding; focus swaps border to accent.
- Nav: 48px tall, `surface` fill, 1px bottom border, links at `muted` and `fg` when active.
- Table: no vertical rules, 1px horizontal borders, 12px/16px cells, `muted` headers at `text-sm`.
- Badge: `surface` fill, 1px border, `radius-full`, `text-xs`, 2px/10px padding.
- Focus ring: 2px accent outline, 2px offset, on every interactive element without exception.

## Do / Don't

- Do keep page sections 96px apart. Crowding is the fastest way to lose this style.
- Do use `muted` for every label, caption and timestamp.
- Do left-align text. Centred body copy breaks the instrument feeling immediately.
- Don't use pure black or pure white anywhere.
- Don't add a gradient. Not on buttons, not on backgrounds, not on borders.
- Don't stack more than two surface levels. `bg` and `surface` are the only two you get.
- Don't use accent colour for text on the page background; contrast is legal but the effect is loud.
- Don't round anything past 12px. Pills are for badges only.

## When to use

Developer tools, dashboards, internal consoles, anything with dense data and a long session
length. A poor fit for marketing pages, where the restraint reads as coldness.
