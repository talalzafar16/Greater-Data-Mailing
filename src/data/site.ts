/**
 * Canonical NAP (name, address, phone) record for Greater Data & Mailing.
 *
 * This is the single source of truth for anything that must stay consistent
 * across the site, structured data, and third-party listings. Change it here
 * and nowhere else.
 */

export interface PostalAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface PhoneNumber {
  /** Display form, e.g. "(631) 667-1450". */
  label: string;
  /** `tel:` href in E.164, e.g. "tel:+16316671450". */
  href: string;
}

export interface SiteConfig {
  name: string;
  /** Short capability line shown beside the logo. */
  descriptor: string;
  tagline: string;
  /** Absolute production origin, no trailing slash. */
  url: string;
  address: PostalAddress;
  phone: PhoneNumber;
  /** Kept for reference — the client asked that it NOT be published. */
  cell: PhoneNumber;
  email: string;
  emailHref: string;
}

export const site: SiteConfig = {
  name: "Greater Data & Mailing",
  descriptor: "Print · Mail · Data",
  tagline: "Data-driven direct mail, printed and mailed under one roof.",
  /*
    Confirmed by the client: www.greaterdata.com. Still overridable via
    NEXT_PUBLIC_SITE_URL so preview deploys can point somewhere else.
  */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.greaterdata.com",
  address: {
    street: "551 Acorn Street",
    city: "Deer Park",
    state: "NY",
    zip: "11729",
    country: "USA",
  },
  phone: {
    label: "(631) 667-1450",
    href: "tel:+16316671450",
  },
  cell: {
    label: "(631) 704-0803",
    href: "tel:+16317040803",
  },
  email: "info@greaterdata.com",
  emailHref: "mailto:info@greaterdata.com",
};

/** One-line address, e.g. for footers and meta tags. */
export const formattedAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
