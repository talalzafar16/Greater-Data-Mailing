import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

import { CTABand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { IndustriesStrip } from "@/components/sections/industries-strip";
import { ProcessRail } from "@/components/sections/process-rail";
import { ServicesTrio } from "@/components/sections/services-trio";
import { StatsBand } from "@/components/sections/stats-band";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyUs } from "@/components/sections/why-us";

// Title/description inherit from the root layout; this only adds the canonical, which the layout omits.
export const metadata: Metadata = buildMetadata("/");

// Order matters: an ink section separates the two paper ones (WhyUs, IndustriesStrip),
// so paper backgrounds never touch, even if Testimonials renders nothing.
export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesTrio />
      <ProcessRail />
      <WhyUs />
      <StatsBand />
      <IndustriesStrip />
      <Testimonials />
      <CTABand />
    </main>
  );
}
