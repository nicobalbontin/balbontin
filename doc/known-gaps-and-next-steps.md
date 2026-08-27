# Known gaps and next steps

Use this when continuing work — especially **visual parity** with the legacy site at `localhost:8000`.

---

## Visual parity

Critical UI has been aligned to legacy Webflow via a consolidated design system (not a 1:1 CSS port):

| Area | Status |
|---|---|
| Layered CTA buttons (gradient shadow + face slide) | Done — `components/ui/Button.tsx` |
| Type scale / text colors (`type-*` roles) | Done — `app/globals.css` + tokens |
| Nav logo max-height 30px | Done — `Navbar` |
| Section / container rhythm | Done — `Section` / `Container` |
| Page reskin (home, about, 4 case studies) | Done — semantic classes |

**Showcase (edit loop):** [`/design-system`](http://localhost:3000/design-system) — noindex, not in main nav. Edit `design-system/tokens.css` then refresh.

**Reference for remaining QA:**

```bash
python3 -m http.server 8000   # legacy
npm run dev                   # Next.js on :3000
```

Still not pixel-identical everywhere (galleries, IX2 motion, next-project promos). Legacy HTML/CSS remains in `legacy/` and repo root.

---

## Assets

| Issue | Status / fix |
|---|---|
| Local images 404 on first load | Fixed by copying `assets/` → `public/assets/` |
| Many case study images on CDN | Still use `cdn.prod.website-files.com` — works via `next.config.ts` |
| Download all CDN assets locally | **Not done** — plan mentioned `public/assets/projects/` |

To localize CDN assets: scrape URLs from legacy HTML / case study pages, download into `public/assets/projects/`, update `src` in page components.

---

## Missing or simplified vs legacy

1. **Webflow interactions** — scroll animations, Webflow IX2, lightboxes not ported
2. **Next project promos** — legacy used custom SVG/iPhone graphics; Next.js uses text-based `NextProject` link
3. **HT / Statie footers** — legacy HT/Statie had no footer; Next.js **added** footers (intentional improvement)
4. **Old URL redirects** — `/ht.html` etc. do not redirect to `/projects/...` yet
5. **Relume components** — structure is component-based but Relume React library not integrated
6. **ESLint** — minimal setup; `next lint` may prompt for config

---

## Design token extraction

Automated extraction failed:

```bash
npx extract-design-system https://www.nbalbontin.com
# ERR_NAME_NOT_RESOLVED in migration environment
```

Tokens were **hand-built** from `style.css` `:root`. If the live site is reachable later, re-run extraction and merge into `design-system/`.

---

## Suggested next tasks (priority order)

1. **Visual QA pass** — side-by-side `:8000` vs `:3000` for residual spacing/gallery quirks
2. **Localize CDN images** for offline deploy and faster loads
3. **Add redirects** in `next.config.ts` for old `.html` URLs
4. **Next project sections** — restore legacy promo visuals (Statie/Neoke/Here & Now SVG blocks)
5. **991px exact breakpoint** — Tailwind `lg` is 1024px; add custom `@custom-variant` if needed
6. **Remove duplicate legacy files from repo root** — keep only `legacy/` once confident

---

## Out of scope (by plan)

- CMS / content editing
- Relume import (structure only)
- Redirects from `.html` (optional follow-up)

---

## Handoff prompt (copy for another LLM)

```
You are working on balbontin-site, a Next.js 15 portfolio migrated from Webflow static HTML.

Read doc/README.md and doc/migration-before-after.md first.

Stack: App Router, Tailwind v4, TypeScript, shared components in components/, project data in lib/projects.ts.

Legacy reference: legacy/ folder and python -m http.server 8000 on repo root.
New app: npm run dev → localhost:3000.

Goal: maintain single design system (design-system/tokens.css, app/globals.css). Improve visual parity with legacy where requested.
```
