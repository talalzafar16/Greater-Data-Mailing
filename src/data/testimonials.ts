export interface Testimonial {
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

// Real, attributable quotes published with permission only.
export const testimonials: Testimonial[] = [];

// Placeholders shown until real quotes exist. Replace or delete before public launch:
// fake endorsements presented as real violate the FTC rule (16 CFR 465).
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

// Real quotes replace the samples as soon as there is at least one.
export const displayedTestimonials: Testimonial[] =
  testimonials.length > 0 ? testimonials : sampleTestimonials;

export const featuredTestimonials = (): Testimonial[] =>
  testimonials.filter((testimonial) => testimonial.featured);
