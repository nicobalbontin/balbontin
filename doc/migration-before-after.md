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

If someone runs `python3 -m http.server 8000` from the **repo root**, port **8000** serves the **original static HTML** (`index.html`, etc.). This is **not** a previous Next.js build — it is the legacy Webflow export.

Compare:

- `http://localhost:8000` → legacy static (Python static server)
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

---

## Assets

| Location | Purpose |
|---|---|
| `assets/` (repo root) | Original asset folder from static site |
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
5. `legacy/index.html` — visual/content reference for parity work
