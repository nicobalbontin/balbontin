# Documentation for LLM / collaborator handoff

This folder explains the **Webflow → Next.js migration** for Nico Balbontin's portfolio site. Use it to give another model or developer full context without re-reading the whole repo.

## Start here

| File | Purpose |
|---|---|
| [migration-before-after.md](./migration-before-after.md) | Main doc: goals, before/after, what changed, how to run both versions |
| [architecture-and-routes.md](./architecture-and-routes.md) | App structure, routes, shared components, design system |
| [known-gaps-and-next-steps.md](./known-gaps-and-next-steps.md) | Visual parity gaps, CDN assets, out-of-scope items, suggested follow-ups |

## One-line summary

**Before:** 6 duplicated static HTML pages + ~9k-line Webflow CSS + jQuery/Webflow JS.  
**After:** Next.js 15 App Router + Tailwind v4 design system + shared React components for all 6 routes.

## Quick commands

```bash
npm install
npm run dev    # Next.js → http://localhost:3000
npm run build  # production build (all routes static)
```

To preview the **old static site** (reference only):

```bash
cd legacy && python3 -m http.server 8000
# → http://localhost:8000 serves legacy/index.html (NOT Next.js)
```

## Important paths

- **New app:** `app/`, `components/`, `lib/`, `design-system/`, `public/assets/`
- **Legacy reference:** `legacy/` — self-contained archive of the original Webflow
  export (HTML/CSS/JS/assets). The repo root no longer has duplicate copies; see
  [`legacy/README.md`](../legacy/README.md).
- **Project data (single source):** `lib/projects.ts`
- **Tokens:** `design-system/tokens.css` → imported by `app/globals.css` (`@theme` + `type-*` utilities)
- **Component showcase:** `/design-system` (noindex) — colors, type, buttons, spacing

## User intent (why we migrated)

- Portfolio will be updated over time; static duplicated HTML is hard to maintain.
- User works in Next.js and wants **one design system** — edit Navbar, Footer, buttons, tokens once.
- Structure should stay **Relume-ready** (React components) even though Relume wasn't imported yet.
- Preserve responsive behavior: **991px** nav, **768px** project grid, legacy breakpoints 767/479.
