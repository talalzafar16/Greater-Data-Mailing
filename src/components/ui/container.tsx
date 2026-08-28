import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The site's horizontal measure: 1280px max, centred, 24px gutter.
 *
 * The values live in the `container-page` utility in `globals.css` so the CSS
 * and the component cannot drift apart. Equivalent to
 * `max-w-[1280px] mx-auto px-6`.
 */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="container" className={cn("container-page", className)} {...props} />
  );
}

export { Container };
