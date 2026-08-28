import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredServices, serviceHref } from "@/data/services";
import { servicesTrioCopy } from "@/data/copy";

function ServicesTrio() {
  const services = featuredServices();

  return (
    <Section variant="white">
      <SectionHeading
        eyebrow={servicesTrioCopy.eyebrow}
        title={servicesTrioCopy.title}
        subtitle={servicesTrioCopy.subtitle}
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
              link={{ label: servicesTrioCopy.cardLinkLabel, href: serviceHref(service) }}
              className="w-full"
            />
          </FadeIn>
        ))}
      </FadeInStagger>
    </Section>
  );
}

export { ServicesTrio };
