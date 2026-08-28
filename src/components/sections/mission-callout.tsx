import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

/**
 * Full-bleed paper band carrying the mission statement at display scale.
 *
 * The type is General Sans at the top of the scale rather than a serif — the
 * design system defines exactly two families, and introducing a third here
 * would break the rest of the site for one line of copy.
 */
function MissionCallout() {
  return (
    <section className="on-light bg-paper py-24">
      <Container>
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-xs font-semibold tracking-[0.1em] text-growth uppercase">
            Our Mission
          </p>
          <p className="mt-8 font-heading text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-bold tracking-tight text-ink text-balance">
            To create growth through marketing.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export { MissionCallout };
