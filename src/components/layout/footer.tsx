import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { MapEmbed } from "@/components/ui/map-embed";
import { companyNav, legalNav, serviceNavItems } from "@/data/nav";
import { industries } from "@/data/industries";
import { site } from "@/data/site";
import type { NavItem } from "@/data/nav";

const linkClass =
  "text-[15px] transition-colors hover:text-white focus-visible:text-white";

function FooterColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h3 className="font-heading text-xs font-semibold tracking-[0.1em] text-white uppercase">
        {title}
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  // Rendered on the server, so this is the build date for statically
  // prerendered pages — it advances on the next deploy, not at midnight.
  const year = new Date().getFullYear();

  /*
    There are no industry sub-pages — /industries is a single page — so each
    name deep-links to its own card via an anchor rather than to a
    /industries/<slug> route, which would 404. Falls back to the bare index
    link if the data file is ever emptied.
  */
  const industryItems: NavItem[] =
    industries.length > 0
      ? industries.map((industry) => ({
          label: industry.name,
          href: `/industries#${industry.slug}`,
        }))
      : [{ label: "View all industries", href: "/industries" }];

  return (
    <footer className="on-ink bg-ink">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            {/*
              Stacked rather than inline as in the header: this column is a
              quarter width, so a side-by-side lockup would wrap the name.

              `self-start` is load-bearing. The parent is `flex flex-col`, so
              the default `align-items: stretch` pulls the image to the full
              column width on the cross axis and `w-auto` cannot stop it —
              which stretched the mark to 272x48 against its natural 1.465
              ratio. The header escapes this only because it is a row with
              `items-center`.
            */}
            <Image
              src="/logo-mark.png"
              alt=""
              width={400}
              height={273}
              className="mb-4 h-12 w-auto self-start"
            />
            <p className="font-heading text-lg font-bold tracking-tight text-white">
              {site.name}
            </p>
            <p className="mt-1 text-[11px] tracking-wide">{site.descriptor}</p>

            <address className="mt-6 text-[15px] not-italic">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>

            <div className="mt-6 flex flex-col gap-3">
              <a href={site.phone.href} className={`flex items-center gap-2 ${linkClass}`}>
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {site.phone.label}
              </a>
              <a href={site.emailHref} className={`flex items-center gap-2 ${linkClass}`}>
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>

          <FooterColumn title="Services" items={serviceNavItems} />
          <FooterColumn title="Industries" items={industryItems} />
          <FooterColumn title="Company" items={companyNav} />
        </div>
      </Container>

      {/* Full-bleed map, deliberately outside the container. */}
      <MapEmbed className="h-60" />

      <Container>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[15px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
