/**
 * Service catalogue — the single source of truth for the services hub, the
 * four sub-pages, the homepage trio, and the header dropdown.
 *
 * NOTE ON COPY: `promise`, `summary`, `navDescription`, `included`, and
 * `capabilities` are client-supplied. The `whatItIs` paragraphs were drafted
 * from that material and have NOT been reviewed by the client — they restate
 * only what the lists above already claim, but they still need sign-off before
 * launch.
 */

import { Database, Mail, MapPin, Printer, type LucideIcon } from "lucide-react";

export interface ServiceCapabilityGroup {
  /** e.g. "Printing Department" */
  department: string;
  /** Rendered as badge pills. */
  items: string[];
}

export interface Service {
  /** URL segment, e.g. "printing" → /services/printing */
  slug: string;
  /** Canonical page name, used for the sub-page h1 and the hub card. */
  title: string;
  /** Shorter label for the header dropdown and footer. Defaults to `title`. */
  navLabel: string;
  /** One-liner beside the label in the header dropdown panel. */
  navDescription: string;
  /** Short title for the homepage trio card. */
  cardTitle: string;
  /** Description on the homepage trio card. */
  summary: string;
  /** One-line promise under the sub-page h1. */
  promise: string;
  /** Two short paragraphs for the sub-page "What it is" block. */
  whatItIs: [string, string];
  /** Checklist items. Mutually exclusive with `capabilities` in practice. */
  included?: string[];
  /** Department → capability pills. */
  capabilities?: ServiceCapabilityGroup[];
  /** Slugs from `industries.ts`. */
  relatedIndustries: string[];
  icon: LucideIcon;
  /** Surfaced in the homepage services trio. */
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: "printing",
    title: "Printing Services",
    navLabel: "Printing Services",
    navDescription: "Forms, envelopes, brochures, letters, self mailers",
    cardTitle: "Printing",
    summary:
      "Continuous forms, envelopes, brochures, letters, and self mailers, produced the most cost-effective way for your job.",
    promise:
      "Our experienced staff determines the optimal way to produce your job, giving you the highest quality at the most cost-effective price.",
    whatItIs: [
      "Our printing department produces the pieces direct mail actually runs on: continuous forms, envelopes, brochures, letters, multi-part forms, and self mailers, on both web and sheet fed presses.",
      "Because printing and bindery sit in the same building as mailing, your job is reviewed as a whole before it goes on press. Our staff determines the production method that fits the run, and finishing — folding, collating, perforating, stitching — happens without shipping the work anywhere else.",
    ],
    capabilities: [
      {
        department: "Printing Department",
        items: [
          "Continuous Forms",
          "Envelopes",
          "Brochures",
          "Letters",
          "Multi-part Forms",
          "Self Mailers",
          "Web and Sheet Fed",
        ],
      },
      {
        department: "Bindery Department",
        items: [
          "Fugitive Glue",
          "Barrel Folds",
          "Binding",
          "Bursting",
          "Collating",
          "Gate Folding",
          "Nesting",
          "Perforating",
          "Saddle Stitching",
        ],
      },
    ],
    relatedIndustries: ["nonprofit", "financial-services", "b2b"],
    icon: Printer,
    featured: true,
  },
  {
    slug: "mailing",
    title: "Mailing Services",
    navLabel: "Mailing Services",
    navDescription: "Inserting, addressing, tabbing, USPS presort",
    cardTitle: "Mailing",
    summary:
      "High-speed inserting, addressing, and tabbing that meets USPS automation standards every time.",
    promise:
      "As your consultant, we make sure your mail piece runs on our high-speed machines and meets the automation requirements of the U.S. Post Office.",
    whatItIs: [
      "Our mailing department runs inserting, addressing, tabbing, and sealing on high-speed equipment — Hewlett Packard ink jet addressing, automatic inserting, Cheshire labels, wafer sealing, and matched mailings where every component has to stay with the right record.",
      "The design of the piece is what decides the rate you pay. We review it against U.S. Post Office automation requirements before production, so it runs on our machines and on theirs — which is what qualifies the mailing for automation rates instead of full postage.",
    ],
    capabilities: [
      {
        department: "Mailing Department",
        items: [
          "Hewlett Packard Ink Jet",
          "Bursting/Folding",
          "Cheshire Labels",
          "Envelope Addressing",
          "Automatic Inserting",
          "Matched Mailings",
          "Tabbing",
          "Wafer Sealing",
        ],
      },
    ],
    relatedIndustries: ["political-campaigns", "healthcare", "nonprofit"],
    icon: Mail,
    featured: true,
  },
  {
    slug: "data-services",
    title: "Data Services & List Hygiene",
    navLabel: "Data Services",
    navDescription: "List cleaning, verification, deduplication",
    cardTitle: "Data & Lists",
    summary:
      "Address verification, deduplication, and presort optimization so you pay the lowest postage possible.",
    promise:
      "Clean, accurate lists are how you earn the lowest postal rates available.",
    whatItIs: [
      "Before anything goes on press, your list is cleaned, standardized, verified, and deduplicated. We run CASS certification and NCOA address verification so records are correct and current, and process suppression files so you are not mailing people who should not receive the piece.",
      "Clean data is not housekeeping — it is the difference between paying full postage and qualifying for presort and automation discounts. Every duplicate removed and every address corrected is postage you do not spend.",
    ],
    included: [
      "List cleaning and standardization",
      "CASS certification",
      "NCOA address verification",
      "Deduplication",
      "Suppression file processing",
      "Presort optimization",
      "Postal discount qualification",
      "List acquisition support",
    ],
    relatedIndustries: [
      "financial-services",
      "b2b",
      "retail-local-business",
    ],
    icon: Database,
    featured: true,
  },
  {
    slug: "variable-data-eddm",
    title: "Variable Data Printing & EDDM",
    navLabel: "Variable Data & EDDM",
    navDescription: "Personalized printing and saturation mail",
    cardTitle: "Variable Data & EDDM",
    summary:
      "Personalized, one-to-one mail and neighborhood saturation campaigns.",
    promise:
      "Personalized, one-to-one mail and neighborhood saturation campaigns that get opened.",
    whatItIs: [
      "Variable data printing changes copy, offers, and imagery record by record, so a single run can carry as many versions as your list has segments. We build the merge logic, proof each version, and test them before the full run goes out.",
      "Every Door Direct Mail works the other way around: instead of addressing named individuals, you saturate the carrier routes you choose. We map the routes, handle the paperwork, and drop the mail — useful when you want coverage across a neighborhood rather than a specific list.",
    ],
    included: [
      "Variable data printing",
      "Merge logic and versioning",
      "Personalized offers and imagery",
      "Every Door Direct Mail",
      "Carrier route targeting",
      "Saturation mapping",
      "Proofing and version testing",
    ],
    relatedIndustries: [
      "retail-local-business",
      "political-campaigns",
      "b2b",
    ],
    icon: MapPin,
  },
];

/** Path to a service's detail page. */
export function serviceHref(service: Pick<Service, "slug">): string {
  return `/services/${service.slug}`;
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const featuredServices = (): Service[] =>
  services.filter((service) => service.featured);
