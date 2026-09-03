import Image from "next/image";

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutCopy } from "@/data/copy";

/**
 * Three plant shots, currently licensed stock standing in for photography of
 * the Deer Park facility. Swapping them is a `src` change in `aboutCopy` —
 * keep the files cropped 4:3 so the grid rows stay level.
 */

function FacilityGallery() {
  return (
    <Section variant="white">
      <SectionHeading
        eyebrow={aboutCopy.galleryEyebrow}
        title={aboutCopy.galleryTitle}
      />

      <FadeInStagger className="mt-16 grid gap-6 md:grid-cols-3">
        {aboutCopy.galleryShots.map((shot) => (
          <FadeIn key={shot.src}>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1000}
              height={750}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-4/3 w-full rounded-xl object-cover"
            />
          </FadeIn>
        ))}
      </FadeInStagger>
    </Section>
  );
}

export { FacilityGallery };
