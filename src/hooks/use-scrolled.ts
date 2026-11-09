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

function getServerSnapshot() {
  return false;
}

// useSyncExternalStore (not useState + effect) reads the real scroll position on first
// render, so a page restored mid-scroll shows the solid header with no flash.
export function useScrolled(): boolean {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
