/**
 * Industries served — the verticals the company targets.
 */

import {
  Building2,
  HeartHandshake,
  Landmark,
  Stethoscope,
  Store,
  Vote,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  /** URL segment, e.g. "healthcare" → /industries/healthcare */
  slug: string;
  name: string;
  /** One-line summary for tiles and nav rows. */
  summary: string;
  /** Two to three sentences for the industries page cards. */
  description?: string;
  /** Typical mail pieces this vertical sends. */
  pieces?: string[];
  icon: LucideIcon;
  /** Problems this vertical typically brings to us. */
  painPoints?: string[];
  /** Slugs from `services.ts` that matter most to this vertical. */
  relatedServices?: string[];
}

export const industries: Industry[] = [
  {
    slug: "nonprofit",
    name: "Nonprofit",
    summary:
      "Fundraising appeals, donor acknowledgements, and membership renewals.",
    description:
      "Fundraising mail lives or dies on timing and accuracy. A donor who receives two copies of the same appeal, or a thank-you addressed to someone who moved three years ago, costs you more than the postage. We clean the file, personalize the ask, and get the drop out while the campaign still matters.",
    pieces: [
      "Annual and year-end appeals",
      "Donor thank-yous and acknowledgements",
      "Membership renewals",
      "Event and gala invitations",
      "Giving statements",
      "Supporter newsletters",
    ],
    icon: HeartHandshake,
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    summary: "Statements, notices, and acquisition campaigns.",
    description:
      "Financial mail splits between what you have to send and what you want to send. Statements and notices have to be accurate, on schedule, and matched to the right record every single time. Acquisition campaigns have the opposite problem — they have to earn attention in a mailbox full of competitors.",
    pieces: [
      "Account statements",
      "Regulatory and privacy notices",
      "Rate and term change announcements",
      "Acquisition offers",
      "Welcome and onboarding kits",
      "Renewal notices",
    ],
    icon: Landmark,
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Patient and member communications handled with care.",
    description:
      "Patient and member mail carries information people need to act on, and often information they would rather nobody else saw. Matched mailings keep every page with the right recipient, and verified addressing keeps it from reaching the wrong one. These files get the handling they require.",
    pieces: [
      "Appointment and screening reminders",
      "Explanation of benefits",
      "Enrollment and plan materials",
      "Provider directories",
      "Preventive care outreach",
      "Practice and network updates",
    ],
    icon: Stethoscope,
  },
  {
    slug: "political-campaigns",
    name: "Political Campaigns",
    summary: "Fast-turn voter outreach on tight deadlines.",
    description:
      "Campaign mail has a deadline that does not move. Districts get redrawn, voter files go stale quickly, and a piece that lands the day after the election is worth nothing. We turn drops around fast and target by carrier route when you need saturation rather than a named list.",
    pieces: [
      "Persuasion and comparison mail",
      "Get-out-the-vote reminders",
      "Absentee and vote-by-mail applications",
      "Candidate introductions",
      "Slate cards",
      "Endorsement mailers",
    ],
    icon: Vote,
  },
  {
    slug: "retail-local-business",
    name: "Retail & Local Business",
    summary: "EDDM saturation and neighborhood targeting.",
    description:
      "Local business mail is about covering a trade area, not buying a list. Every Door Direct Mail reaches whole carrier routes around your location at saturation rates, with no names or addresses required. We map the routes, handle the paperwork, and print the piece.",
    pieces: [
      "Grand opening announcements",
      "Seasonal promotions and coupons",
      "Menus and service listings",
      "Neighborhood saturation postcards",
      "In-store event invitations",
      "Loyalty and win-back offers",
    ],
    icon: Store,
  },
  {
    slug: "b2b",
    name: "B2B",
    summary: "Lead generation and customer retention mail.",
    description:
      "Business mail has to get past a gatekeeper and land on the right desk. That starts with a deduplicated, title-accurate file — three copies to the same office wastes budget and looks careless. From there it comes down to giving a busy reader one clear reason to respond.",
    pieces: [
      "Lead generation campaigns",
      "Trade show invitations and follow-ups",
      "Product and catalog announcements",
      "Renewal and win-back mail",
      "Dimensional mailers",
      "Customer newsletters",
    ],
    icon: Building2,
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
