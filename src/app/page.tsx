import { CTABand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { IndustriesStrip } from "@/components/sections/industries-strip";
import { ProcessRail } from "@/components/sections/process-rail";
import { ServicesTrio } from "@/components/sections/services-trio";
import { StatsBand } from "@/components/sections/stats-band";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyUs } from "@/components/sections/why-us";

/*
  Background rhythm, top to bottom:
    Hero        white (dot grid)
    Trust Bar   ink
    Services    white
    Process     ink
    Why Us      paper
    Stats       ink
    Industries  paper
    Testimonials white   — currently renders nothing (no quotes yet)
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
      <CTABand
        title="Let's talk about your next mailing."
        subtitle="Tell us what you're sending and we'll come back with pricing and a plan."
      />
    </main>
  );
}
