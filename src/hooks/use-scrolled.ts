"use client";

import * as React from "react";

/** Pixels of scroll before the header commits to its solid state. */
const SCROLL_THRESHOLD = 20;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getSnapshot() {
  return window.scrollY > SCROLL_THRESHOLD;
}

/** The server has no scroll position; assume the top of the page. */
function getServerSnapshot() {
  return false;
}

/**
 * True once the page has scrolled past {@link SCROLL_THRESHOLD}.
 *
 * `useSyncExternalStore` rather than `useState` + an effect: it reads the real
 * scroll position on the first client render (so a page restored mid-scroll
 * paints the solid header immediately, with no flash of the transparent one)
 * and it keeps the subscription out of an effect entirely.
 */
export function useScrolled(): boolean {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
