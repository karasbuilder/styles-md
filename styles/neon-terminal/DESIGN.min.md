# Neon Terminal

phosphor green on a dark console. Near-black background, monospace type and one electric green that carries every state. Dense, technical, and unmistakably a terminal.

## Tokens

```yaml
color:  { bg: "#05070a", surface: "#0c1218", fg: "#d8f5e3", muted: "#6fae8c",
          accent: "#39ff88", accentFg: "#05070a", border: "#24352c" }
font:   { sans: "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          mono: "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "14px", scale: 1.2,
          weightBody: 400, weightHeading: 700,
          headingTracking: "0.01em" }
type:   { xs: "9.72px", sm: "11.67px", base: "14px", lg: "16.8px", xl: "20.16px", 2xl: "24.19px", 3xl: "29.03px", 4xl: "34.84px" }
space:  { unit: "4px", gutter: "16px",
          section: "64px", maxWidth: "1080px" }
shape:  { strokeWidth: "1px", radiusSm: "2px",
          radiusMd: "3px", radiusLg: "4px" }
motion: { duration: "90ms", easing: "linear" }
```

## Principles

- One family, monospace, at 14px. Density is a feature.
- Green is the whole palette. Every state — active, success, focus, link — is the same green.
- Radius is nearly zero; 3px keeps it from looking like a mistake, nothing more.
- Prefix interactive labels with a symbol (`>`, `$`, `//`) instead of adding decoration.
- Transitions run at 90ms linear. Anything slower breaks the responsiveness illusion.

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

<!-- styles-md/neon-terminal@1.0.0 — CC-BY-4.0. Full spec: DESIGN.md -->
