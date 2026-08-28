import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/metadata";
import { notFoundCopy } from "@/data/copy";
import { mainNav } from "@/data/nav";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata("notFound");

export default function NotFound() {
  return (
    <main>
      {/* Navy hero, matching the treatment on every other inner page. */}
      <section className="on-ink bg-ink py-24 md:py-32">
        <Container>
          <p className="font-heading text-xs font-semibold tracking-[0.1em] text-growth-text uppercase">
            {notFoundCopy.eyebrow}
          </p>

          <h1 className="mt-6 max-w-3xl text-white">{notFoundCopy.title}</h1>

          <p className="mt-6 max-w-xl text-lg">{notFoundCopy.body}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/">{notFoundCopy.homeCta}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">{notFoundCopy.servicesCta}</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="on-light section-y bg-white">
        <Container>
          <h2 className="text-2xl">{notFoundCopy.linksHeading}</h2>

          <nav aria-label="All pages" className="mt-8">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-ink transition-colors hover:text-growth-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-8 text-base">
            {notFoundCopy.callPrefix}{" "}
            <a
              href={site.phone.href}
              className="font-medium text-growth-text underline underline-offset-4"
            >
              {site.phone.label}
            </a>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}
