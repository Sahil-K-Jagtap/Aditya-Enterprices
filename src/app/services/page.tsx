import { Metadata } from "next";
import { Footer } from "../../components/site/Footer";
import { ServicesSection } from "../../components/site/ServicesSection";

export const metadata: Metadata = {
  title: "Services — Anodizing, Chromating & Blasting | Aditya Enterprises Pune",
  description: "Aluminium anodising, bright dip, hard anodising, chromating and glass bead blasting services in Pune.",
};

export default function ServicesPage() {
  return (
    <main className="bg-black pt-24">
      <ServicesSection />
      <Footer />
    </main>
  );
}
