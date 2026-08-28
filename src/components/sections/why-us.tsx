import { Check } from "lucide-react";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyUsCopy } from "@/data/copy";




function WhyUs() {
  return (
    <Section variant="paper">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:mx-0">
            {/* Offset frame, 8px down and right, sitting behind the image. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border-2 border-growth"
            />
            <ImagePlaceholder
              alt={whyUsCopy.imageAlt}
              className="relative aspect-square w-full rounded-2xl"
            />
          </div>
        </FadeIn>

        <div className="lg:col-span-7">
          <FadeIn>
            <SectionHeading
              eyebrow={whyUsCopy.eyebrow}
              title={whyUsCopy.title}
            />
          </FadeIn>

          {/*
            `FadeIn` renders a div, so a real <ul>/<li> would be invalid markup.
            ARIA list roles give screen readers the same "4 items" semantics
            without needing an `as` prop on the motion primitive.
          */}
          <FadeInStagger role="list" className="mt-10 flex flex-col gap-6">
            {whyUsCopy.reasons.map((reason) => (
              <FadeIn key={reason.title} role="listitem" className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-growth/10 text-growth-text"
                >
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-heading font-bold text-ink">
                    {reason.title}
                  </p>
                  <p className="mt-1">{reason.body}</p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </Section>
  );
}

export { WhyUs };
