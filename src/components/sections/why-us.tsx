import { Check } from "lucide-react";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const REASONS = [
  {
    title: "Lower postal rates.",
    body: "We make sure your list is clean and accurate so your mail qualifies for the deepest postal discounts available.",
  },
  {
    title: "One team, start to finish.",
    body: "Your job never leaves our building or gets passed to a third party.",
  },
  {
    title: "38 years of hands-on experience.",
    body: "Our president has mastered every process on the floor personally.",
  },
  {
    title: "No job too small or too large.",
    body: "From a 500-piece local drop to a multi-million-piece campaign.",
  },
];

const IMAGE_ALT =
  "Greater Data & Mailing team member inspecting a mail piece on the production line.";

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
              alt={IMAGE_ALT}
              className="relative aspect-square w-full rounded-2xl"
            />
          </div>
        </FadeIn>

        <div className="lg:col-span-7">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Greater Data"
              title="A first-class mailing every single time."
            />
          </FadeIn>

          {/*
            `FadeIn` renders a div, so a real <ul>/<li> would be invalid markup.
            ARIA list roles give screen readers the same "4 items" semantics
            without needing an `as` prop on the motion primitive.
          */}
          <FadeInStagger role="list" className="mt-10 flex flex-col gap-6">
            {REASONS.map((reason) => (
              <FadeIn key={reason.title} role="listitem" className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-growth/10 text-growth"
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
