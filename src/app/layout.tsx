import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {
  StructuredData,
  WebsiteSchema,
} from "@/components/layout/structured-data";
import { fontVariables } from "@/lib/fonts";
import { shareImage } from "@/lib/metadata";
import { pageSeo } from "@/data/seo";
import { site } from "@/data/site";
import "./globals.css";

const { title, description } = pageSeo["/"];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  // No `alternates.canonical` here: every page would inherit it, declare itself a
  // homepage duplicate and drop out of the index. Each page sets its own.
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description,
    url: site.url,
    locale: "en_US",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": `US-${site.address.state}`,
    "geo.placename": site.address.city,
    "business:contact_data:street_address": site.address.street,
    "business:contact_data:locality": site.address.city,
    "business:contact_data:region": site.address.state,
    "business:contact_data:postal_code": site.address.zip,
    "business:contact_data:phone_number": site.phone.label,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {/* JSON-LD in the body per the Next.js guide; a manual <head> here can clash with injected metadata. */}
        <StructuredData />
        <WebsiteSchema />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <Header />

        <div id="main-content" className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
