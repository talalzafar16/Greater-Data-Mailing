/**
 * Navigation structure — header, footer, and the header CTA.
 */

import type { LucideIcon } from "lucide-react";

import { serviceHref, services } from "./services";

export interface NavItem {
  label: string;
  href: string;
  /** Supporting copy for mega-menu / dropdown rows. */
  description?: string;
  icon?: LucideIcon;
  /** Renders as a dropdown when present. */
  children?: NavItem[];
  external?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

/**
 * The four service pages, shown as a 2x2 panel under "Services".
 * Derived from `services.ts` so the dropdown and the pages cannot drift apart.
 */
export const serviceNavItems: NavItem[] = services.map((service) => ({
  label: service.navLabel,
  href: serviceHref(service),
  description: service.navDescription,
  icon: service.icon,
}));

/** Primary header navigation. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: serviceNavItems },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

/** Footer "Company" column. */
export const companyNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

/** Header call-to-action button. */
export const navCta: NavItem = {
  label: "Request a Quote",
  href: "/contact",
};

/** Legal / utility links in the footer's bottom bar. */
export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
];
