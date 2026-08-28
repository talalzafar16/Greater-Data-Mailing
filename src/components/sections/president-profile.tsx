import { FadeIn } from "@/components/ui/fade-in";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Section } from "@/components/ui/section";

const BIO =
  "Steven is a direct mail professional with more than 38 years of experience, having worked hands-on through every process along the way. He understands what efficient, quality-driven production takes: keeping costs under control while delivering a strong return. He works closely with employees, vendors, suppliers, and clients to keep communication accurate and expectations met, and stays current on the latest USPS technologies and innovations. No project is too small or too large.";

const IMAGE_ALT = "Steven Loehr, President of Greater Data & Mailing";

function PresidentProfile() {
  return (
    <Section variant="white">
      <FadeIn>
        <div className="on-light overflow-hidden rounded-xl border border-border bg-white">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <ImagePlaceholder
                alt={IMAGE_ALT}
                className="aspect-square w-full lg:h-full"
              />
            </div>

            <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:py-12 lg:pr-12 lg:pl-0">
              <h2 className="text-3xl">Steven Loehr</h2>
              <p className="mt-2 font-heading font-semibold text-growth">
                President
              </p>
              <p className="mt-6 max-w-[65ch]">{BIO}</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export { PresidentProfile };
