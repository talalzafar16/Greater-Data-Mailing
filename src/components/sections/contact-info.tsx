import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { MapEmbed } from "@/components/ui/map-embed";
import { site } from "@/data/site";

// TODO: confirm hours with client
const HOURS = "Monday – Friday, 8:30am – 5:00pm";

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span
        aria-hidden="true"
        className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-growth/10 text-growth"
      >
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-sm text-slate">{label}</p>
        <div className="mt-1 text-base text-ink">{children}</div>
      </div>
    </div>
  );
}

const linkClass = "transition-colors hover:text-growth";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="on-light rounded-xl border border-border bg-white p-6 sm:p-8">
        <h2 className="text-2xl">Reach us directly</h2>

        <div className="mt-8 flex flex-col gap-6">
          <InfoRow icon={MapPin} label="Address">
            <address className="not-italic">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
          </InfoRow>

          <InfoRow icon={Phone} label="Phone">
            <a href={site.phone.href} className={linkClass}>
              {site.phone.label}
            </a>
          </InfoRow>

          <InfoRow icon={Smartphone} label="Cell">
            <a href={site.cell.href} className={linkClass}>
              {site.cell.label}
            </a>
          </InfoRow>

          <InfoRow icon={Mail} label="Email">
            <a href={site.emailHref} className={`${linkClass} break-all`}>
              {site.email}
            </a>
          </InfoRow>

          <InfoRow icon={Clock} label="Business hours">
            {HOURS}
          </InfoRow>
        </div>

        <div className="mt-8 rounded-lg bg-growth/10 p-5">
          <p className="text-base text-ink">
            Prefer to talk it through? Call{" "}
            <a
              href={site.phone.href}
              className="font-semibold text-growth underline underline-offset-4"
            >
              {site.phone.label}
            </a>
            .
          </p>
        </div>
      </div>

      <MapEmbed className="h-72 rounded-xl border border-border" />
    </div>
  );
}

export { ContactInfo };
