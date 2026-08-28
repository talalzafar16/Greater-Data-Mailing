"use client";

import * as React from "react";
import { motion } from "framer-motion";

import {
  EASE_ENGINEERED,
  FADE_DURATION,
  STAGGER_CHILDREN,
  VIEWPORT,
  fadeVariants,
  staticVariants,
} from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * True when a `FadeInStagger` is driving this subtree.
 *
 * A staggering parent animates its children by propagating variant *states*
 * down the tree. If a child also declared its own `whileInView`, it would
 * take over its own timing and the stagger would collapse — so children check
 * this and stay passive when a parent is in charge.
 */
const FadeInStaggerContext = React.createContext(false);

type FadeInProps = React.ComponentProps<typeof motion.div> & {
  /** Seconds to wait before this element resolves. Ignored inside a stagger. */
  delay?: number;
};

function FadeIn({ className, delay = 0, children, ...props }: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const isStaggered = React.useContext(FadeInStaggerContext);

  return (
    <motion.div
      data-slot="fade-in"
      variants={reduceMotion ? staticVariants : fadeVariants}
      transition={{
        duration: reduceMotion ? 0 : FADE_DURATION,
        ease: EASE_ENGINEERED,
        delay: reduceMotion ? 0 : delay,
      }}
      {...(isStaggered
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: VIEWPORT,
          })}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveals its `FadeIn` descendants one after another, 0.08s apart.
 */
function FadeInStagger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  const reduceMotion = useReducedMotion();

  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        data-slot="fade-in-stagger"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        transition={{ staggerChildren: reduceMotion ? 0 : STAGGER_CHILDREN }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}

export { FadeIn, FadeInStagger };
