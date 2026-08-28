import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { HeroVisual } from "./hero-visual";

const TRUST_ITEMS = [
  "In-house production",
  "USPS automation certified",
  "Family-run since day one",
];

/**
 * Alt text for the photograph this gradient block stands in for. Kept here so
 * whoever swaps in the real `<Image>` inherits the description.
 */
const HERO_IMAGE_ALT =
  "Greater Data & Mailing production floor with high-speed press running";

function Hero() {
  return (
    <section className="bg-dot-grid relative flex min-h-[88vh] items-center py-16 lg:py-24">
      <Container className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: copy. Each block is one 0.1s step behind the last. */}
        <div className="lg:col-span-7">
          <FadeIn>
            <p className="font-heading text-xs font-semibold tracking-[0.1em] text-growth uppercase">
              Long Island Direct Mail Experts
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6">
              <span className="block">Greater Data.</span>
              <span className="relative inline-block">
                Better Mail.
                {/*
                  Hand-drawn swash rather than `text-decoration`: it stretches
                  with the text (preserveAspectRatio="none") and keeps the
                  slight rise of a brush stroke.
                */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                  className="absolute -bottom-1 left-0 h-[0.14em] w-full overflow-visible text-growth"
                >
                  <path
                    d="M2 9C46 4 118 2 198 5"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-xl">
              Full-service printing and mailing under one roof in Deer Park, NY.
              We clean your data, print your piece, and get it into mailboxes at
              the lowest postal rate you qualify for.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Check
                    className="size-4 shrink-0 text-growth"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Right: portrait visual with the overlapping stat card. */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:mr-0">
            <HeroVisual>
              <ImagePlaceholder
                alt={HERO_IMAGE_ALT}
                className="aspect-4/5 w-full rounded-2xl"
              />
            </HeroVisual>

            <FadeIn
              delay={0.6}
              // `-left-4` on the smallest screens keeps a gutter between the
              // card and the viewport edge; the image sits in a 24px padded
              // container, so -6 would land it flush.
              className="absolute -bottom-6 -left-4 rounded-xl bg-white p-5 shadow-lift sm:-left-6"
            >
              <p className="font-heading text-[40px] leading-none font-bold text-growth">
                38+
              </p>
              <p className="mt-2 text-[13px] leading-snug text-slate">
                Years of Direct Mail Expertise
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
