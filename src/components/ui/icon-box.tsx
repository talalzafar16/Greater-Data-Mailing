import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconBoxProps extends React.ComponentProps<"div"> {
  icon: LucideIcon;
}

/** 48px tinted square holding a 24px green lucide icon. */
function IconBox({ icon: Icon, className, ...props }: IconBoxProps) {
  return (
    <div
      data-slot="icon-box"
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-xl bg-growth/10 text-growth-text",
        className
      )}
      {...props}
    >
      <Icon className="size-6" strokeWidth={2} aria-hidden="true" />
    </div>
  );
}

export { IconBox };
