import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { aboutCopy } from "@/data/copy";

function PresidentProfile() {
  return (
    <Section variant="white">
      <FadeIn>
        <div className="on-light overflow-hidden rounded-xl border border-border bg-white">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Image
                src={aboutCopy.presidentImage}
                alt={aboutCopy.presidentImageAlt}
                width={896}
                height={1195}
                sizes="(min-width: 1024px) 40vw, 100vw"
                /*
                  `object-top`, not the default centre: the source is a 3:4
                  portrait and this box is square (taller only once the bio
                  sets the row height at `lg`), so a centred cover crop takes
                  ~12% off the top and clips his hair. Anchoring to the top
                  spends the whole overflow on the jacket instead.
                */
                className="aspect-square w-full object-cover object-top lg:h-full"
              />
            </div>

            <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:py-12 lg:pr-12 lg:pl-0">
              <h2 className="text-3xl">{aboutCopy.presidentName}</h2>
              <p className="mt-2 font-heading font-semibold text-growth-text">
                {aboutCopy.presidentRole}
              </p>
              <p className="mt-6 max-w-[65ch]">{aboutCopy.presidentBio}</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export { PresidentProfile };
