import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactInfo } from "@/components/sections/contact-info";
import { QuoteForm } from "@/components/sections/quote-form";
import { contactCopy } from "@/data/copy";

export const metadata: Metadata = buildMetadata("/contact");

export default function ContactPage() {
  return (
    <main className="on-light bg-paper">
      <Container className="py-16 md:py-24">
        <FadeIn className="max-w-3xl">
          <h1>{contactCopy.title}</h1>
          <p className="mt-6 text-xl">
            {contactCopy.subtitle}
          </p>
        </FadeIn>

        {/*
          Form first in the DOM so it is also first on mobile, where the grid
          collapses to a single column — and first for keyboard and screen
          reader users on every viewport.
        */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-7">
            <QuoteForm />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <ContactInfo />
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
