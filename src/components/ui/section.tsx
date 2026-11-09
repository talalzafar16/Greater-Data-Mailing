import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Container } from "./container";

// `on-light`/`on-ink` set the inherited heading and body colours (see globals.css).
const sectionVariants = cva("section-y", {
  variants: {
    variant: {
      white: "on-light bg-white",
      paper: "on-light bg-paper",
      ink: "on-ink bg-ink",
    },
  },
  defaultVariants: {
    variant: "white",
  },
});

interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {
  /** Applied to the inner `Container`, e.g. to narrow the measure. */
  containerClassName?: string;
}

function Section({
  className,
  containerClassName,
  variant = "white",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      data-variant={variant}
      className={cn(sectionVariants({ variant }), className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export { Section, sectionVariants };
