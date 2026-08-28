import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    // `size` is declared before `variant` so variant classes win in `twMerge`.
    // That lets `link` shed the height and padding a sized button would apply.
    variants: {
      size: {
        default: "h-12 gap-2 px-6 text-base",
        xs: "h-8 gap-1 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-2 px-4 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-14 gap-2 px-8 text-lg",
        icon: "size-12",
        "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
      variant: {
        /**
         * Growth green fill. Uses `--growth-deep`, not `--growth`: white text
         * on #16a34a measures 3.30:1, under the AA floor. #15803d is 5.02:1.
         */
        primary:
          "bg-growth-deep text-white hover:bg-growth-deep-hover hover:-translate-y-px hover:shadow-lift-sm",
        /** Navy outline on a transparent fill; hover floods navy. */
        secondary:
          "border-ink bg-transparent text-ink hover:bg-ink hover:text-white aria-expanded:bg-ink aria-expanded:text-white",
        /**
         * Green text; any icon child slides 4px right on hover. The colour is
         * surface-aware via `--growth-text`, so it stays legible on white,
         * paper and ink alike. The arrow slide is the hover affordance, so no
         * colour shift is needed on top of it.
         */
        link: "h-auto gap-2 rounded-none p-0 text-base text-growth-text [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-1 hover:underline underline-offset-4",
        outline:
          "border-border bg-background text-ink hover:border-ink/20 hover:bg-paper aria-expanded:bg-paper",
        ghost:
          "text-ink hover:bg-paper aria-expanded:bg-paper",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
