import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { CTABand } from "./cta-band";
import { IndustriesStrip } from "./industries-strip";
import { PageHero } from "./page-hero";
import { ProcessRail } from "./process-rail";
import { industries } from "@/data/industries";
import type { Service } from "@/data/services";
import { serviceDetailCopy } from "@/data/copy";

type SurfaceVariant = "white" | "paper";

function WhatItIs({
  service,
  variant,
}: {
  service: Service;
  variant: SurfaceVariant;
}) {
  return (
    <Section variant={variant}>
      <SectionHeading title={serviceDetailCopy.whatItIsHeading} />
      <div className="mt-8 flex max-w-[65ch] flex-col gap-6">
        {service.whatItIs.map((paragraph) => (
          <FadeIn key={paragraph.slice(0, 40)}>
            <p>{paragraph}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function WhatsIncluded({
  items,
  variant,
}: {
  items: string[];
  variant: SurfaceVariant;
}) {
  return (
    <Section variant={variant}>
      <SectionHeading title={serviceDetailCopy.includedHeading} />
      <FadeInStagger
        role="list"
        className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-x-12"
      >
        {items.map((item) => (
          <FadeIn
            key={item}
            role="listitem"
            className="flex items-start gap-3 text-base"
          >
            <Check
              className="mt-1.5 size-4 shrink-0 text-growth-text"
              strokeWidth={3}
              aria-hidden="true"
            />
            {item}
          </FadeIn>
        ))}
      </FadeInStagger>
    </Section>
  );
}

function Capabilities({
  service,
  variant,
}: {
  service: Service;
  variant: SurfaceVariant;
}) {
  const altRowClass = variant === "white" ? "bg-paper" : "bg-white";

  return (
    <Section variant={variant}>
      <SectionHeading title={serviceDetailCopy.capabilitiesHeading} />

      <dl className="mt-10 overflow-hidden rounded-xl border border-border">
        {service.capabilities?.map((group, index) => (
          <div
            key={group.department}
            className={cn(
              "grid gap-4 p-6 sm:grid-cols-3 sm:gap-8",
              index % 2 === 1 && altRowClass,
              index > 0 && "border-t border-border"
            )}
          >
            <dt className="font-heading font-bold text-ink">
              {group.department}
            </dt>
            <dd className="flex flex-wrap gap-2 sm:col-span-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="h-7 bg-white px-3 text-sm text-ink"
                >
                  {item}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/** Optional blocks vary per service, so present blocks alternate white/paper and paper never touches paper. */
function ServiceDetail({ service }: { service: Service }) {
  const related = service.relatedIndustries
    .map((slug) => industries.find((industry) => industry.slug === slug))
    .filter((industry): industry is NonNullable<typeof industry> =>
      Boolean(industry)
    );

  const blocks: ((variant: SurfaceVariant) => React.ReactNode)[] = [
    (variant) => <WhatItIs service={service} variant={variant} />,
  ];

  if (service.included?.length) {
    const items = service.included;
    blocks.push((variant) => <WhatsIncluded items={items} variant={variant} />);
  }

  if (service.capabilities?.length) {
    blocks.push((variant) => (
      <Capabilities service={service} variant={variant} />
    ));
  }

  return (
    <main>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        subtitle={service.promise}
      />

      {blocks.map((render, index) => (
        <div key={index}>{render(index % 2 === 0 ? "white" : "paper")}</div>
      ))}

      <ProcessRail />

      <IndustriesStrip
        eyebrow={serviceDetailCopy.relatedEyebrow}
        title={`${service.title} for teams like yours.`}
        items={related}
      />

      <CTABand />
    </main>
  );
}

export { ServiceDetail };
