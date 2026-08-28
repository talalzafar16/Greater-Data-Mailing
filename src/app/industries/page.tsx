import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

import { CTABand } from "@/components/sections/cta-band";
import { IndustryCards } from "@/components/sections/industry-cards";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessRail } from "@/components/sections/process-rail";
import { industriesCopy } from "@/data/copy";

export const metadata: Metadata = buildMetadata("/industries");

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        title={industriesCopy.title}
        subtitle={industriesCopy.heroSubtitle}
      />

      <IndustryCards />

      <ProcessRail />

      <CTABand />
    </main>
  );
}
