import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/site/Footer";
import { ServicesSection } from "../components/site/ServicesSection";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Anodizing, Chromating & Blasting | Aditya Enterprises Pune" },
      {
        name: "description",
        content:
          "Aluminium anodising, bright dip, hard anodising, chromating and glass bead blasting services in Pune.",
      },
      { property: "og:title", content: "Aditya Enterprises Services" },
      {
        property: "og:description",
        content: "Full-stack aluminium finishing services in Pune.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <main className="bg-black pt-24">
      <ServicesSection />
      <Footer />
    </main>
  );
}