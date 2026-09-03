# Midnight Precision

a precision instrument at midnight. Dark, quiet and exact. Tight tracking, restrained colour, and a single indigo accent that only appears where an action lives.

## Tokens

```yaml
color:  { bg: "#0a0b0d", surface: "#141519", fg: "#f2f3f5", muted: "#9ba1ad",
          accent: "#7c8cf8", accentFg: "#0a0b0d", border: "#2f333b" }
font:   { sans: "\"Inter\", \"Inter Variable\", system-ui, -apple-system, \"Segoe UI\", sans-serif",
          mono: "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "15px", scale: 1.2,
          weightBody: 400, weightHeading: 560,
          headingTracking: "-0.022em" }
type:   { xs: "10.42px", sm: "12.5px", base: "15px", lg: "18px", xl: "21.6px", 2xl: "25.92px", 3xl: "31.1px", 4xl: "37.32px" }
space:  { unit: "4px", gutter: "24px",
          section: "96px", maxWidth: "1120px" }
shape:  { strokeWidth: "1px", radiusSm: "4px",
          radiusMd: "8px", radiusLg: "12px" }
motion: { duration: "160ms", easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
```

## Principles

- Accent colour marks exactly one action per view. A second accent means you picked the wrong one.
- Depth comes from surface lightness, never from borders plus shadows plus fills at once.
- Headings sit tight: negative tracking, medium weight, never bold.
- Interface text stays at base size or smaller. Only page titles exceed it.
- Motion is short and linear-feeling. Nothing bounces, nothing fades slower than 200ms.

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
- Don't stack more than two surface levels — `bg` and `surface` is the whole depth budget.
- Don't use accent colour for text on the page background; contrast is legal but the effect is loud.
- Don't round anything past 12px. Pills are for badges only.

<!-- styles-md/midnight-precision@1.0.0 — CC-BY-4.0. Full spec: DESIGN.md -->
