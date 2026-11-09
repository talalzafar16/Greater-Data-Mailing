"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";

import { COUNTER_DURATION, EASE_OUT, VIEWPORT } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AnimatedCounterProps
  extends Omit<React.ComponentProps<"span">, "children"> {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  ...props
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, VIEWPORT);
  const reduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = React.useState(0);

  React.useEffect(() => {
    if (!isInView || reduceMotion) return;

    const controls = animate(0, value, {
      duration: COUNTER_DURATION,
      ease: EASE_OUT,
      onUpdate: setDisplayed,
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, value]);

  // With reduced motion, derive the final value during render rather than setting state in an effect.
  const shown = reduceMotion ? value : displayed;

  const format = (n: number) =>
    `${prefix}${n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  return (
    <span ref={ref} data-slot="animated-counter" className={className} {...props}>
      {/* Ticking digits are aria-hidden; screen readers get the final value once. */}
      <span aria-hidden="true" className="tabular-nums">
        {format(shown)}
      </span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}

export { AnimatedCounter };
