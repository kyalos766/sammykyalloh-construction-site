# Sammykyalloh Construction Company — Client Site

Production-ready marketing website for a construction company, built on the
**Enigmo Labs SME starter architecture** (Next.js 14 App Router + Tailwind CSS +
Framer Motion + lucide-react), per the Enigmo Labs Execution Guide.

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint
npm run typecheck
```

> Run `npm run build` only when the dev server is stopped, or set
> `NEXT_DIST_DIR` to build into a separate directory (see below).

## Pages

| Route        | Purpose                                                |
| ------------ | ------------------------------------------------------ |
| `/`          | Hero, value proposition (3 columns), About teaser       |
| `/about`     | Mission & vision, our journey timeline, core values    |
| `/services`  | Four detailed service offerings + standard deliverables |
| `/projects`  | Portfolio grid with image slots and scope captions     |
| `/contact`   | Contact info, WhatsApp CTA, enquiry form              |

Also generated: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/icon.svg`
and a 404 page.

## Before you publish

1. **Set the live domain.** In `config/site-config.ts`, update `domain` and `url`.
   They drive `metadataBase`, canonical URLs, the sitemap, `robots.txt` and the
   JSON-LD schema. It currently reads `sammykyallohconstruction.co.ke`.
2. **Confirm the contact details** — `email`, `phone`, `phoneIntl`, `phoneDigits`.
   Kenyan numbers use country code 254.
3. **Swap in real photography** (optional — placeholder art ships working).
4. **Wire the contact form to a real backend** (see below).

## Configuration — `config/site-config.ts`

Every string, link, image path and colour is defined in one file. Components
pull from it dynamically; no content is hardcoded in the page files.

```ts
email: 'kyalos766@gmail.com',
phone: '0710495490',
phoneIntl: '+254710495490',   // tel: links
phoneDigits: '254710495490',  // wa.me links (Kenya = 254)
```

The WhatsApp deep link is built once in `lib/whatsapp.ts` as
`https://wa.me/${phoneDigits}?text=${encodeURIComponent(whatsappMessage)}` and
shared by the Smart Dock and the contact page.

## Swapping images

Drop your own files into `public/assets/` and update the paths in
`config/site-config.ts`. Recommended: WebP/AVIF, 1600px wide, under 200KB each.

```
public/assets/
├── hero.jpg                                  # home hero background
├── about.jpg                                 # about + contact headers, home teaser
├── services.jpg                              # services header + imagery
└── projects/
    ├── meridian-commercial-hub.jpg           # Project 1 — Commercial Hub
    ├── meridian-residential-estate.jpg       # Project 2 — Luxury Residential Estate
    └── meridian-industrial-warehouse.jpg     # Project 3 — Industrial Warehouse
```

Project card images render through `next/image` (see `app/projects/page.tsx`),
so no raw `<img>` tags are used anywhere. The `projects` array in
`siteConfig` is the only place project image paths appear. The filenames above
are legacy names — rename them and update the config together if you prefer.

## Contact form delivery

The form composes the submission and hands it to the visitor's email client via
`mailto:` (`components/ContactForm.tsx`). That works with no backend, but the
visitor must press send in their own mail app.

For direct delivery with no visitor action, point `handleSubmit` at a form
service (Formspree, Web3Forms, Basin) or a Next.js route handler using Resend.

## Design system

| Token        | Value     | Usage                          |
| ------------ | --------- | ------------------------------ |
| Primary      | `#1B365D` | Headings, CTAs, dark bands     |
| Secondary    | `#64748B` | Body copy, meta text           |
| Background   | `#FAFAFA` | Section background (off-white) |

Typography falls back to a system UI stack so the build compiles offline. To
use the Enigmo standard (Space Grotesk headings + Inter body), drop the `.woff2`
files into `public/fonts/` and add a `next/font/local` declaration in
`app/layout.tsx` exposing `--font-heading` / `--font-body`.

## Fixed bottom bar and Smart Dock

- `components/FooterBar.tsx` — slim credit bar pinned to the bottom of the
  viewport, always visible. It measures itself and publishes `--dockbar-h`.
- `components/EnigmoDock.tsx` — WhatsApp / call / Enigmo badge pill, positioned
  just above the credit bar via `calc(var(--dockbar-h) + 0.75rem)`.
- `<main>` reserves `calc(var(--dockbar-h) + 6rem)` so content always scrolls
  clear of both.

## Security headers

`next.config.mjs` sets `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy`, `X-DNS-Prefetch-Control`, and disables
the `X-Powered-By` fingerprint.

## Enigmo brand DNA

- **Enigmo Smart Dock** — fixed action bar (WhatsApp, call, Enigmo badge),
  rendered at the root layout.
- **Local SEO** — `GeneralContractor` JSON-LD injected by
  `components/LocalSeo.tsx`.
- **Footer credit** — `"Developed by sammykyalloh" | "Enigmo labs"`, plus the
  Enigmo Labs badge in the Smart Dock.

## QA checklist status

- [x] Mobile-first styling, no horizontal overflow at 320 / 375 / 414px
- [x] Sticky header with mobile navigation that is removed from the tab order
      when closed
- [x] Skip-to-content link and `main` landmark
- [x] WhatsApp dock + contact page button using active Kenya phone routing
- [x] All phone numbers are `tel:` links to `+254710495490`
- [x] JSON-LD structured data, sitemap, robots, manifest and canonical URLs
- [x] Responsive images via `next/image`
- [x] Footer credit rendered on every page

## Running a build alongside dev

```bash
$env:NEXT_DIST_DIR=".next-prod"; npx next build
$env:NEXT_DIST_DIR=".next-prod"; npx next start -p 3001
```
