import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

interface CTABandProps extends React.ComponentProps<"section"> {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

function CTABand({
  title = "Ready to get your next campaign in the mail?",
  subtitle = "Tell us about the job — print, data, postage — and we'll come back with a quote, usually within one business day.",
  buttonText = "Request a Quote",
  buttonHref = "/contact",
  className,
  ...props
}: CTABandProps) {
  return (
    <section className={cn("bg-growth py-20", className)} {...props}>
      <Container className="flex flex-col items-center text-center">
        {/* Explicit colours: the band is green, so neither surface applies. */}
        <h2 className="max-w-3xl text-white">{title}</h2>

        {subtitle ? (
          <p className="mt-6 max-w-2xl text-lg text-white/85">{subtitle}</p>
        ) : null}

        <Button
          asChild
          size="lg"
          className="mt-10 bg-white text-ink hover:bg-white/90"
        >
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>

        <p className="mt-6 text-base text-white/85">
          or call{" "}
          <a
            href={site.phone.href}
            className="font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            {site.phone.label}
          </a>
        </p>
      </Container>
    </section>
  );
}

export { CTABand };
