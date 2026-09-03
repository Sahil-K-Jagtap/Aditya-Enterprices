import { Metadata } from "next";
import { ServiceContent } from "./service-content";
import { getServiceBySlug, servicesData } from "../../../lib/services-data";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceBySlug(id);
  
  return {
    title: service ? `${service.title} | Aditya Enterprises Pune` : "Service Not Found",
    description: service ? service.longDesc.slice(0, 160) : "Service not found.",
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ServiceContent id={id} />;
}
