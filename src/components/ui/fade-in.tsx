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

/** True inside a `FadeInStagger`; children then skip their own `whileInView`, which would break the stagger. */
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
