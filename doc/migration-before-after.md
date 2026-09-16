# Migration: before and after

## Project

Personal portfolio for **Nico Balbontin** (designer, Amsterdam). Original site was built/exported from **Webflow** as static files.

---

## Before (legacy static site)

### Stack

- HTML5 pages in repo root
- Large shared CSS: `style.css` (~9.4k lines), plus per-page CSS (`about.css`, `neoke.css`, `HT.css`, etc.)
- Webflow + jQuery scripts from CDN
- Duplicated navbar/footer markup in every HTML file
- Inconsistent links (`about.html`, `/about`, `#`, `#workdisplay`)

### Pages (legacy files)

| Legacy file | Content |
|---|---|
| `index.html` | Home — hero, skill chips, project grid |
| `about.html` | About — bio, scrolling images, random facts, CTA |
| `ht.html` | HeatTransformers case study |
| `statie.html` | StatieApp case study |
| `neoke.html` | Neoke case study (count-up stats) |
| `here-now.html` | Here & Now case study (count-up stats) |

### Problems we were fixing

1. **6× duplicated CSS** — same utilities repeated across massive Webflow exports
2. **Two nav implementations** — some pages used custom hamburger, others Webflow nav
3. **Broken/inconsistent routing** — mixed `.html`, `/about`, and `#` anchors
4. **CDN + Webflow runtime** — hard to maintain, not component-based
5. **No single source for projects** — grid and “next project” links duplicated manually

### How to view the old site locally

The repo root has since been cleaned up (see Phase 6.5 below) — the legacy static
site now lives entirely inside `legacy/` as a self-contained snapshot. Run
`python3 -m http.server 8000` from **inside `legacy/`** (not the repo root) to serve
the **original static HTML** (`index.html`, etc.). This is **not** a previous
Next.js build — it is the legacy Webflow export.

Compare:

- `http://localhost:8000` (served from `legacy/`) → legacy static (Python static server)
- `http://localhost:3000` → new Next.js app (`npm run dev`)

---

## After (Next.js migration)

### Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15, App Router, TypeScript |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`, `@theme` in `app/globals.css`) |
| Components | React 19, CVA-ready patterns, shared layout/UI |
| Font | Plus Jakarta Sans via `next/font/google` |
| Images | `next/image`; local assets in `public/assets/`; remote CDN allowed in `next.config.ts` |

### New routes

| Legacy file | New route |
|---|---|
| `index.html` | `/` |
| `about.html` | `/about` |
| `ht.html` | `/projects/heat-transformers` |
| `statie.html` | `/projects/statie` |
| `neoke.html` | `/projects/neoke` |
| `here-now.html` | `/projects/here-now` |

**Note:** Old `.html` URLs are **not** redirected yet (out of scope). Add `redirects` in `next.config.ts` if needed.

### Unified navigation (fixed)

- Logo → `/`
- Work → `/#work`
- About → `/about`
- CTA → `https://calendly.com/nicobalbontin`
- Footer: Work, About, Contact (`mailto:nbalbontin@gmail.com`), LinkedIn

### Case study chain (circular)

Defined in `lib/projects.ts`:

`heat-transformers → statie → neoke → here-now → heat-transformers`

---

## What was implemented (migration phases)

### Phase 1 — Scaffold

- Next.js 15 + TypeScript in repo root (alongside legacy files)
- Folder structure: `app/`, `components/`, `lib/`, `design-system/`, `public/`

### Phase 2 — Design tokens

- Live extraction via `extract-design-system` **failed** (domain unreachable from build env)
- Tokens **manually reconciled** from `style.css` `:root` and legacy patterns into:
  - `design-system/tokens.json`
  - `design-system/tokens.css`
  - `app/globals.css` (`@theme` block)

Key preserved values:

- Background: `#fafafa`, alternate: `#121212`
- Text: `#121212`, secondary: `#666`
- Brand gradient: `#b16cea → #ff5e69 → #ff8a56 → #ffa84b`
- Font: Plus Jakarta Sans
- Focus ring: `#4d65ff`

### Phase 3 — Shared components

