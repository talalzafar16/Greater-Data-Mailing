import { services, serviceHref } from "@/data/services";
import { formattedAddress, site } from "@/data/site";

/**
 * LocalBusiness JSON-LD.
 *
 * Everything here reads from `site.ts`, so the structured data and the visible
 * NAP cannot disagree — which is the whole point: search engines cross-check
 * the two, and a mismatch costs local ranking.
 *
 * Still omitted: `aggregateRating` and `review`. No real reviews exist, and
 * fabricating them is both dishonest and a Google structured-data violation.
 */
function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.tagline,
    url: site.url,
    telephone: site.phone.href.replace("tel:", ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    /*
      TODO: verify these coordinates against the exact building.

      These are Deer Park, NY village-centre coordinates, not a geocode of 551
      Acorn Street — I had no geocoding available. They will place the pin in
      the right town but not necessarily on the right lot. Run the address
      through a geocoder and replace before launch.
    */
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7626,
      longitude: -73.3293,
    },
    /*
      TODO: confirm hours with client — same unverified values as /contact.
      These feed Google's knowledge panel, where people act on them and turn
      up at the door, so treat a correction here as urgent.
    */
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    // Schema.org expects a relative indicator, not a figure we would be held to.
    priceRange: "$$",
    areaServed: [
      { "@type": "Place", name: "Long Island, New York" },
      { "@type": "State", name: "New York" },
    ],
    knowsAbout: [
      "Direct mail",
      "Commercial printing",
      "USPS presort",
      "Mailing list hygiene",
      "Every Door Direct Mail",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Printing, mailing, and data services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: `${site.url}${serviceHref(service)}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Escaping `<` per the Next.js JSON-LD guide: it stops a literal
        // "</script>" in any future data value from closing the tag early.
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Breadcrumb + WebSite entities, kept separate for clarity. */
function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#business` },
    description: `${site.name} — ${formattedAddress}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Escaping `<` per the Next.js JSON-LD guide: it stops a literal
        // "</script>" in any future data value from closing the tag early.
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export { StructuredData, WebsiteSchema };
