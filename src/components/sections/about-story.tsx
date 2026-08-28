import { FadeIn } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const STORY = [
  "Greater Data & Mailing is a full-service direct marketing company in Deer Park, New York. Walk into our plant and you'll see today's technology at work, run by people who have been doing this for decades. Our customer service and attention to detail are the reasons we've kept growing in a crowded marketplace.",
  "We give our team an environment that rewards good ideas, and many of those ideas have saved our customers real money in production costs. Your mailing is never just another job here. Every one is a chance to show you our best.",
];

const IMAGE_ALT =
  "Interior of the Greater Data & Mailing production plant in Deer Park, NY";

function AboutStory() {
  return (
    <Section variant="white">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <FadeIn>
            <SectionHeading
              eyebrow="Who We Are"
              title="A direct marketing company, not a print broker."
            />
          </FadeIn>

          <div className="mt-8 flex max-w-[65ch] flex-col gap-6">
            {STORY.map((paragraph) => (
              <FadeIn key={paragraph.slice(0, 40)} delay={0.1}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.2} className="lg:col-span-5">
          <ImagePlaceholder
            alt={IMAGE_ALT}
            className="aspect-4/5 w-full rounded-2xl"
          />
        </FadeIn>
      </div>
    </Section>
  );
}

export { AboutStory };
