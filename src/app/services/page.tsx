import type { Metadata } from "next";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { CTABand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessRail } from "@/components/sections/process-rail";
import { serviceHref, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Printing, mailing, and data services under one roof in Deer Park, NY.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Printing, mailing, and data services under one roof."
        subtitle="One team cleans your list, prints your piece, and gets it into mailboxes at the lowest postal rate you qualify for."
      />

      <Section variant="white">
        <FadeInStagger className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <FadeIn key={service.slug} className="flex">
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.summary}
                link={{ label: "Learn more", href: serviceHref(service) }}
                className="w-full"
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Section>

      <ProcessRail />

      <CTABand
        title="Let's talk about your next mailing."
        subtitle="Tell us what you're sending and we'll come back with pricing and a plan."
      />
    </main>
  );
}
