"use client";

import { motion } from "framer-motion";
import {
  Database,
  Mail,
  PenTool,
  Printer,
  Truck,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { EASE_ENGINEERED, VIEWPORT } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  label: string;
  detail: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    label: "Data",
    detail: "We clean, verify, and standardize your list.",
    icon: Database,
  },
  {
    label: "Design",
    detail: "Files prepped for press and postal compliance.",
    icon: PenTool,
  },
  {
    label: "Print",
    detail: "Digital and offset production in-house.",
    icon: Printer,
  },
  {
    label: "Mail",
    detail: "Inserting, tabbing, addressing, and presort.",
    icon: Mail,
  },
  {
    label: "Delivered",
    detail: "Handed to USPS and on its way.",
    icon: Truck,
  },
];

/** The connecting line takes this long to travel the full rail. */
const LINE_DURATION = 1.2;

interface ProcessRailProps {
  title?: string;
  steps?: ProcessStep[];
  className?: string;
}

/**
 * The signature process rail — reused on every service sub-page.
 *
 * A single `whileInView` on the wrapper drives everything: the line variant
 * runs for {@link LINE_DURATION}, and each circle's delay is its fraction of
 * that same span, so a circle resolves exactly as the line arrives at it.
 * Because the two are pinned to one duration constant, they cannot drift.
 */
function ProcessRail({
  title = "From Your Data to Their Mailbox",
  steps = PROCESS_STEPS,
  className,
}: ProcessRailProps) {
  const reduceMotion = useReducedMotion();

  /** Seconds before the line reaches the circle at `index`. */
  const arrivalDelay = (index: number) =>
    steps.length > 1 ? (index / (steps.length - 1)) * LINE_DURATION : 0;

  const lineVariants = {
    hidden: { scaleX: reduceMotion ? 1 : 0, scaleY: reduceMotion ? 1 : 0 },
    visible: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: reduceMotion ? 0 : LINE_DURATION,
        ease: EASE_ENGINEERED,
      },
    },
  };

  const nodeVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.4,
        delay: reduceMotion ? 0 : arrivalDelay(index),
        ease: EASE_ENGINEERED,
      },
    }),
  };

  return (
    <section className={cn("on-ink bg-ink py-24", className)}>
      <Container>
        <h2 className="text-center">{title}</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          /*
            `--rail-y` is the distance from the top of a step to its circle's
            centre: the 24px icon, its 16px margin, then half of the 56px
            circle. The horizontal line is pinned to it so the two stay aligned
            if the icon size ever changes.
          */
          className="relative mt-16 [--rail-y:68px]"
        >
          {/* Desktop: horizontal track, inset to the first and last centres. */}
          <div
            aria-hidden="true"
            className="absolute top-[var(--rail-y)] left-[10%] hidden h-px w-[80%] bg-growth/25 md:block"
          />
          <motion.div
            aria-hidden="true"
            variants={lineVariants}
            className="absolute top-[var(--rail-y)] left-[10%] hidden h-px w-[80%] origin-left bg-growth md:block"
          />

          {/* Mobile: vertical track down the centre of the circle column. */}
          <div
            aria-hidden="true"
            className="absolute top-7 bottom-7 left-7 w-px bg-growth/25 md:hidden"
          />
          <motion.div
            aria-hidden="true"
            variants={lineVariants}
            className="absolute top-7 bottom-7 left-7 w-px origin-top bg-growth md:hidden"
          />

          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.label}
                  className="flex gap-6 md:flex-col md:items-center md:gap-0 md:text-center"
                >
                  <motion.div
                    custom={index}
                    variants={nodeVariants}
                    className="flex shrink-0 flex-col items-center"
                  >
                    {/* Desktop only: the icon sits above the circle. */}
                    <Icon
                      className="mb-4 hidden size-6 text-growth md:block"
                      aria-hidden="true"
                    />
                    {/* `bg-ink` masks the track running behind the circle. */}
                    <span className="flex size-14 items-center justify-center rounded-full border-2 border-growth bg-ink font-heading text-lg font-bold text-white">
                      {index + 1}
                    </span>
                  </motion.div>

                  <motion.div custom={index} variants={nodeVariants} className="md:mt-6">
                    <h3 className="flex items-center gap-2 text-lg md:justify-center">
                      {/* Mobile only: the icon moves inline with the label. */}
                      <Icon
                        className="size-5 shrink-0 text-growth md:hidden"
                        aria-hidden="true"
                      />
                      {step.label}
                    </h3>
                    <p className="mt-2 text-sm">{step.detail}</p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </motion.div>
      </Container>
    </section>
  );
}

export { ProcessRail };
