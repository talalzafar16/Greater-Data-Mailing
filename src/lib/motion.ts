/**
 * Shared motion language.
 *
 * The curves here are all decelerating with no overshoot — motion should read
 * as engineered, not springy. Nothing in this file bounces on purpose; if a
 * component needs a different feel, change it here rather than locally so the
 * whole site stays in sync.
 */

/** easeOutQuint-ish. Fast start, long settle, no overshoot. */
export const EASE_ENGINEERED: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

/** easeOutExpo. Used where a value counts up and must not appear to hesitate. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Seconds. */
export const FADE_DURATION = 0.5;
export const COUNTER_DURATION = 1.6;
export const STAGGER_CHILDREN = 0.08;

/** Pixels a `FadeIn` travels upward as it resolves. */
export const FADE_DISTANCE = 24;

/**
 * Trigger the animation slightly before the element reaches the fold, so it has
 * finished by the time it is comfortably in view.
 */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

export const fadeVariants = {
  hidden: { opacity: 0, y: FADE_DISTANCE },
  visible: { opacity: 1, y: 0 },
};

/** Same states, no movement — for `prefers-reduced-motion: reduce`. */
export const staticVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};
