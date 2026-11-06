# sonaria.ltd

Static website for Sonaria Ltd., built with [Astro](https://astro.build) and hosted on Cloudflare Pages.
Instructions for editing with Claude are in `CLAUDE.md`.

## Local development

Requires Node.js 22.22 or newer.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
```

## First-time setup (GitHub + Cloudflare Pages)

1. **GitHub**: create a repository (e.g. `sonaria-site`) and push this folder to `main`.
2. **Protect `main`**: Settings → Branches (or Rules) → add a rule for `main`:
   require a pull request before merging, block force pushes.
   On GitHub Free this is only available for public repositories; for a private repository use GitHub Pro/Team.
3. **Cloudflare Pages**: Workers & Pages → Create → Pages → Connect to Git → pick the repository.
   - Production branch: `main`
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
   - Preview deployments: enabled for all non-production branches
4. **Domain**: Pages project → Custom domains → add `sonaria.ltd` and `www.sonaria.ltd`
   (and redirect `www` to the apex, or the other way round). Easiest when the DNS for sonaria.ltd is on Cloudflare.
5. **Search Console**: add the domain in Google Search Console and submit `https://sonaria.ltd/sitemap-index.xml`.
6. **Old site**: once the new site is live, cancel the old WordPress hosting.
   Add redirects for old URLs in `public/_redirects` if they differ (e.g. `/diensten /services 301`).

## Workflow for changes

1. Ask Claude for the change. Claude works on a branch and opens a pull request.
2. Cloudflare builds a preview and posts the link on the pull request.
3. Check the preview. Happy? Merge the pull request: the site is live within a minute or two.
   Not happy? Ask Claude to adjust; the preview updates automatically.

## Before go-live: still to fill in

- [ ] `src/data/site.json`: `phone` (no spaces, e.g. `+35921234567`),
      `phoneDisplay`, `linkedin`, `calendarUrl` (Calendly or Salesforce Scheduler)
- [ ] `src/data/cases.json`: real results instead of `[X]%` / `[to be confirmed with client]`
- [ ] `src/pages/about.astro`: Heinz's own introduction text
- [ ] `src/pages/privacy.astro`: privacy statement
- [ ] `src/pages/terms.astro`: terms and conditions
- [ ] Check the registered office address in `site.json`
- [ ] Optional: cookieless analytics (e.g. Plausible) — update the cookie policy if added

Placeholders are shown on the site in square brackets, so anything still missing is visible in the preview.
