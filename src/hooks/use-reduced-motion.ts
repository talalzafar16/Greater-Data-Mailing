"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * `prefers-reduced-motion` as a definite boolean.
 *
 * Framer's hook returns `null` until it has read the media query — during SSR
 * and on the very first client render. Components want to branch on a boolean,
 * so unknown is treated as "motion allowed" and corrects itself on hydration.
 * Every animated primitive in `components/ui` goes through this.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
