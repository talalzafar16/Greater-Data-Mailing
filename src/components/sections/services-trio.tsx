import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredServices, serviceHref } from "@/data/services";

function ServicesTrio() {
  const services = featuredServices();

  return (
    <Section variant="white">
      <SectionHeading
        eyebrow="What We Do"
        title="Everything your mailing needs, in one building."
        subtitle="No brokers, no handoffs, no surprises. The same team that cleans your list runs the press and drops the mail."
      />

      <FadeInStagger className="mt-16 grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          // `flex` on the wrapper lets the card stretch to the row height, so
          // the "Learn more" links align across all three.
          <FadeIn key={service.slug} className="flex">
            <FeatureCard
              icon={service.icon}
              title={service.cardTitle}
              description={service.summary}
              link={{ label: "Learn more", href: serviceHref(service) }}
              className="w-full"
            />
          </FadeIn>
        ))}
      </FadeInStagger>
    </Section>
  );
}

export { ServicesTrio };
