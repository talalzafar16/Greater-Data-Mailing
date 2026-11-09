"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

// Framer returns null before reading the media query (SSR, first render); treat that as motion allowed.
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
