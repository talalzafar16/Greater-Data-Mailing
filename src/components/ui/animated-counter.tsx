"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";

import { COUNTER_DURATION, EASE_OUT, VIEWPORT } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AnimatedCounterProps
  extends Omit<React.ComponentProps<"span">, "children"> {
  /** The number to count up to. */
  value: number;
  /** Rendered before the number, e.g. "$". */
  prefix?: string;
  /** Rendered after the number, e.g. "+", "M", "%". */
  suffix?: string;
  /** Decimal places to hold steady while counting. */
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

  // Reduced motion never animates, so the settled value is derived during
  // render rather than pushed through state from an effect.
  const shown = reduceMotion ? value : displayed;

  const format = (n: number) =>
    `${prefix}${n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  return (
    <span ref={ref} data-slot="animated-counter" className={className} {...props}>
      {/*
        The ticking text is hidden from assistive tech — announcing every frame
        would be noise. Screen readers get the settled value once instead.
        `tabular-nums` stops the digits reflowing as they change width.
      */}
      <span aria-hidden="true" className="tabular-nums">
        {format(shown)}
      </span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}

export { AnimatedCounter };
