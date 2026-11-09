import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetail } from "@/components/sections/service-detail";
import { buildMetadata } from "@/lib/metadata";
import type { PageSeoKey } from "@/data/seo";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  // Each service page has its own entry in `seo.ts`, keyed by route.
  return buildMetadata(`/services/${service.slug}` as PageSeoKey);
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
