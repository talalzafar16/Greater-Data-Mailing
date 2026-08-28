import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Three placeholders standing in for plant photography.
 *
 * Each `alt` is written as the brief for the shot the client needs to supply —
 * swap each `ImagePlaceholder` for an `<Image>` carrying the same string.
 */
const SHOTS = [
  "Press floor at Greater Data & Mailing with sheet fed and web presses running",
  "High-speed inserting machines processing a matched mailing",
  "Trays of finished mail sorted and staged for USPS pickup",
];

function FacilityGallery() {
  return (
    <Section variant="white">
      <SectionHeading
        eyebrow="Inside the Plant"
        title="Everything happens in Deer Park."
      />

      <FadeInStagger className="mt-16 grid gap-6 md:grid-cols-3">
        {SHOTS.map((shot) => (
          <FadeIn key={shot}>
            <ImagePlaceholder
              alt={shot}
              className="aspect-4/3 w-full rounded-xl"
            />
          </FadeIn>
        ))}
      </FadeInStagger>
    </Section>
  );
}

export { FacilityGallery };
