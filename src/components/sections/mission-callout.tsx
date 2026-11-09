import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { aboutCopy } from "@/data/copy";

function MissionCallout() {
  return (
    <section className="on-light bg-paper py-24">
      <Container>
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-xs font-semibold tracking-[0.1em] text-growth-text uppercase">
            {aboutCopy.missionEyebrow}
          </p>
          <p className="mt-8 font-heading text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-bold tracking-tight text-ink text-balance">
            {aboutCopy.mission}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export { MissionCallout };
