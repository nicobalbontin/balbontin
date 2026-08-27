# Nico Balbontin — Portfolio

Personal portfolio site built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **TypeScript**.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| Components | React 19 with CVA variants |
| Font | Plus Jakarta Sans via `next/font/google` |
| Images | `next/image` (CDN + local assets) |

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Project structure

```
app/
  layout.tsx                  # root layout (font, metadata, Navbar)
  globals.css                 # Tailwind v4 @import + @theme design tokens
  page.tsx                    # / (Home)
  about/page.tsx              # /about
  projects/
    heat-transformers/page.tsx
    statie/page.tsx
    neoke/page.tsx
    here-now/page.tsx

components/
  layout/
    Navbar.tsx                # Responsive nav (hamburger @991px)
    Footer.tsx                # Light and dark variants
  ui/
    Button.tsx                # AnimatedButton with hover text-swap
    Container.tsx
    Section.tsx
  sections/
    ProjectGrid.tsx           # Home project grid + skill chips
    NextProject.tsx           # Circular case-study chain
    CaseStudyIntro.tsx        # Shared intro header for all case studies
    AnimatedStat.tsx          # Scroll-triggered count-up stats
    ReadyToRock.tsx           # CTA section used in about + case studies

lib/
  utils.ts                    # cn() helper
  projects.ts                 # Project data + getNextProject()
  useCountUp.ts               # Intersection Observer count-up hook

design-system/
  tokens.json                 # Machine-readable token definitions
  tokens.css                  # CSS custom properties for all tokens

public/
  assets/                     # Local images and videos

legacy/                       # Archived original HTML/CSS/JS files
```

## Design system

All design decisions live in two places — edit once and it propagates everywhere:

1. **`design-system/tokens.css`** — raw CSS custom properties (`--ds-color-*`, `--ds-text-*`, etc.)
2. **`app/globals.css`** — Tailwind v4 `@theme` block that maps tokens to Tailwind utility classes

### Changing colors / fonts / spacing

```css
/* design-system/tokens.css */
--ds-color-brand-purple: #b16cea;   /* ← change here */
```

```css
/* app/globals.css @theme */
--color-brand-purple: #b16cea;      /* ← mirrors the token */
```

### Adding a new page

1. Create `app/your-route/page.tsx`
2. Use `<CaseStudyIntro>` for case studies or start from the homepage pattern
3. Import `<Footer>` with `variant="light"` or `"dark"`
4. Add the project to `lib/projects.ts` for it to appear in the home grid and next-project chain

## Navigation

| Label | Destination |
|---|---|
| Work | `/#work` |
| About | `/about` |
| Schedule a call | https://calendly.com/nicobalbontin |
| Contact (footer) | mailto:nbalbontin@gmail.com |
| LinkedIn (footer) | https://www.linkedin.com/in/nbalbontin/ |

## Case study chain

`heat-transformers → statie → neoke → here-now → heat-transformers`

Managed in `lib/projects.ts` — reorder the array to change the chain.

## Responsive breakpoints

Matching the legacy Webflow site:

| Breakpoint | Behavior |
|---|---|
| `991px` | Hamburger nav, full-screen slide-in menu |
| `767px` | Mobile landscape utilities |
| `479px` | Mobile portrait utilities |

Grid transitions (`md:grid-cols-2`) are handled by Tailwind's default `768px` breakpoint.
