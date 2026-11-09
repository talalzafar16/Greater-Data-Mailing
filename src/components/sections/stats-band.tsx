import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { stats } from "@/data/stats";

function StatsBand() {
  if (stats.length === 0) return null;

  return (
    <section className="on-ink bg-ink section-y">
      <Container>
        <dl className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "px-4 text-center md:px-6",
                // Left divider on every item that doesn't start a row (2 cols below md, 4 at md).
                index % 2 === 1 && "border-l border-white/10",
                index === 0
                  ? "md:border-l-0"
                  : "md:border-l md:border-white/10"
              )}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-heading text-[56px] leading-none font-bold text-growth-text">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="mt-4 block text-sm text-white/70"
                >
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export { StatsBand };
