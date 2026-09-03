import { HeroScrollSequence } from "../components/site/HeroScrollSequence";
import { Footer } from "../components/site/Footer";
import { IndustryGallery } from "../components/site/IndustryGallery";
import { AboutSection } from "../components/site/AboutSection";
import { ServicesSection } from "../components/site/ServicesSection";
import { ContactSection } from "../components/site/ContactSection";

export default function Index() {
  return (
    <main id="home" className="bg-black">
      <HeroScrollSequence />
      <AboutSection />
      <ServicesSection />
      <IndustryGallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
