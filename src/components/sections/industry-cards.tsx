import { Check } from "lucide-react";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { IconBox } from "@/components/ui/icon-box";
import { Section } from "@/components/ui/section";
import { industries } from "@/data/industries";
import { industriesCopy } from "@/data/copy";

/** No `interactiveCardClass` hover lift: these cards aren't links. */
function IndustryCards() {
  if (industries.length === 0) return null;

  return (
    <Section variant="white">
      <FadeInStagger className="grid gap-8 lg:grid-cols-2">
        {industries.map((industry) => (
          <FadeIn key={industry.slug} className="flex">
            {/* `id` is the footer links' anchor; `scroll-mt-28` clears the sticky header. */}
            <article
              id={industry.slug}
              className="on-light flex w-full scroll-mt-28 flex-col rounded-xl border border-border bg-white p-8"
            >
              <IconBox icon={industry.icon} />

              <h2 className="mt-6 text-2xl">{industry.name}</h2>

              {industry.description ? (
                <p className="mt-4">{industry.description}</p>
              ) : null}

              {industry.pieces?.length ? (
                <>
                  <h3 className="mt-8 font-heading text-xs font-semibold tracking-[0.1em] text-slate uppercase">
                    {industriesCopy.piecesHeading}
                  </h3>
                  <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {industry.pieces.map((piece) => (
                      <li
                        key={piece}
                        className="flex items-start gap-2 text-base"
                      >
                        <Check
                          className="mt-1.5 size-4 shrink-0 text-growth-text"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                        {piece}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Section>
  );
}

export { IndustryCards };
