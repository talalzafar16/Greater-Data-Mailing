import type { Metadata } from "next";

import { pageSeo, type PageSeoKey } from "@/data/seo";
import { site } from "@/data/site";

/**
 * Builds a page's full metadata from one `seo.ts` key.
 *
 * Every page needs the same six things — title, description, canonical, Open
 * Graph, Twitter card, and a matching og:url — and getting any of them subtly
 * wrong per page is exactly the kind of drift that goes unnoticed. Deriving
 * them all from a single key keeps the tags consistent and means the copy is
 * edited in one place.
 *
 * `title` is passed through `absolute` so the layout's `%s | Name` template
 * does not double-append the company name to titles that already contain it.
 */
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
