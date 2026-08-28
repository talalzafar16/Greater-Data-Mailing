/**
 * Client testimonials.
 *
 * Intentionally empty. The `Testimonials` section renders nothing at all while
 * this array has no entries, so the homepage simply omits it. Only add real,
 * attributable quotes with the client's permission — never placeholder or
 * sample quotes, which would ship as fabricated endorsements.
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

export const featuredTestimonials = (): Testimonial[] =>
  testimonials.filter((testimonial) => testimonial.featured);
