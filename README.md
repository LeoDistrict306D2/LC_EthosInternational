# Leo Club of Ethos International College Colombo VII — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Campus Bold*.** A school club, so the site is loud on
purpose: oversized uppercase display type, flat blocks of electric blue and acid
yellow, diagonal cuts between sections, and rotated sticker badges. No shadows,
no gradients, no rounded cards.

The restraint is in the colour count — three colours plus black and white, used
flat. Loud is not the same as messy.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, layout, metadata, sitemap, robots |
| `app/globals.css` | **The entire design system** — palette, type, cuts, motion |
| `components/` | Components bespoke to this club |
| `content/` | All club content. Normal edits touch only this |
| `lib/` | Domain types, utilities, hooks. Identical across all eleven clubs |
| `public/images/` | Club photography |

---

## The design system

Tokens live in the `@theme` block at the top of `app/globals.css`, named by
**role** rather than hue.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#ffffff` | Page background |
| `--color-panel` | `#f2f2f2` | Alternate bands |
| `--color-ink` | `#0a0a0a` | Text, rules, buttons |
| `--color-ink-muted` | `#4a4a4a` | Running copy |
| `--color-accent` | `#1b3bff` | Links, buttons, hover — blue carries all interaction |
| `--color-highlight` | `#e8ff3a` | Backing blocks, badges, big numerals |
| `--color-inverse` | `#0a0a0a` | Header, mastheads, footer |

**Important:** acid yellow is a *backing colour*, never text on white — the
contrast fails badly. Numerals and badges put black on yellow, never the
reverse. Keep that rule if you retune the palette.

Type: Space Grotesk (display, uppercase) + Inter (body), self-hosted via
`next/font` in `app/fonts.ts`. All headings are uppercase by default, set in the
base layer.

### Signature classes

- `.cut-top` / `.cut-bottom` — the diagonal section edges. These use `clip-path`
  on a wrapper rather than a rotated pseudo-element, which is why they never
  cause horizontal overflow on small screens.
- `.sticker` — a badge rotated −3°, straightening on hover.
- `.rule-link` — thick underline that grows on hover and stays on the current
  page, so the active state is the same gesture as the hover state.
- `.wrap`, `.band`, `.reveal` — measure, rhythm, scroll reveal.

---

## Editing content

### Add a project

Append to `content/projects.ts`:

```ts
{
  id: 'green-week',
  slug: 'green-week',             // permalink — unique and stable
  title: 'Green Week',
  summary: 'One sentence for listings.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'environment',
  year: '2025/26',
  date: '2026-03-02',             // ISO; drives sorting
  location: 'Ethos International College',
  featured: true,                 // shows on the home page
  heroImage: { src: '/images/projects/green-week.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1200 },
  impact: [{ id: 'students', value: 240, label: 'Students involved' }],
}
```

The route, sitemap entry and OG tags all generate from this.

### Add a board member

Append to `content/board.ts`. Ordering is automatic from `rank`. Members without
a `photo` render with initials on a black tile, so the roster can go live before
photographs do.

### Add images

Drop files in `public/images/…` with real `width`/`height` — those two fields
are what stop the page jumping as images load. Use `.jpg`/`.webp`; **HEIC files
do not render in browsers.**

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical and OG tags.
- Every image through `next/image` inside an aspect-ratio box, with `alt`.
- Keyboard-operable menu: `aria-expanded`/`aria-controls`, Escape closes and
  returns focus, thick visible focus ring, skip-to-content link.
- `prefers-reduced-motion` respected; all content readable with JavaScript off.
- `typedRoutes` on — a link to a route that does not exist **fails the build**.
- `images.remotePatterns` deliberately empty.
- The membership form composes a real pre-filled email rather than silently
  discarding input.

---

## Deploying

Every route prerenders, so any Node host or Vercel works.

1. Set the production origin in `content/club.ts` → `siteUrl`.
2. `npm run build`
3. `npm start`

---

## Outstanding content

Everything marked `TODO(content)` needs real values from the club: charter date,
board roster, project records, photography and contact details. Images in
`public/images/` are generated solid-colour placeholders. The site renders
correctly while these are incomplete.
