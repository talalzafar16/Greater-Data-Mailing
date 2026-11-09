import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

import { AboutStory } from "@/components/sections/about-story";
import { CTABand } from "@/components/sections/cta-band";
import { FacilityGallery } from "@/components/sections/facility-gallery";
import { MissionCallout } from "@/components/sections/mission-callout";
import { PageHero } from "@/components/sections/page-hero";
import { PresidentProfile } from "@/components/sections/president-profile";
import { ValuesGrid } from "@/components/sections/values-grid";
import { aboutCopy } from "@/data/copy";

export const metadata: Metadata = buildMetadata("/about");

// Background rhythm: ink → white → paper → white → paper → white → growth; no two paper sections touch.
export default function AboutPage() {
  return (
    <main>
      <PageHero
        title={aboutCopy.heroTitle}
        subtitle={aboutCopy.heroSubtitle}
      />

      <AboutStory />
      <MissionCallout />
      <PresidentProfile />
      <ValuesGrid />
      <FacilityGallery />

      <CTABand />
    </main>
  );
}
