import { createFileRoute } from "@tanstack/react-router";
import { HeroScrollSequence } from "../components/site/HeroScrollSequence";
import { Footer } from "../components/site/Footer";
import { IndustryGallery } from "../components/site/IndustryGallery";
import { AboutSection } from "../components/site/AboutSection";
import { ServicesSection } from "../components/site/ServicesSection";
import { ContactSection } from "../components/site/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aditya Enterprises — Precision Anodizing & Metal Finishing in Pune" },
      {
        name: "description",
        content:
          "Industrial-scale anodizing services in Pune: bright dip, hard anodising, chromating & glass bead blasting.",
      },
      { property: "og:title", content: "Aditya Enterprises — Anodizing in Pune" },
      {
        property: "og:description",
        content: "Anodized finishes engineered for the industries that build India.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-black">
      <HeroScrollSequence />
      <AboutSection />
      <ServicesSection />
      <IndustryGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
