import * as React from "react";

import { cn } from "@/lib/utils";

/** Site horizontal measure; the values live in the `container-page` utility in globals.css. */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="container" className={cn("container-page", className)} {...props} />
  );
}

export { Container };
