import type { MetadataRoute } from "next";

import { serviceHref, services } from "@/data/services";
import { site } from "@/data/site";

/** Static routes are listed by hand; service pages are derived from `services.ts`. */
export default function sitemap(): MetadataRoute.Sitemap {
  // Build time, not request time — this route stays statically generated.
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/industries", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}${serviceHref(service)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
