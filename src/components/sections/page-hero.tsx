import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export interface Crumb {
  label: string;
  /** Omit on the current page — it renders as text, not a link. */
  href?: string;
}

interface PageHeroProps {
  breadcrumb?: Crumb[];
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Off for pages where a quote CTA would be out of place, e.g. /privacy. */
  showCta?: boolean;
}

/** Compact ink hero shared by the services hub and every service sub-page. */
function PageHero({
  breadcrumb,
  title,
  subtitle,
  ctaLabel = "Get a Free Quote",
  ctaHref = "/contact",
  showCta = true,
}: PageHeroProps) {
  return (
    <section className="on-ink bg-ink py-20">
      <Container>
        {breadcrumb && breadcrumb.length > 0 ? (
          <FadeIn>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[13px] text-growth">
                {breadcrumb.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-growth/50">
                        /
                      </span>
                    ) : null}

                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="transition-opacity hover:opacity-75"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </FadeIn>
        ) : null}

        <FadeIn delay={0.1}>
          <h1 className="mt-6 max-w-4xl text-white">{title}</h1>
        </FadeIn>

        {subtitle ? (
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg">{subtitle}</p>
          </FadeIn>
        ) : null}

        {showCta ? (
          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}

export { PageHero };
