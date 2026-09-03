# styles-md

An open library of design styles as Markdown. One file per style: hard tokens in the frontmatter,
the rules that need judgment in the body. Point a coding agent at it, or compile it straight to CSS.

```bash
npx styles-md add midnight-precision            # CSS custom properties
npx styles-md add midnight-precision --target tailwind   # Tailwind v4 @theme
npx styles-md add midnight-precision --target shadcn     # shadcn/ui variables in oklch
```

That writes three files into your project:

```
styles-md/theme.css        import it in your global stylesheet
styles-md/DESIGN.min.md    point your agent at this — token-budgeted
styles-md/DESIGN.md        the full spec, for humans
```

No account, no API key, no server. The published site is the registry — the CLI reads static files.

## Why this exists

Handing an agent a paragraph of vibes ("clean, modern, generous spacing") produces generic output,
and you cannot test a vibe. Every style here is split in two:

- **A deterministic layer** — the frontmatter. Colours, type ratio, spacing unit, radii, motion.
  Compiles to real CSS with no model involved, and is checked by CI.
- **A judgment layer** — the body. Principles, component specs, and an explicit Do / Don't list.
  This is the part only a model can apply, and the Don'ts are usually what saves the output.

## What CI enforces

A style does not merge unless it passes all of these:

| Gate | Rule |
|---|---|
| Schema | Frontmatter validates against `packages/styles-md/src/schema.ts` |
| Contrast | Every required pair clears WCAG AA — body, muted, and accent labels |
| Sections | `## Principles`, `## Components` and `## Do / Don't` are present |
| Context budget | `DESIGN.min.md` stays under ~900 tokens; agents drift past that |
| Artefacts | Generated files match a fresh build, so nothing is hand-edited |

40 machine-verified styles beat 2,000 scraped ones. That is the whole bet.

## Styles are moods, not brands

Every style is an original system with a name like `midnight-precision` or `warm-editorial`. This
project does not publish clones of real companies' design systems. It avoids the trademark and
trade dress problem entirely, and the moods are more useful anyway — you pick by the feeling you
want, not by which company you are imitating.

## Repository layout

```
styles/<slug>/DESIGN.md      authored — the product
styles/<slug>/DESIGN.min.md  generated — the agent-facing spec
styles/<slug>/tokens.json    generated — machine-readable tokens
styles/<slug>/style.css      generated — CSS custom properties
styles/index.json            generated — the search index
packages/styles-md/          schema, compiler and CLI
site/src/components/Demo.astro   the canonical page every style renders
site/                        Astro gallery, static, deploys to Vercel
```

## Working on it

```bash
pnpm install
pnpm run validate      # schema + contrast + sections + budget
pnpm run build         # validate, regenerate artefacts, build the site
pnpm run dev           # gallery at localhost:4321
pnpm run previews      # re-render preview images (needs `pnpm exec playwright install chromium`)
```

The canonical demo page in `site/src/components/Demo.astro` reads only `--sm-*` variables. Nothing
in it is hardcoded, which is what makes the gallery an honest comparison instead of eight
cherry-picked screenshots.

## Licence

Tooling is MIT (`LICENSE`). Style specs are CC-BY-4.0 (`LICENSE-CONTENT`) — use them commercially,
just keep the attribution comment the compiler emits.

Fonts are never redistributed. Every style declares a full CSS stack with fallbacks; install the
families you want yourself, or substitute.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Short version: copy an existing style, change the tokens,
run `pnpm run validate`, and open a PR. The preview deployment will render your style on the demo
page so reviewers can actually see it.
