import type { Metadata } from "next";

import { CTABand } from "@/components/sections/cta-band";
import { IndustryCards } from "@/components/sections/industry-cards";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessRail } from "@/components/sections/process-rail";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Direct mail production for nonprofit, financial services, healthcare, political, retail, and B2B organizations.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        title="Built for the industries that live on the mail."
        subtitle="Different rules, different deadlines, different data — handled by one team that has produced all of it before."
      />

      <IndustryCards />

      <ProcessRail />

      <CTABand
        title="Let's talk about your next mailing."
        subtitle="Tell us what you're sending and we'll come back with pricing and a plan."
      />
    </main>
  );
}
