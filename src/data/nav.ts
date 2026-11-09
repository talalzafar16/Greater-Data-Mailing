import type { LucideIcon } from "lucide-react";

import { serviceHref, services } from "./services";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  children?: NavItem[];
  external?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const serviceNavItems: NavItem[] = services.map((service) => ({
  label: service.navLabel,
  href: serviceHref(service),
  description: service.navDescription,
  icon: service.icon,
}));

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

export const navCta: NavItem = {
  label: "Request a Quote",
  href: "/contact",
};

/** Legal / utility links in the footer's bottom bar. */
export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
];
