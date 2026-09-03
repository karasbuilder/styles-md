# Brutalist Mono

a specification sheet with opinions. Monospace everywhere, hard black rules, zero radius and offset shadows. Loud orange for anything you can click. Structure is visible on purpose.

## Tokens

```yaml
color:  { bg: "#ffffff", surface: "#f2f2f0", fg: "#000000", muted: "#4a4a4a",
          accent: "#ff3b00", accentFg: "#000000", border: "#000000" }
font:   { sans: "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          mono: "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "15px", scale: 1.25,
          weightBody: 400, weightHeading: 700,
          headingTracking: "-0.03em" }
type:   { xs: "9.6px", sm: "12px", base: "15px", lg: "18.75px", xl: "23.44px", 2xl: "29.3px", 3xl: "36.62px", 4xl: "45.78px" }
space:  { unit: "8px", gutter: "16px",
          section: "80px", maxWidth: "1000px" }
shape:  { strokeWidth: "2px", radiusSm: "0px",
          radiusMd: "0px", radiusLg: "0px" }
motion: { duration: "0ms", easing: "steps(1, end)" }
```

## Principles

- Radius is zero everywhere. There are no exceptions and no pills.
- Every container gets a 2px black border. Borders are the layout.
- Shadows are solid offsets in black, never blurred.
- Transitions are instant. Motion has no place here.
- Headings are uppercase with tight negative tracking.

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

<!-- styles-md/brutalist-mono@1.0.0 — CC-BY-4.0. Full spec: DESIGN.md -->
