import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * Brand lockup — company name over the capability descriptor.
 *
 * Colours come from the inherited surface variables rather than fixed
 * utilities, so the same component reads navy-on-white in the header and
 * white-on-navy in the footer with no variant prop.
 */
function Logo({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      aria-label={`${site.name} — home`}
      {...props}
      href="/"
      className={cn(
        "flex flex-col justify-center leading-none",
        "rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <span className="font-heading text-lg font-bold tracking-tight text-[color:var(--heading-color)]">
        {site.name}
      </span>
      <span className="mt-1 text-[11px] leading-none tracking-wide">
        {site.descriptor}
      </span>
    </Link>
  );
}

export { Logo };
