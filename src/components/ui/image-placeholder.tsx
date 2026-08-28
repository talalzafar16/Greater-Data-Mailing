import * as React from "react";

import { cn } from "@/lib/utils";

interface ImagePlaceholderProps extends React.ComponentProps<"div"> {
  /**
   * Describes the photograph the client needs to supply. It becomes the
   * block's accessible name, so it is the same string the real `<Image>`
   * should carry as its `alt` once the photo exists.
   */
  alt: string;
}

/**
 * Stand-in for a photograph that hasn't been shot yet.
 *
 * `role="img"` plus a label means screen readers announce it exactly as they
 * would the finished image, and every placeholder on the site is swapped at
 * one seam rather than hunting for gradient divs.
 */
function ImagePlaceholder({ alt, className, ...props }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      data-slot="image-placeholder"
      className={cn(
        "bg-gradient-to-br from-ink via-ink to-growth",
        className
      )}
      {...props}
    />
  );
}

export { ImagePlaceholder };
