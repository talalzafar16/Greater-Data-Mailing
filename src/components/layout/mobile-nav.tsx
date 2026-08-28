"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { mainNav, navCta } from "@/data/nav";
import { site } from "@/data/site";
import { isActivePath } from "./desktop-nav";

function MobileNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Every link is wrapped in `SheetClose`, which dismisses the sheet on click —
  // so navigation never leaves the menu covering the page it just opened.

  const linkClass = (active: boolean) =>
    cn(
      "block rounded-lg py-2 text-xl font-medium transition-colors",
      active ? "text-growth-text" : "text-ink hover:text-growth-text"
    );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/*
        Radix supplies aria-haspopup, aria-expanded and aria-controls on the
        trigger, and SheetTitle names the dialog — only the icon button needs
        an accessible label of its own.
      */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={className}
          aria-label="Open navigation menu"
        >
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-b border-border p-6 text-left">
          <SheetTitle className="font-heading text-lg font-bold text-ink">
            {site.name}
          </SheetTitle>
          <SheetDescription className="text-[13px]">
            {site.descriptor}
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto p-6">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);

              if (!item.children) {
                return (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={linkClass(active)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue={active ? item.href : undefined}
                  >
                    <AccordionItem value={item.href} className="border-b-0">
                      <AccordionTrigger
                        className={cn(
                          "py-2 text-xl font-medium hover:no-underline",
                          active ? "text-growth-text" : "text-ink"
                        )}
                      >
                        {item.label}
                      </AccordionTrigger>

                      {/* AccordionContent underlines nested links by default. */}
                      <AccordionContent className="pb-2 [&_a]:no-underline!">
                        <ul className="flex flex-col gap-1 border-l border-border pl-4">
                          <li>
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className="block py-2 text-base text-slate transition-colors hover:text-growth-text"
                              >
                                All {item.label}
                              </Link>
                            </SheetClose>
                          </li>

                          {item.children.map((child) => (
                            <li key={child.href}>
                              <SheetClose asChild>
                                <Link
                                  href={child.href}
                                  aria-current={
                                    isActivePath(pathname, child.href)
                                      ? "page"
                                      : undefined
                                  }
                                  className={cn(
                                    "block py-2 text-base transition-colors hover:text-growth-text",
                                    isActivePath(pathname, child.href)
                                      ? "text-growth-text"
                                      : "text-slate"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              );
            })}
          </ul>
        </nav>

        <SheetFooter className="gap-4 border-t border-border p-6">
          <SheetClose asChild>
            <Button asChild size="lg" className="w-full">
              <Link href={navCta.href}>{navCta.label}</Link>
            </Button>
          </SheetClose>

          <a
            href={site.phone.href}
            className="flex items-center justify-center gap-2 text-base font-medium text-ink transition-colors hover:text-growth-text"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone.label}
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export { MobileNav };