| Component | Role |
|---|---|
| `Navbar` | Single nav; hamburger at ≤991px; slide-in mobile menu |
| `Footer` | `variant="light" \| "dark"` |
| `AnimatedButton` | Hover text-swap (legacy `button-2` behavior) |
| `Container`, `Section` | Layout rhythm |
| `ProjectGrid`, `SkillChips` | Home work section |
| `CaseStudyIntro` | Shared case study header (title, role, client, close link) |
| `NextProject` | Circular next-project promo |
| `AnimatedStat` + `useCountUp` | Replaces countUp.js CDN on Neoke / Here & Now |
| `ReadyToRock` | Shared CTA block |

### Phase 4 — Pages

All 6 pages rebuilt as composable React sections (content from legacy HTML, not copy-paste of Webflow markup).

### Phase 5 — Responsive parity

- Nav breakpoint: **991px** (Tailwind `lg:` ≈ 1024px — close; mobile menu uses transform slide)
- Project grid: 2 columns desktop, 1 column on small screens
- `prefers-reduced-motion` respected in globals
- Skip link + focus-visible styles

### Phase 6 — Cleanup

- Legacy HTML/CSS copied to `legacy/` for reference
- `README.md` updated for dev workflow
- Web Interface Guidelines pass: skip link, aria labels, transform-based menu animation, etc.

### Phase 6.5 — Root de-duplication (post-migration cleanup)

After the migration, the repo root still had the **original Webflow export files**
duplicated alongside the new Next.js app (root `index.html`/`about.html`/etc., root
`*.css`, `nav.js`, the `js_about/`, `js_ht/`, `js_neoke/`, `js_here-now/`, `Js_statie/`,
`js/` runtime bundles, and a root `assets/` folder). None of these were referenced by
any Next.js code — confirmed by diffing the root `assets/` folder against
`public/assets/` (identical) and grepping `app/`, `components/`, `lib/`,
`design-system/` for any relative or root-level path to them.

Since `legacy/` already held identical copies of the HTML/CSS (per Phase 6), and the
`js_*`/`assets/` runtime files were only ever needed to make those HTML files loadable
in a browser, everything was consolidated:

- Root `*.html`, root `*.css`, and root `nav.js` were **deleted** (exact duplicates
  already in `legacy/`)
- Root `assets/`, `js/`, `js_about/`, `js_ht/`, `js_neoke/`, `js_here-now/`,
  `Js_statie/` were **moved into `legacy/`**, so the archived site is now fully
  self-contained and still previewable (see updated instructions above)
- Removed stray leftovers: empty `.extract-design-system/` dir, `.DS_Store` files
- Added `legacy/README.md` documenting the archive

Result: the repo root now contains only the active Next.js app; there is a single,
self-contained `legacy/` folder for historical reference. See
[`legacy/README.md`](../legacy/README.md).

---

## Assets

| Location | Purpose |
|---|---|
| `legacy/assets/` | Original asset folder from static site (moved here from repo root during Phase 6.5 cleanup — needed only to keep `legacy/*.html` previewable) |
| `public/assets/` | **Served by Next.js** — images + videos copied here (`/assets/images/...` in code) |

Many case study images still load from **Webflow CDN** (`cdn.prod.website-files.com`) — configured in `next.config.ts` `images.remotePatterns`.

---

## Removed from runtime

- jQuery
- Webflow JS bundles
- Per-page inline hamburger scripts (replaced by `Navbar` client component)
- countUp.js CDN (replaced by `lib/useCountUp.ts`)

---

## Verification checklist (migration plan)

| Item | Status |
|---|---|
| All 6 routes build and render | ✅ `npm run build` — 9 routes (incl. `_not-found`) |
| Navbar/footer from single components | ✅ |
| Mobile nav at ~991px | ✅ (implemented; Tailwind `lg` breakpoint) |
| Project grid collapses on mobile | ✅ |
| Circular next-project chain | ✅ `lib/projects.ts` |
| Brand colors, font, gradient tokens | ✅ in design system |
| No jQuery/Webflow at runtime | ✅ |
| Pixel-perfect match to legacy | ⚠️ **Not yet** — see [known-gaps-and-next-steps.md](./known-gaps-and-next-steps.md) |

---

## For the next LLM: suggested first reads

1. `doc/migration-before-after.md` (this file)
2. `lib/projects.ts` — project metadata and chain
3. `components/layout/Navbar.tsx`, `Footer.tsx`
4. `app/page.tsx` — home
5. `legacy/index.html` — visual/content reference for parity work (self-contained; see [`legacy/README.md`](../legacy/README.md))
