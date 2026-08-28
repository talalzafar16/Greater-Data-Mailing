"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scrolled";
import { navCta } from "@/data/nav";
import { site } from "@/data/site";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";

function Header() {
  const scrolled = useScrolled();

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "sticky top-0 z-50 h-20",
        // Only the paint changes on scroll — height and layout stay fixed, so
        // nothing below the header shifts as it solidifies.
        "border-b transition-[background-color,border-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "border-border bg-white shadow-lift-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-full items-center justify-between gap-8">
        <Logo />

        <DesktopNav className="hidden lg:flex" />

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={site.phone.href}
            className="flex items-center gap-2 text-[15px] font-medium text-ink transition-colors hover:text-growth-text"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone.label}
          </a>

          <Button asChild size="sm">
            <Link href={navCta.href}>{navCta.label}</Link>
          </Button>
        </div>

        <MobileNav className="lg:hidden" />
      </Container>
    </header>
  );
}

export { Header };
