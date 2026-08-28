/**
 * Per-page titles and meta descriptions.
 *
 * All SEO copy lives here rather than in the page components, so titles and
 * descriptions can be reviewed as a set. Descriptions are held to 150–160
 * characters — long enough to use the full search snippet, short enough not to
 * be truncated — and each names Deer Park or Long Island where it reads
 * naturally.
 */

export interface PageSeo {
  title: string;
  description: string;
}

/** Keys match route paths; the 404 uses the reserved "notFound" key. */
export const pageSeo = {
  "/": {
    title:
      "Greater Data & Mailing | Direct Mail, Printing & Mailing Services | Long Island NY",
    description:
      "Full-service direct mail, printing, and mailing in Deer Park, NY. We clean your data, print your piece, and mail it at the lowest postal rate you qualify for.",
  },
  "/about": {
    title: "About | Greater Data & Mailing",
    description:
      "Meet the Deer Park, NY direct marketing company behind 38 years of print and mail work: one team, one building, and a president who has run every process.",
  },
  "/services": {
    title: "Services | Greater Data & Mailing",
    description:
      "Printing, mailing, and data services under one roof in Deer Park, NY. Forms, envelopes, inserting, addressing, list hygiene, and USPS presort, all in-house.",
  },
  "/services/printing": {
    title: "Printing Services | Greater Data & Mailing",
    description:
      "Continuous forms, envelopes, brochures, letters, and self mailers printed on web and sheet fed presses at our Deer Park, NY plant here on Long Island.",
  },
  "/services/mailing": {
    title: "Mailing Services | Greater Data & Mailing",
    description:
      "High-speed inserting, addressing, tabbing, and wafer sealing in Deer Park, NY, built to meet USPS automation standards and earn you lower postal rates.",
  },
  "/services/data-services": {
    title: "Data Services & List Hygiene | Greater Data & Mailing",
    description:
      "CASS certification, NCOA verification, deduplication, and presort optimization from our Long Island mail house, so you pay the lowest postage available.",
  },
  "/services/variable-data-eddm": {
    title: "Variable Data Printing & EDDM | Greater Data & Mailing",
    description:
      "Variable data printing and Every Door Direct Mail from Deer Park, NY. Personalized one-to-one campaigns and carrier route saturation across Long Island.",
  },
  "/industries": {
    title: "Industries | Greater Data & Mailing",
    description:
      "Direct mail built for nonprofit, financial, healthcare, political, retail, and B2B teams, produced end to end at our Deer Park, NY plant on Long Island.",
  },
  "/contact": {
    title: "Contact | Greater Data & Mailing",
    description:
      "Get a quote on your next mailing from our Deer Park, NY plant. Tell us about the project and we respond within one business day with pricing and a plan.",
  },
  "/privacy": {
    title: "Privacy Policy | Greater Data & Mailing",
    description:
      "How Greater Data & Mailing collects and protects information from this site and the client mailing lists we process at our Deer Park, New York facility.",
  },
  notFound: {
    title: "Page Not Found | Greater Data & Mailing",
    description:
      "That page could not be found. Browse printing, mailing, and data services from Greater Data & Mailing in Deer Park, NY, or call our Long Island plant.",
  },
} as const satisfies Record<string, PageSeo>;

export type PageSeoKey = keyof typeof pageSeo;
