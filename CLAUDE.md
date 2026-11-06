# Sonaria website — instructions for Claude

This is the website of Sonaria Ltd. (sonaria.ltd), owned by Heinz Wagner. Heinz edits it by asking Claude.
It is a static Astro site, hosted on Cloudflare Pages, deployed from GitHub.

## Golden rules

1. **Never push to `main`.** `main` is the live site. Always work on a new branch
   (`update/<short-description>`), push it, and open a pull request.
2. **Always give Heinz the preview link.** Cloudflare Pages builds every branch and posts a preview URL
   on the pull request (format: `https://<branch>.<project>.pages.dev`). Heinz checks it and merges himself.
3. **Run `npm run build` before pushing.** If it fails, fix it; never push a broken build.
4. **Change only what was asked.** Do not restyle, rename or "improve" other parts.
5. **Stay in English** unless Heinz asks for another language. Use plain, direct sentences; no marketing superlatives.
6. **Never invent facts**: results, client names, figures, certifications or quotes. If something is missing,
   leave a visible placeholder in square brackets, e.g. `[X]%`, and tell Heinz.
7. **Privacy matters** (Sonaria sells GDPR advice): do not add tracking, cookies, third-party scripts,
   embeds or externally hosted fonts. Fonts are self-hosted via `@fontsource`. If Heinz asks for something
   that loads third-party content, explain the privacy impact and that the cookie policy must be updated.
8. **No secrets in the repository** (API keys, passwords). The repository may be public.

## Where things live

| What | File |
|---|---|
| Email, phone, LinkedIn, calendar link, company details | `src/data/site.json` |
| Services (title, text, deliverables, email subject) | `src/data/services.json` |
| Cases (client type, text, result; `featured: true` = shown on home) | `src/data/cases.json` |
| Home page texts and the 4 process steps | `src/pages/index.astro` |
| About text | `src/pages/about.astro` |
| Privacy / cookie / terms pages | `src/pages/privacy.astro`, `cookies.astro`, `terms.astro` |
| Colours, fonts, buttons, cards | `src/styles/global.css` (CSS variables at the top) |
| Header / footer / portrait | `src/components/` |
| Images | `public/images/` (reference as `/images/<name>`) |

Most text changes are edits to the JSON files in `src/data/`. Keep the JSON valid.

## Design rules

- Dark background `#0E0F0C`, lime accent `#D4F34A`, light sections `#F6F6F2`. Use the CSS variables, not new colours.
- Headings: Inter Tight 600. Body: Inter. Labels and buttons: JetBrains Mono, uppercase.
- The last part of a main heading is often lime: `<span class="accent">…</span>`.
- Reuse existing classes: `.tag`, `.btn btn--arrow`, `.btn btn--solid`, `.card`, `.icon-num`, `.grid`, `.section`, `.section--light`.
- Photos of people are black and white. New portraits: convert to greyscale before adding.
- Everything must work at phone width (390px) without horizontal scrolling.

## Commands

```
npm install        # once
npm run dev        # local preview at http://localhost:4321
npm run build      # production build into dist/
```

## Contact

There is deliberately no contact form: the contact page uses the calendar link and `mailto:` links with a
pre-filled subject per service. If Heinz wants a real form later, use a Cloudflare Pages Function and update
the privacy statement.
