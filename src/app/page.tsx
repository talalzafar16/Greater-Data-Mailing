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

// Title and description are inherited from the root layout; only the canonical
// needs stating, since the layout deliberately sets none.
export const metadata: Metadata = buildMetadata("/");

/*
  Background rhythm, top to bottom:
    Hero        white (dot grid)
    Trust Bar   ink
    Services    white
    Process     ink
    Why Us      paper
    Stats       ink
    Industries  paper
    Testimonials white   — sample quotes on dev/preview; absent in production
                           until real quotes are added
    CTA Band    growth

  Every paper section is separated from the next by an ink one, so two paper
  backgrounds never sit together — including when Testimonials is absent.
*/
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
