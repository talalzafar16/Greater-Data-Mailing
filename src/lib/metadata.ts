import type { Metadata } from "next";

import { pageSeo, type PageSeoKey } from "@/data/seo";
import { site } from "@/data/site";

// Set on every page explicitly: a page's own `openGraph` object replaces the inherited one, image included.
export const shareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name}: data-driven direct mail, printed and mailed under one roof. Deer Park, NY.`,
};

// Builds a page's full metadata from one `seo.ts` key. Titles use `absolute` so the
// layout's `%s | Name` template doesn't double-append the company name.
export function buildMetadata(key: PageSeoKey): Metadata {
  const { title, description } = pageSeo[key];
  const path = key === "notFound" ? "/404" : key;
  const url = `${site.url}${path === "/" ? "" : path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url,
      locale: "en_US",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}
