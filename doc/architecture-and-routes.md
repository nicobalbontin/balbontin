# Architecture and routes

## High-level diagram

```
app/layout.tsx          → font, metadata, Navbar, skip link, #main-content
app/globals.css         → Tailwind v4 + @theme tokens
design-system/tokens.css → CSS custom properties (--ds-*)

components/layout/      → Navbar, Footer (used on every page)
components/ui/          → Button, Container, Section
components/sections/    → page sections (grid, case study, stats, CTA)

lib/projects.ts         → single source: slugs, titles, thumbnails, getNextProject()
lib/useCountUp.ts       → scroll-triggered number animation

public/assets/          → static images/videos (/assets/... URLs)
legacy/                 → archived HTML/CSS reference
```

## Route map

```
/                           app/page.tsx
/about                      app/about/page.tsx
/design-system              app/design-system/page.tsx  (noindex showcase)
/projects/heat-transformers app/projects/heat-transformers/page.tsx
/projects/statie            app/projects/statie/page.tsx
/projects/neoke             app/projects/neoke/page.tsx
/projects/here-now          app/projects/here-now/page.tsx
```

## `lib/projects.ts`

```ts
export const projects = [
  { slug: 'heat-transformers', title: 'HeatTransformers', ... },
  { slug: 'statie', title: 'StatieApp', ... },
  { slug: 'neoke', title: 'Neoke', ... },
  { slug: 'here-now', title: 'Here & Now', ... },
];

export function getNextProject(currentSlug: string): Project
```

- Home grid reads `projects`
- `NextProject` uses `getNextProject()` for circular navigation

## Design system (edit once)

1. **`design-system/tokens.css`** — raw tokens (`--ds-*`); imported by globals
2. **`design-system/tokens.json`** — same values, machine-readable
3. **`app/globals.css`** — `@theme` maps tokens + semantic `type-*` utilities
4. **`/design-system`** — live showcase (colors, type, buttons, spacing); `robots: noindex`

Utilities / roles:

- `.type-display` … `.type-h4`, `.type-lead` / `.type-body` / `.type-small` / `.type-meta`
- `.gradient-text` — brand gradient heading
- `.animate-loop-vertically` — about page image columns
- `Button` variants: `primary` | `secondary` | `nav` (layered Webflow CTAs)
- Base focus: `outline: 0.125rem solid #4d65ff`

## Breakpoints (legacy → Tailwind)

| Legacy | Behavior | Next.js approach |
|---|---|---|
| 991px | Hamburger nav | Navbar: menu hidden `lg:flex`, hamburger `lg:hidden` |
| 768px | Project grid 1 col | `grid-cols-1 md:grid-cols-2` |
| 767px | Mobile landscape utilities | Tailwind `md:` / custom if needed |
| 479px | Mobile portrait utilities | Tailwind `sm:` / default mobile |

## Page-specific notes

### Home (`/`)

- Hero + profile image from `public/assets/images/`
- `#work` section: dark background, skill chips, `ProjectGrid`
- Extra gallery images below grid (from legacy index)

### About (`/about`)

- Gradient heading via `.gradient-text`
- Two-column scrolling image animation (CSS keyframes)
- Random facts grid on dark background
- `ReadyToRock` with Calendly + email CTAs

### Case studies

Shared pattern:

1. `CaseStudyIntro` — close link, title, description, role, client
2. Hero video (CDN or local)
3. Content sections (problem, research, galleries, insights)
4. `NextProject` — except some legacy pages had custom promo graphics
5. Footer: light (HT, Statie) or dark (Neoke, Here & Now)

**Neoke / Here & Now:** `AnimatedStat` components replace countUp.js.

## Config files

| File | Role |
|---|---|
| `next.config.ts` | Remote images: `cdn.prod.website-files.com` |
| `postcss.config.mjs` | `@tailwindcss/postcss` |
| `tsconfig.json` | Path alias `@/*` → repo root |
| `package.json` | next, react, tailwindcss@4, cva, clsx, tailwind-merge |

## Dependencies (runtime)

```json
"next", "react", "react-dom",
"@radix-ui/react-slot", "class-variance-authority", "clsx", "tailwind-merge"
```

No CMS, no database, static generation.
