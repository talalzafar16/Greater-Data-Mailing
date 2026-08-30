# Greater Data & Mailing

Marketing site for Greater Data & Mailing — direct mail, printing, and mailing
services in Deer Park, NY.

Built with Next.js 16 (App Router), React 19, TypeScript in strict mode,
Tailwind CSS v4, shadcn/ui, Framer Motion, and lucide-react.

---

## Running locally

```bash
npm install
cp .env.example .env.local   # then fill in the values (see "Environment")
npm run dev                  # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generates route types, then runs `tsc --noEmit` |

> **Why the scripts call `node` directly.** This folder's name contains an `&`.
> npm's generated `.cmd` shims expand their path before `cmd.exe` parses it, so
> the `&` splits the command in two and `next dev` fails with a confusing
> "Cannot find module" error. The scripts invoke each package's entrypoint
> through `node` to sidestep it. **Rename the folder to remove the `&` and you
> can revert them to plain `next dev` / `next build`.**

---

## Environment

Copy `.env.example` to `.env.local`. Two variables:

### `NEXT_PUBLIC_WEB3FORMS_KEY`

Powers the quote form on `/contact`.

1. Go to <https://web3forms.com> and register with **sl@greaterdata.com** —
   the client asked for quote requests to be delivered there. They send you an
   access key. The destination lives in their dashboard, not this repo.
2. Put it in `.env.local`, and add it to the Vercel project's environment
   variables for Production, Preview, and Development.
3. In the Web3Forms dashboard, restrict allowed domains and enable spam
   protection.

The `NEXT_PUBLIC_` prefix is required and means the key ships in the browser
bundle. That is by design — the key only permits submissions to your inbox and
cannot read past ones.

Without the key the form still renders, but submitting shows an error asking
the visitor to call instead. It never fails silently.

### `NEXT_PUBLIC_SITE_URL`

The production origin, no trailing slash — e.g. `https://www.greaterdata.com`.

It drives every canonical URL, the sitemap, `robots.txt`, and Open Graph tags.
The client confirmed **www.greaterdata.com**, which is also the fallback in
`src/data/site.ts`. Set it explicitly on Vercel Production anyway, and leave it
unset on Preview so preview builds do not emit production canonicals.

---

## Where to swap in real photography

Every placeholder is a `<ImagePlaceholder>` — a gradient block with
`role="img"` and an `aria-label`. **That label is the brief for the photo you
need.** When the real photo arrives, replace the component with `next/image`
and pass the same string as `alt`.

| # | File | Photo needed | Aspect |
| --- | --- | --- | --- |
| 1 | `src/components/sections/hero.tsx` | Production floor with a high-speed press running | 4:5 portrait |
| 2 | `src/components/sections/why-us.tsx` | Team member inspecting a mail piece on the production line | 1:1 square |
| 3 | `src/components/sections/about-story.tsx` | Interior of the Deer Park plant | 4:5 portrait |
| 4 | `src/components/sections/president-profile.tsx` | Steven Loehr, President — portrait | 1:1 square |
| 5 | `src/components/sections/facility-gallery.tsx` | Press floor, sheet fed and web presses running | 4:3 landscape |
| 6 | `src/components/sections/facility-gallery.tsx` | High-speed inserting machines running a matched mailing | 4:3 landscape |
| 7 | `src/components/sections/facility-gallery.tsx` | Trays of finished mail staged for USPS pickup | 4:3 landscape |

Alt text for 1–4 lives in `src/data/copy.ts`; the three gallery briefs are in
`aboutCopy.galleryShots`.

### Swapping one out

```tsx
// before
<ImagePlaceholder alt={heroCopy.imageAlt} className="aspect-4/5 w-full rounded-2xl" />

// after
<Image
  src="/photos/press-floor.jpg"
  alt={heroCopy.imageAlt}
  width={800}
  height={1000}
  priority                                    /* hero only — it is the LCP image */
  sizes="(max-width: 1024px) 100vw, 40vw"
  className="aspect-4/5 w-full rounded-2xl object-cover"
/>
```

Guidelines:

- **`priority` on the hero image only.** It is the largest paint above the
  fold. Everything else should lazy-load, which is `next/image`'s default.
- **Always set `sizes`** when the image is not a fixed width, or the browser
  downloads the largest candidate. Match it to the layout: the hero and Why Us
  images occupy roughly 40% of the viewport above `lg`, full width below.
- Put files in `public/photos/`.
- `next/image` is **not** used yet, because there are no real images to
  optimise — a `next/image` pointing at nothing would just break the build.

---

## Updating content

All copy lives in `src/data/`. You should not need to open a `.tsx` file to
change wording.

| File | Contains |
| --- | --- |
| `site.ts` | NAP: name, address, phone, email, production URL |
| `copy.ts` | Section headings, body copy, CTA labels, image alt text |
| `seo.ts` | Per-page `<title>` and meta description |
| `services.ts` | The four services — powers the hub, sub-pages, header dropdown, homepage trio |
| `industries.ts` | The six industries — powers the industries page, homepage strip, footer |
| `stats.ts` | The four numbers in the stats band |
| `testimonials.ts` | Client quotes (currently empty — see below) |
| `nav.ts` | Header and footer navigation |

### Stat numbers — `src/data/stats.ts`

```ts
{ value: 38, suffix: "+", label: "Years in Business" }
```

