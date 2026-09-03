# Slate Enterprise

quiet authority in a boardroom. Cool slate neutrals, a serious blue, small radii and high density. The default for business software that has to look credible before it looks nice.

## Tokens

```yaml
color:  { bg: "#ffffff", surface: "#f8fafc", fg: "#0f172a", muted: "#52607a",
          accent: "#1d4ed8", accentFg: "#ffffff", border: "#cdd5e0" }
font:   { sans: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif",
          mono: "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "14px", scale: 1.2,
          weightBody: 400, weightHeading: 600,
          headingTracking: "-0.018em" }
type:   { xs: "9.72px", sm: "11.67px", base: "14px", lg: "16.8px", xl: "20.16px", 2xl: "24.19px", 3xl: "29.03px", 4xl: "34.84px" }
space:  { unit: "4px", gutter: "20px",
          section: "72px", maxWidth: "1280px" }
shape:  { strokeWidth: "1px", radiusSm: "4px",
          radiusMd: "6px", radiusLg: "8px" }
motion: { duration: "140ms", easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
```

## Principles

- Density first. 14px base, 32px table rows, 20px gutters.
- Blue signals action and nothing else. Status uses green, amber and red.
- Small radii throughout — 6px is the default and 8px is the ceiling.
- Every destructive action needs a confirmation step and red is reserved for it.
- Tables are the primary interface. Design them before you design anything else.

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

<!-- styles-md/slate-enterprise@1.0.0 — CC-BY-4.0. Full spec: DESIGN.md -->
