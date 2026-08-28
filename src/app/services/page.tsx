import type { Metadata } from "next";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessRail } from "@/components/sections/process-rail";
import { buildMetadata } from "@/lib/metadata";
import { servicesHubCopy, servicesTrioCopy } from "@/data/copy";
import { serviceHref, services } from "@/data/services";

export const metadata: Metadata = buildMetadata("/services");

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title={servicesHubCopy.title}
        subtitle={servicesHubCopy.subtitle}
      />

      <Section variant="white">
        <SectionHeading
          eyebrow={servicesHubCopy.gridEyebrow}
          title={servicesHubCopy.gridTitle}
        />

        <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <FadeIn key={service.slug} className="flex">
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.summary}
                link={{
                  label: servicesTrioCopy.cardLinkLabel,
                  href: serviceHref(service),
                }}
                className="w-full"
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Section>

      <ProcessRail />

      <CTABand />
    </main>
  );
}
