# Legacy site (archived — reference only)

This folder is a **self-contained snapshot** of the original Webflow export that the
current Next.js app (in the repo root) replaced. It is kept only as a visual/content
reference for the migration — it is **not** used by the Next.js build in any way
(`legacy/` is excluded in `tsconfig.json`).

## Contents

- `*.html` — the 6 original pages (`index.html`, `about.html`, `ht.html`,
  `neoke.html`, `statie.html`, `here-now.html`)
- `*.css` — per-page + shared Webflow CSS (`style.css` is the ~9.4k-line shared file)
- `nav.js` — legacy hamburger nav script
- `js/`, `js_about/`, `js_ht/`, `js_neoke/`, `js_here-now/`, `Js_statie/` — Webflow/jQuery
  runtime bundles, one set per page (as originally exported)
- `assets/` — original local images/videos (already copied into `public/assets/`
  for the Next.js app — this copy exists only so the pages above still render)

## Previewing the old site

Everything this folder needs is inside it, so serve **from within `legacy/`**:

```bash
cd legacy
python3 -m http.server 8000
# → http://localhost:8000
```

Compare against the current app running with `npm run dev` (`http://localhost:3000`).

## Why this exists

See [`../doc/migration-before-after.md`](../doc/migration-before-after.md) for the full
migration writeup. Nothing here should be edited going forward — all active
development happens in `app/`, `components/`, `lib/`, and `design-system/` at the
repo root.
