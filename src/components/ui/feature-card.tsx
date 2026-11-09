import * as React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { IconBox } from "./icon-box";

/** Shared hover-lift card styles; only the translate is gated behind `motion-safe`. */
export const interactiveCardClass =
  "on-light rounded-xl border border-border bg-white transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-growth hover:shadow-lift motion-safe:hover:-translate-y-1";

interface FeatureCardProps extends Omit<React.ComponentProps<"div">, "title"> {
  icon?: LucideIcon;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional call to action pinned to the bottom of the card. */
  link?: { label: string; href: string };
}

function FeatureCard({
  icon,
  title,
  description,
  link,
  className,
  children,
  ...props
}: FeatureCardProps) {
  return (
    <div
      data-slot="feature-card"
      className={cn(
        "group flex flex-col p-8",
        interactiveCardClass,
        className
      )}
      {...props}
    >
      {icon ? <IconBox icon={icon} className="mb-6" /> : null}

      <h3>{title}</h3>

      {description ? <p className="mt-3">{description}</p> : null}

      {children}

      {link ? (
        <Button
          asChild
          variant="link"
          // `mt-auto` pins the CTA to the bottom so cards in a grid line up.
          className="mt-auto self-start pt-6 group-hover:[&_svg]:translate-x-1"
        >
          <Link href={link.href}>
            {link.label}
            <ArrowRight />
          </Link>
        </Button>
      ) : null}
    </div>
  );
}

export { FeatureCard };
