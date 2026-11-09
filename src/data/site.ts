// Canonical NAP (name, address, phone) record. Change it here and nowhere else.

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
  /** Do NOT publish this number on the site. */
  cell: PhoneNumber;
  email: string;
  emailHref: string;
}

export const site: SiteConfig = {
  name: "Greater Data & Mailing",
  descriptor: "Print · Mail · Data",
  tagline: "Data-driven direct mail, printed and mailed under one roof.",
  // `||` not `??`: a blank env var arrives as "" and would make `new URL(site.url)` throw at build.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.greaterdata.com",
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

export const formattedAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
