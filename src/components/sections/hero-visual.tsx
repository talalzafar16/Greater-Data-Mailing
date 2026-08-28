"use client";

import { motion } from "framer-motion";

import { EASE_ENGINEERED } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Settles the hero image from 1.03 to 1 on load.
 *
 * `animate` rather than `whileInView` — the hero is above the fold, so it
 * should resolve on arrival instead of waiting for an intersection that has
 * already happened.
 */
function HeroVisual({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { scale: 1.03 }}
      animate={{ scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: EASE_ENGINEERED }}
      className={cn("origin-center", className)}
    >
      {children}
    </motion.div>
  );
}

export { HeroVisual };
