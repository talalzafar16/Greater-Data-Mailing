# Greater Data & Mailing

Marketing site for Greater Data & Mailing: direct mail, printing, and mailing
services in Deer Park, NY.

Built with Next.js 16 (App Router), React 19, TypeScript in strict mode,
Tailwind CSS v4, shadcn/ui, Framer Motion, and lucide-react.

---

## Running locally

Requires Node.js 20 or newer.

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

---

## Launch checklist

The code is complete. Going live needs these steps, all outside the code:

1. **Create a Web3Forms access key** at <https://web3forms.com>, registered
   with **sl@greaterdata.com**, the address quote requests should arrive at.
2. **Deploy to Vercel** and add the environment variables (see
   [Deploying to Vercel](#deploying-to-vercel)).
3. **Send a test quote request** from the live site and confirm the email
   arrives at sl@greaterdata.com.
4. **Submit the sitemap** (`https://www.greaterdata.com/sitemap.xml`) in
   Google Search Console.
5. **Replace the sample testimonials** on the homepage with real client quotes,
   or delete the samples (see [Testimonials](#testimonials-srcdatatestimonialsts)).
   They are placeholders, not real clients.

Until step 1 is done, the quote form on `/contact` shows a message asking
visitors to call instead. It never fails silently.

---

## Environment

Copy `.env.example` to `.env.local` for local development. Two variables:

### `NEXT_PUBLIC_WEB3FORMS_KEY`

Powers the quote form on `/contact`. Submissions are delivered to whichever
email address the key was registered with. That address is set in the
Web3Forms dashboard, not in this code.

In the Web3Forms dashboard, restrict allowed domains to the site's domain and
enable spam protection.

The `NEXT_PUBLIC_` prefix is required and means the key ships in the browser
bundle. That is how Web3Forms is designed: the key only permits sending
submissions to your inbox and cannot read past ones.

### `NEXT_PUBLIC_SITE_URL`

The production address, no trailing slash: `https://www.greaterdata.com`.

It drives every canonical URL, the sitemap, `robots.txt`, and social share
tags. `https://www.greaterdata.com` is already the built-in fallback, so this
is a safeguard rather than a requirement. Set it on **Production only**, and
leave it unset on Preview so preview links do not claim to be the live site.

> **Both values are baked in at build time.** After adding or changing either
> one in Vercel, **redeploy** for it to take effect. An existing deployment
> will not pick it up.

---

## Deploying to Vercel

1. Push the code to a GitHub repository.
2. In Vercel, **Add New → Project** and import the repository. It detects
   Next.js automatically; leave the build settings as they are.
3. **Settings → Environment Variables**:
   - `NEXT_PUBLIC_WEB3FORMS_KEY`: Production, Preview, and Development
   - `NEXT_PUBLIC_SITE_URL` = `https://www.greaterdata.com`: Production only
4. Deploy (or redeploy, if you added the variables after the first deploy).
5. **Settings → Domains**, add `www.greaterdata.com` and follow the DNS
   instructions.

Every page is pre-rendered at build time, so there is no server or database
to manage, and Vercel's free tier is enough.

---

## Updating content

Almost all wording lives in `src/data/`. You should rarely need to open a
`.tsx` file.

| File | Contains |
| --- | --- |
| `site.ts` | Name, address, phone, email, production URL |
| `copy.ts` | Section headings, body copy, button labels, photo paths and alt text, business hours |
| `seo.ts` | Each page's `<title>` and meta description |
| `services.ts` | The four services: hub page, service pages, header menu, homepage |
| `industries.ts` | The six industries: industries page, homepage strip, footer |
| `stats.ts` | The four numbers in the stats band |
| `testimonials.ts` | Client quotes (see below) |
| `nav.ts` | Header and footer navigation |

### Testimonials: `src/data/testimonials.ts`

Add real client quotes to the `testimonials` array:

```ts
export const testimonials: Testimonial[] = [
  {
    id: "acme-2026",               // any unique string
    quote: "…",                    // their words, with their permission
    author: "Jane Doe",
    role: "Director of Marketing", // optional
    company: "Acme Nonprofit",     // optional
  },
];
```

With several quotes, the homepage section becomes a carousel with arrows and
dots.

Until the first real quote is added, the section shows four
`sampleTestimonials` so the layout can be reviewed. The first real quote
replaces them automatically.

**The samples are not real clients and must not stay up on the public site.**
Before launch, add real quotes, or delete the entries in `sampleTestimonials`
to hide the section until real quotes arrive. Invented endorsements presented
as genuine break the FTC's rule on consumer reviews and testimonials.

### Stats: `src/data/stats.ts`

```ts
{ value: 38, suffix: "+", label: "Years in Business" }
```

`value` must be a plain number because it animates up from 0. Put symbols in
`prefix` / `suffix` (`"$"`, `"%"`, `"M"`, `"+"`). Writing `"38+"` in `value`
breaks the animation.

### Business hours

Change them in **two** places together:

- `contactCopy.hours` in `src/data/copy.ts` (shown on the Contact page)
- `openingHoursSpecification` in `src/components/layout/structured-data.tsx`
  (read by Google for its business panel)

### Photos

Photos live in `public/photos/`. The path and alt text for each one are in
`src/data/copy.ts` (`heroCopy.image`, `whyUsCopy.image`,
`aboutCopy.storyImage`, `aboutCopy.presidentImage`, `aboutCopy.galleryShots`).

To replace a photo, either overwrite the file with one of the same name, or
add a new file and update its path in `copy.ts`. Keep a similar shape to the
original (the hero and plant-interior shots are portrait, the gallery shots
are landscape), and if the subject changes, update the alt text to describe
the new photo.

### Social share image

`public/og-image.jpg` (1200×630) is the preview image shown when a link to
the site is shared on LinkedIn, Facebook, WhatsApp, iMessage, etc. To change
it, replace the file with another 1200×630 JPEG of the same name, and update
its description (`shareImage.alt`) in `src/lib/metadata.ts`. Social platforms
cache previews, so an old image can linger there for a while after a change.

### Privacy policy

`src/app/privacy/page.tsx`. It is a general-purpose policy describing how
this site works (the quote form, the embedded Google Map, no tracking
cookies). It has not been reviewed by an attorney. Update `EFFECTIVE_DATE` at
the top whenever it changes, and revisit the cookies section if analytics or
advertising tracking is ever added.

---

## Notes for developers

**Design tokens** are in `src/app/globals.css`. Colours are surface-aware:
`.on-ink` and `.on-light` redefine `--heading-color`, `--body-color`, and
`--growth-text`, so a white card inside a navy section reverts to dark text
automatically. Use `bg-growth` for decorative fills and `text-growth-text` for
green text, since the latter follows the surface.

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
