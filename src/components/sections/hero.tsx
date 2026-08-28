import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { heroCopy } from "@/data/copy";
import { HeroVisual } from "./hero-visual";

function Hero() {
  return (
    <section className="bg-dot-grid relative flex min-h-[88vh] items-center py-16 lg:py-24">
      <Container className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: copy. Each block is one 0.1s step behind the last. */}
        <div className="lg:col-span-7">
          <FadeIn>
            <p className="font-heading text-xs font-semibold tracking-[0.1em] text-growth-text uppercase">
              {heroCopy.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6">
              <span className="block">{heroCopy.titleLine1}</span>
              <span className="relative inline-block">
                {heroCopy.titleLine2}
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
                  className="absolute -bottom-1 left-0 h-[0.14em] w-full overflow-visible text-growth-text"
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
            <p className="mt-8 max-w-2xl text-xl">{heroCopy.subline}</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href={heroCopy.primaryCta.href}>
                  {heroCopy.primaryCta.label}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={heroCopy.secondaryCta.href}>
                  {heroCopy.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              {heroCopy.trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Check
                    className="size-4 shrink-0 text-growth-text"
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
                alt={heroCopy.imageAlt}
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
              <p className="font-heading text-[40px] leading-none font-bold text-growth-text">
                {heroCopy.stat.value}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-slate">
                {heroCopy.stat.label}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
