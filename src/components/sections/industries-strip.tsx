import Link from "next/link";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { interactiveCardClass } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { industries, type Industry } from "@/data/industries";
import { industriesCopy } from "@/data/copy";

interface IndustriesStripProps {
  eyebrow?: string;
  title?: string;
  /** Defaults to the full list; service pages pass a three-item subset. */
  items?: Industry[];
  variant?: "white" | "paper";
}

function IndustriesStrip({
  eyebrow = industriesCopy.eyebrow,
  title = industriesCopy.title,
  items = industries,
  variant = "paper",
}: IndustriesStripProps) {
  if (items.length === 0) return null;

  return (
    <Section variant={variant}>
      <SectionHeading eyebrow={eyebrow} title={title} />

      <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((industry) => {
          const Icon = industry.icon;

          return (
            <FadeIn key={industry.slug} className="flex">
              <Link
                href="/industries"
                className={cn(
                  interactiveCardClass,
                  "group flex w-full flex-col p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                )}
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-growth/10 text-growth-text">
                  <Icon className="size-6" aria-hidden="true" />
                </span>

                <h3 className="mt-6 text-lg">{industry.name}</h3>
                <p className="mt-2 text-base">{industry.summary}</p>
              </Link>
            </FadeIn>
          );
        })}
      </FadeInStagger>
    </Section>
  );
}

export { IndustriesStrip };
