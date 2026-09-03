import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutCopy } from "@/data/copy";




function AboutStory() {
  return (
    <Section variant="white">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <FadeIn>
            <SectionHeading
              eyebrow={aboutCopy.storyEyebrow}
              title={aboutCopy.storyTitle}
            />
          </FadeIn>

          <div className="mt-8 flex max-w-[65ch] flex-col gap-6">
            {aboutCopy.story.map((paragraph) => (
              <FadeIn key={paragraph.slice(0, 40)} delay={0.1}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.2} className="lg:col-span-5">
          <Image
            src={aboutCopy.storyImage}
            alt={aboutCopy.storyImageAlt}
            width={1000}
            height={1250}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-4/5 w-full rounded-2xl object-cover"
          />
        </FadeIn>
      </div>
    </Section>
  );
}

export { AboutStory };
