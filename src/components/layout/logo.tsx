import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/** Intrinsic size of `public/logo-mark.png`, needed by `next/image`. */
const MARK_WIDTH = 400;
const MARK_HEIGHT = 273;

/**
 * Brand lockup — the logo mark beside the company name and descriptor.
 *
 * Only the *mark* is used, not the full stacked logo with its serif wordmark:
 * at an 80px header height that wordmark would be unreadable, and its serif
 * type fights General Sans. Pairing the mark with the site's own typography
 * keeps it legible and on-system.
 *
 * Text colours come from the inherited surface variables, so the same component
 * reads navy-on-white in the header and white-on-navy in the footer with no
 * variant prop.
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
      className={cn("flex items-center gap-3", className)}
    >
      <Image
        src="/logo-mark.png"
        // Decorative: the adjacent text and the link's aria-label already name
        // the company, so announcing it a third time is just noise.
        alt=""
        width={MARK_WIDTH}
        height={MARK_HEIGHT}
        priority
        className="h-10 w-auto shrink-0"
      />

      <span className="flex flex-col justify-center leading-none">
        <span className="font-heading text-lg font-bold tracking-tight text-[color:var(--heading-color)]">
          {site.name}
        </span>
        <span className="mt-1 text-[11px] leading-none tracking-wide">
          {site.descriptor}
        </span>
      </span>
    </Link>
  );
}

export { Logo };
