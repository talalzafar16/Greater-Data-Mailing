import { services, serviceHref } from "@/data/services";
import { formattedAddress, site } from "@/data/site";

// LocalBusiness JSON-LD. Values read from site.ts so they stay in sync with the visible NAP.
// No aggregateRating/review: there are no real reviews, and fake ones violate Google's rules.
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7626,
      longitude: -73.3293,
    },
    // Must match `contactCopy.hours` in data/copy.ts; change both together.
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
        // Escape `<` so a "</script>" in a data value can't close the tag early.
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

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
        // Escape `<` so a "</script>" in a data value can't close the tag early.
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export { StructuredData, WebsiteSchema };
