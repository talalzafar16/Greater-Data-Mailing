"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE_ENGINEERED } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import {
  displayedTestimonials as testimonials,
  showingSampleTestimonials,
} from "@/data/testimonials";

interface TestimonialsProps {
  eyebrow?: string;
  title?: string;
}

/** Renders null when there are no quotes; sample quotes show only outside production. */
function Testimonials({
  eyebrow = "Client Feedback",
  title = "What our clients say.",
}: TestimonialsProps) {
  const [index, setIndex] = React.useState(0);
  const reduceMotion = useReducedMotion();

  const count = testimonials.length;
  if (count === 0) return null;

  const current = testimonials[index];
  /** Wrap in both directions so the arrows never dead-end. */
  const go = (next: number) => setIndex(((next % count) + count) % count);

  return (
    <Section variant="white">
      <SectionHeading align="center" eyebrow={eyebrow} title={title} />

      {showingSampleTestimonials ? (
        <p className="mx-auto mt-6 w-fit rounded-full border border-dashed border-border px-4 py-1 text-center text-sm text-slate">
          Preview only — sample quotes, hidden on the live site.
        </p>
      ) : null}

      <div className="relative mx-auto mt-16 max-w-3xl text-center">
        <Quote
          className="mx-auto size-10 text-growth-text/25"
          aria-hidden="true"
        />

        <div aria-live="polite" aria-atomic="true" className="mt-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.blockquote
              key={current.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: EASE_ENGINEERED,
              }}
            >
              <p className="font-heading text-2xl leading-snug font-semibold text-ink">
                {current.quote}
              </p>

              <footer className="mt-6 text-base">
                <cite className="font-medium text-ink not-italic">
                  {current.author}
                </cite>
                {current.role || current.company ? (
                  <span className="mt-1 block text-slate">
                    {[current.role, current.company]
                      .filter(Boolean)
                      .join(", ")}
                  </span>
                ) : null}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {count > 1 ? (
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => go(dotIndex)}
                  aria-label={`Show testimonial ${dotIndex + 1} of ${count}`}
                  aria-current={dotIndex === index ? "true" : undefined}
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    dotIndex === index
                      ? "bg-growth"
                      : "bg-border hover:bg-slate/40"
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </Button>
          </div>
        ) : null}
      </div>
    </Section>
  );
}

export { Testimonials };
