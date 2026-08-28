"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/nav";

/**
 * Shared shape for a top-level nav item. The 2px underline is an `::after`
 * so it never affects layout — inactive and active items sit on the same
 * baseline.
 */
/*
  The shadcn nav-menu styles paint a muted background on hover, focus and open.
  `twMerge` drops the plain-state ones, but the compound state variants
  (`data-active:hover:…`, `data-open:hover:…`) are distinct keys that survive
  the merge and outrank a bare `hover:` rule — so each is neutralised by name.
*/
const navItemClass =
  "relative flex h-10 items-center rounded-lg bg-transparent px-3 text-[15px] font-medium text-slate transition-colors hover:bg-transparent hover:text-ink focus:bg-transparent data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent";

const navItemActiveClass =
  "text-ink after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-growth";

/** `/services/printing` should light up "Services"; only `/` matches exactly. */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    // `viewport={false}` renders each panel in place instead of inside a
    // shared, content-sized viewport — which is what lets the Services panel
    // be a fixed-width grid rather than a narrow list.
    <NavigationMenu viewport={false} className={className}>
      <NavigationMenuList className="gap-1">
        {mainNav.map((item) => {
          const active = isActivePath(pathname, item.href);

          if (!item.children) {
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  active={active}
                  className={cn(navItemClass, active && navItemActiveClass)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuTrigger
                className={cn(navItemClass, active && navItemActiveClass)}
              >
                {item.label}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="left-1/2 w-[640px]! -translate-x-1/2 rounded-xl p-0">
                <ul className="grid grid-cols-2 gap-2 p-4">
                  {item.children.map((child) => {
                    const Icon = child.icon;

                    return (
                      <li key={child.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={child.href}
                            className="group/panel flex h-full items-start gap-4 rounded-lg p-4 transition-colors hover:bg-paper"
                          >
                            {Icon ? (
                              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-growth/10 text-growth-text">
                                <Icon className="size-5" aria-hidden="true" />
                              </span>
                            ) : null}

                            <span className="flex flex-col gap-1">
                              <span className="font-heading text-[15px] font-semibold text-ink">
                                {child.label}
                              </span>
                              {child.description ? (
                                <span className="text-[13px] leading-snug text-slate">
                                  {child.description}
                                </span>
                              ) : null}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { DesktopNav };