`value` is the number, animated from 0 by `AnimatedCounter` when scrolled into
view. `prefix` and `suffix` are the non-numeric parts (`"$"`, `"%"`, `"M"`,
`"+"`). Keep them separate — putting `"38+"` in `value` breaks the count-up.

> All four numbers were **confirmed by the client (Aug 2026)**. They are still
> claims the business can be held to, so re-confirm before reusing them in paid
> advertising.

### Testimonials — `src/data/testimonials.ts`

The array is **intentionally empty**, and the `Testimonials` section returns
`null` when it is, so the homepage simply omits it. Nothing is fabricated.

To add real quotes:

```ts
export const testimonials: Testimonial[] = [
  {
    id: "acme-2026",              // any stable unique string
    quote: "…",                   // their words, with permission
    author: "Jane Doe",
    role: "Director of Marketing", // optional
    company: "Acme Nonprofit",     // optional
    industry: "nonprofit",         // optional, slug from industries.ts
    featured: true,                // optional
  },
];
```

The section appears automatically once the array is non-empty: heading, one
quote at a time, prev/next arrows, dot indicators, and `aria-live`
announcements. With one entry the controls hide themselves.

**Only add real, attributable quotes you have permission to publish.** Sample
testimonials would ship as fabricated endorsements.

> This carousel has never run with data in it — it typechecks and builds, but
> the code path is unexercised. Give it a look when you add the first quote.

### Business hours

`contactCopy.hours` in `src/data/copy.ts`, plus the
`openingHoursSpecification` block in
`src/components/layout/structured-data.tsx`. Both are confirmed (Mon–Fri
8:30am–5:00pm). **Change both together** — the structured-data copy feeds
Google's knowledge panel, where people act on it and turn up at the door.

---

## Deploying to Vercel

1. Push to GitHub.
2. In Vercel, **Add New → Project** and import the repo. Framework preset
   detects as Next.js; leave build command and output directory as-is.
3. **Settings → Environment Variables**, add for Production, Preview, and
   Development:
   - `NEXT_PUBLIC_WEB3FORMS_KEY`
   - `NEXT_PUBLIC_SITE_URL` (Production: the real domain. Preview: leave unset
     so previews do not emit canonicals pointing at production.)
4. Deploy.
5. **Settings → Domains**, add the domain and follow the DNS instructions.
6. After the domain is live, confirm `NEXT_PUBLIC_SITE_URL` matches it exactly
   — including `www` or its absence. A mismatch puts wrong canonical URLs on
   every page.
7. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console.
8. Test the quote form end to end on the live domain and confirm the email
   arrives.

Every route is statically prerendered, so there is no server runtime to
configure and the free tier is sufficient.

---

## Before launch

Confirmed by the client (Aug 2026): domain, phone, email, the four stat
numbers, business hours, the address, and that there are **no social profiles**
and **the cell number must not be published** (it has been removed from the
site).

Still outstanding:

- [ ] Sign up for Web3Forms using **sl@greaterdata.com** as the destination,
      set `NEXT_PUBLIC_WEB3FORMS_KEY`, and test a real submission
- [ ] Set `NEXT_PUBLIC_SITE_URL` to `https://www.greaterdata.com` in Vercel
      (Production only)
- [ ] **Privacy policy** — client wants to discuss; still needs an attorney and
      confirmation of its claims about list handling. See the comment block at
      the top of `src/app/privacy/page.tsx`
- [ ] Seven photographs (client is sourcing) — see the table above
- [ ] Logo asset (client sending) — the header/footer currently render a styled
      text lockup, not an image
- [ ] Testimonials (client can obtain) — section stays hidden until
      `src/data/testimonials.ts` has entries
- [ ] Replace the favicon — still the Next.js default
- [ ] Add an Open Graph share image — link previews have no image
- [ ] Client review of the drafted copy: the `whatItIs` paragraphs in
      `services.ts` and the `description` / `pieces` in `industries.ts`
- [ ] *Nice to have:* spot-check the `geo` coordinates in
      `structured-data.tsx` against the pin in Google Maps. They were geocoded
      from the confirmed street address rather than read off a map

## Notes for developers

**Design tokens** are in `src/app/globals.css`. Colours are surface-aware:
`.on-ink` and `.on-light` redefine `--heading-color`, `--body-color`, and
`--growth-text`, so a white card inside a navy section reverts to dark text
automatically. Use `bg-growth` for decorative fills and `text-growth-text` for
green text — the latter follows the surface.

**Contrast.** Several tokens were adjusted to meet WCAG AA:
`--slate` is `#5f6e85` (the original `#64748b` measured 4.41:1 on paper), and
`--growth-deep` `#15803d` carries all green text on light backgrounds and every
green fill under white text (`#16a34a` is only 3.30:1 against white). Green
text on navy stays `#16a34a`, which is 5.28:1 there. If you change a colour,
re-check it.

**Motion** is centralised in `src/lib/motion.ts` and every animated component
honours `prefers-reduced-motion` through `useReducedMotion`, backed by a global
CSS fallback. Transforms are additionally gated behind Tailwind's
`motion-safe:`.

**Focus** is owned by one unlayered `:focus-visible` rule at the bottom of
`globals.css`. The shadcn components' `outline-none` utilities were removed so
nothing competes with it. Do not reintroduce them.
