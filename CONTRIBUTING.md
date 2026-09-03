# Contributing

## Adding a style

1. Copy the closest existing folder: `cp -r styles/soft-clinic styles/your-slug`
2. Delete the generated files — `DESIGN.min.md`, `tokens.json`, `style.css`, `theme.css`,
   `shadcn.css`, `preview.webp`.
3. Edit `DESIGN.md`. The folder name and the `id` must match.
4. Run `pnpm run validate`, then `pnpm run build && pnpm run dev` and look at your style on the
   demo page. If it does not look distinctly good there, it is not ready.
5. Open a PR. CI validates it and the preview deployment renders it.

## Rules that get PRs rejected

**Name a mood, not a company.** `midnight-precision`, not `linear-clone`. We do not publish
recreations of real products' design systems — it is a trademark problem and a boring library.

**Fill in the three agent sections.** `## Principles`, `## Components` and `## Do / Don't` are the
only sections that reach the model. Everything else is dropped from `DESIGN.min.md`. If a rule
matters, it lives in one of those three.

**Write real Don'ts.** "Don't use gradients" is worth more than three paragraphs about your
palette philosophy. Negative constraints are the highest-value content in the whole file.

**Stay inside the context budget.** `DESIGN.min.md` must come in under ~900 tokens. This is
enforced, not advisory — longer specs measurably degrade agent output.

**Pass contrast.** Every required pair must clear WCAG AA. A palette that fails is not a
stylistic disagreement; it is broken. Adjust `muted` and `accentFg` first — they fail most often.

**Do not commit generated files by hand.** Run `pnpm run build:tokens` and commit the result. CI
rebuilds and diffs.

## Linking a real site that uses the style

A style page can show live sites built with it, alongside the built-in demo:

```yaml
showcase:
  - label: "Acme Console"
    url: "https://console.acme.com"
    embed: true              # only if the site actually allows framing
    note: "The billing dashboard."
```

Most sites cannot be framed — `X-Frame-Options` or a CSP `frame-ancestors`
directive turns an embedded preview into a blank rectangle. So `embed` defaults to
false, which renders a link card instead. Verify before claiming otherwise:

```bash
node packages/styles-md/dist/cli.js check-links styles
```

It fetches each URL, reports whether framing is permitted, and fails if an entry
declares `embed: true` against a site that forbids it. This is a network call, so
it is a separate command rather than part of `pnpm run validate`.

Link sites genuinely built with the style. This is not a place to link the brand
that inspired it — see the naming rule above.

## Quality levels

New styles land as `quality: draft`. A maintainer moves them to `reviewed` after a visual pass,
and to `featured` once they have earned a place on the front page. The gallery is not a dumping
ground — 40 styles people trust is the goal, not 2,000 nobody checks.

## Changing the schema

`packages/styles-md/src/schema.ts` is the contract for the site, the CLI, CI and any downstream
consumer. Adding a required field breaks every existing style, so:

- New fields are optional or carry a default.
- Add a test in `packages/styles-md/src/index.test.ts`.
- Say in the PR what it lets a style express that it could not before. "Border weight is half of
  what makes a style brutalist" is a good reason. "It might be useful later" is not.
