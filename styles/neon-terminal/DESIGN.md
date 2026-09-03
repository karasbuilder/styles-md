---
id: neon-terminal
name: Neon Terminal
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: phosphor green on a dark console
summary: Near-black background, monospace type and one electric green that carries every state. Dense, technical, and unmistakably a terminal.
tags: [dark, mono, terminal, developer, technical]
quality: featured
tokens:
  color:
    bg: "#05070a"
    surface: "#0c1218"
    fg: "#d8f5e3"
    muted: "#6fae8c"
    accent: "#39ff88"
    accentFg: "#05070a"
    border: "#24352c"
    success: "#39ff88"
    danger: "#ff5f56"
  font:
    sans: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    scale: 1.2
    baseSize: "14px"
    weightBody: 400
    weightHeading: 700
    headingTracking: 0.01
  space:
    unit: "4px"
    gutter: "16px"
    section: "64px"
    maxWidth: "1080px"
  stroke:
    width: "1px"
  radius:
    sm: "2px"
    md: "3px"
    lg: "4px"
    full: "9999px"
  motion:
    duration: "90ms"
    easing: "linear"
---

# Neon Terminal

A console that someone designed. Dense by default, monospace throughout, and green used as the
only voice in the room.

## Principles

- One family, monospace, at 14px. Density is a feature.
- Green is the whole palette. Every state — active, success, focus, link — is the same green.
- Radius is nearly zero; 3px keeps it from looking like a mistake, nothing more.
- Prefix interactive labels with a symbol (`>`, `$`, `//`) instead of adding decoration.
- Transitions run at 90ms linear. Anything slower breaks the responsiveness illusion.

## Typography

Monospace at 14px, line height 1.55. Headings are uppercase at weight 700 with slightly positive
tracking, which mono needs to avoid looking cramped. Never use a proportional font — not for
marketing copy, not for buttons.

## Colour

`bg` is almost black and `surface` is a barely lifted panel. `fg` is a pale mint rather than white
so long sessions do not glare. `muted` is a desaturated green used for comments, timestamps and
disabled states.

## Components

- Button: transparent fill, 1px accent border, accent label, `radius-md`, 8px/14px padding; hover inverts to accent fill with `accentFg`.
- Card: `surface` fill, 1px border, `radius-md`, 16px padding, no shadow.
- Input: `bg` fill, 1px border, `radius-sm`, 8px/10px padding, block caret in accent.
- Nav: 44px tall, 1px bottom border, `muted` links, accent with a leading `>` when active.
- Table: 1px rules both directions, 8px/12px cells, uppercase `muted` headers.
- Badge: 1px border, `radius-sm`, uppercase `text-xs`, 2px/6px padding.
- Log line: mono `text-sm`, `muted` timestamp, `fg` message, accent or danger level tag.
- Focus ring: 1px accent outline, 1px offset, square.

## Do / Don't

- Do keep rows tight — 32px is a comfortable table row here.
- Do use `muted` heavily; most text on screen should not be full `fg`.
- Do align numeric columns right with tabular figures.
- Don't add a second accent hue. Warnings use `danger`, everything else is green.
- Don't apply a glow or text-shadow to the accent. It ages badly and hurts legibility.
- Don't use large radii or soft shadows.
- Don't set anything above `text-2xl`; this style has no hero type.
- Don't centre-align body content.

## When to use

CLIs with a web UI, logs, observability, crypto and infra dashboards, hacker-adjacent landing
pages. Wrong for anything aimed at non-technical users.
