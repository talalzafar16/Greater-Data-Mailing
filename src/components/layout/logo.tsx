import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/** Intrinsic size of `public/logo-mark.png`, needed by `next/image`. */
const MARK_WIDTH = 400;
const MARK_HEIGHT = 273;

/** Uses only the logo mark, not the full stacked logo, whose wordmark is unreadable at header size. */
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
        // Decorative: the link's aria-label already names the company.
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
