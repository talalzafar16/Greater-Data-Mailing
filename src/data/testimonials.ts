/**
 * Client testimonials.
 *
 * `testimonials` holds REAL quotes only — attributable, and published with the
 * client's permission. It is empty until those are collected.
 *
 * While it is empty, `sampleTestimonials` fill the section on localhost and
 * Vercel preview deploys so the layout can be reviewed. They never render in a
 * production build: made-up quotes on the live site would be fabricated
 * endorsements, which the FTC's consumer-review rule (16 CFR Part 465) makes
 * a civil-penalty offence. Add the first real quote and the samples disappear
 * everywhere.
 */

export interface Testimonial {
  /** Stable key for React lists and anchors. */
  id: string;
  quote: string;
  author: string;
  /** Job title, e.g. "Director of Marketing". */
  role?: string;
  company?: string;
  /** Slug from `industries.ts`, for filtering by vertical. */
  industry?: string;
  /** Path under /public, e.g. "/logos/acme.svg". */
  logo?: string;
  /** 1–5; omit when the quote has no rating attached. */
  rating?: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [];

/**
 * Preview-only placeholders. Attributed to roles and organization types, not
 * named people or companies, and they only restate claims the site already
 * makes elsewhere. Never move these into `testimonials`.
 */
export const sampleTestimonials: Testimonial[] = [
  {
    id: "sample-nonprofit",
    quote:
      "Our year-end appeal used to come back with hundreds of undeliverables. They cleaned the file before it went to print, and the returns all but disappeared.",
    author: "Development Director",
    company: "Long Island nonprofit",
    industry: "nonprofit",
    featured: true,
  },
  {
    id: "sample-campaign",
    quote:
      "We had nine days from final copy to in-home. They printed, mailed, and kept us posted at every step — the drop landed right on schedule.",
    author: "Campaign Manager",
    company: "State Assembly campaign",
    industry: "political-campaigns",
  },
  {
    id: "sample-retail",
    quote:
      "They mapped the carrier routes around all three of our locations and handled the EDDM paperwork. All we had to do was approve the proof.",
    author: "Owner",
    company: "Suffolk County restaurant group",
    industry: "retail-local-business",
    featured: true,
  },
  {
    id: "sample-financial",
    quote:
      "Printing, data, and mailing under one roof means one contact and one schedule. Our quarterly statements haven't slipped once.",
    author: "Operations Manager",
    company: "Regional credit union",
    industry: "financial-services",
  },
];

/*
  Both values are inlined at build time, so this is safe in client components.
  NEXT_PUBLIC_VERCEL_ENV is set by Vercel automatically ("production",
  "preview", or "development"). Anywhere else — including a production build on
  other hosting — it is undefined, so the samples stay hidden.
*/
const isPreviewEnvironment =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

/** True when the section is showing placeholders rather than real quotes. */
export const showingSampleTestimonials =
  testimonials.length === 0 && isPreviewEnvironment;

/** What the `Testimonials` section actually renders. */
export const displayedTestimonials: Testimonial[] = showingSampleTestimonials
  ? sampleTestimonials
  : testimonials;

export const featuredTestimonials = (): Testimonial[] =>
  testimonials.filter((testimonial) => testimonial.featured);
