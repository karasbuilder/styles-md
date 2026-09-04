# Soft Clinic

calm competence, clean light and teal. Airy light surfaces, generous radius and a measured teal accent. Trustworthy without being cold, built for products that handle something people care about.

## Tokens

```yaml
color:  { bg: "#f6f9fb", surface: "#ffffff", fg: "#16242e", muted: "#566a77",
          accent: "#0e7c86", accentFg: "#ffffff", border: "#c3d4e0" }
font:   { sans: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif",
          mono: "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.25,
          weightBody: 400, weightHeading: 620,
          headingTracking: "-0.015em" }
type:   { xs: "10.24px", sm: "12.8px", base: "16px", lg: "20px", xl: "25px", 2xl: "31.25px", 3xl: "39.06px", 4xl: "48.83px" }
space:  { unit: "4px", gutter: "24px",
          section: "88px", maxWidth: "1140px" }
shape:  { strokeWidth: "1px", radiusSm: "8px",
          radiusMd: "12px", radiusLg: "20px" }
motion: { duration: "220ms", easing: "cubic-bezier(0.34, 1.2, 0.64, 1)" }
```

## Principles

- Cards float on tinted background. `surface` is always lighter than `bg`, never the reverse.
- Radius is large and consistent: 12px is the default for anything interactive.
- Shadows are wide and very faint. If you can see the shadow, it is too strong.
- Teal is a calm accent; use it for primary actions and active states only.
- Nothing is dense. Padding is generous even when the data is not.

## Components

- Button (primary): accent fill, white label, `radius-md`, 12px/20px padding, `shadow-sm`.
- Button (ghost): transparent, accent label, same metrics, tinted accent background on hover.
- Card: white fill, 1px border, `radius-lg`, 28px padding, `shadow-sm`.
- Input: white fill, 1px border, `radius-md`, 12px/14px padding; focus adds a 3px accent-tinted ring.
- Nav: 64px tall, white fill, 1px bottom border, `muted` links, accent pill behind the active item.
- Table: 1px horizontal rules, no vertical rules, 14px/16px cells, `bg`-tinted header row.
- Badge: tinted accent background, accent text, `radius-full`, `text-xs`, 4px/12px padding.
- Empty state: centred, `text-lg` heading, `muted` body, one primary button.

## Do / Don't

- Do keep 24px of padding inside every card, minimum.
- Do use `muted` for supporting copy and labels above inputs.
- Do pair the accent with plenty of white space so it stays calm.
- Don't use hard 1px shadows or dark borders. The whole style collapses.
- Don't mix radii; picking 12px means 12px everywhere except cards at 20px.
- Don't put more than three metrics in a row.
- Don't use red except for genuine destructive actions.
- Don't set body text below 15px anywhere in the product.

<!-- styles-md/soft-clinic@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
