import type { Metadata } from "next";

import { AboutStory } from "@/components/sections/about-story";
import { CTABand } from "@/components/sections/cta-band";
import { FacilityGallery } from "@/components/sections/facility-gallery";
import { MissionCallout } from "@/components/sections/mission-callout";
import { PageHero } from "@/components/sections/page-hero";
import { PresidentProfile } from "@/components/sections/president-profile";
import { ValuesGrid } from "@/components/sections/values-grid";

export const metadata: Metadata = {
  title: "About",
  description:
    "A full-service direct marketing company in Deer Park, New York, run by people who have been doing this for decades.",
};

/*
  Background rhythm: ink → white → paper → white → paper → white → growth.
  No two paper sections touch.
*/
export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Growth through marketing, since day one."
        subtitle="A full-service direct marketing company in Deer Park, New York — printing, mailing, and data under one roof."
      />

      <AboutStory />
      <MissionCallout />
      <PresidentProfile />
      <ValuesGrid />
      <FacilityGallery />

      <CTABand
        title="Let's talk about your next mailing."
        subtitle="Tell us what you're sending and we'll come back with pricing and a plan."
      />
    </main>
  );
}
