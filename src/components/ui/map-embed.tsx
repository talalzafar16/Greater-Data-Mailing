import { cn } from "@/lib/utils";
import { formattedAddress, site } from "@/data/site";

interface MapEmbedProps {
  className?: string;
  /** Navy tint over the map, 0–100. Set to 0 to show the map untinted. */
  tintOpacity?: number;
}

/**
 * Google Maps embed for the Deer Park plant.
 *
 * Uses the keyless `output=embed` endpoint, so there is no API key to manage.
 * The address comes from `site.ts`, keeping the pin and the printed NAP in
 * sync.
 */
function MapEmbed({ className, tintOpacity = 15 }: MapEmbedProps) {
  const query = encodeURIComponent(`${site.name}, ${formattedAddress}`);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <iframe
        title={`Map showing ${site.name} at ${formattedAddress}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0 grayscale-[35%]"
      />
      {tintOpacity > 0 ? (
        // Tint only — `pointer-events-none` keeps the map draggable.
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink"
          style={{ opacity: tintOpacity / 100 }}
        />
      ) : null}
    </div>
  );
}

export { MapEmbed };
