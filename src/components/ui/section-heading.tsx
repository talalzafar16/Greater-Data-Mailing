import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps extends Omit<React.ComponentProps<"div">, "title"> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      data-slot="section-heading"
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="font-heading text-xs font-semibold tracking-[0.1em] text-growth-text uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h2 className={cn(eyebrow && "mt-4")}>{title}</h2>

      {/*
        No colour utility here on purpose: the subtitle inherits the surface's
        body colour — slate on white/paper, white at 70% on ink.
      */}
      {subtitle ? (
        <p className="mt-6 max-w-[60ch] text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
