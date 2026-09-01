import anodising from "../assets/service-anodising.jpg";
import brightdip from "../assets/service-brightdip.jpg";
import hardanodising from "../assets/service-hardanodising.jpg";
import chromating from "../assets/service-chromating.jpg";
import blasting from "../assets/service-blasting.jpg";

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  video: string;
  gallery: string[];
  processSteps: { step: string; detail: string }[];
  benefits: { title: string; desc: string }[];
  applications: string[];
  specs: { label: string; value: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "anodising",
    title: "Aluminium Anodising Coating",
    tagline: "The gold standard of aluminium surface protection",
    shortDesc:
      "Type II sulfuric anodizing — decorative and corrosion protection from 8–25 microns.",
    longDesc:
      "Anodising is an electrochemical process that converts the aluminium surface into a durable, corrosion-resistant oxide finish. Unlike paint or plating, the coating becomes part of the metal itself, so it will never peel, chip or flake. The result is a uniform, hard surface that resists scratches, UV degradation and chemical attack — making your components last decades longer in demanding environments.",
    image: anodising,
    video: "/videos/anodising.mp4",
    gallery: [
      "/gallery/anodising_1.png",
      "/gallery/anodising_2.png",
      "/gallery/anodising_3.png",
      "/gallery/anodising_4.png",
    ],
    processSteps: [
      {
        step: "Cleaning & Degreasing",
        detail:
          "Parts are chemically cleaned to remove oils, dirt and surface contaminants.",
      },
      {
        step: "Etching",
        detail:
          "A controlled alkaline etch creates a uniform, matte base surface.",
      },
      {
        step: "Anodising Bath",
        detail:
          "Parts are submerged in a sulfuric acid electrolyte and a controlled electrical current grows the oxide layer.",
      },
      {
        step: "Colouring (Optional)",
        detail:
          "Electrolytic or dip dyeing infuses colour into the porous oxide layer before sealing.",
      },
      {
        step: "Sealing",
        detail:
          "Hot water or nickel acetate sealing locks in the finish for maximum durability.",
      },
    ],
    benefits: [
      {
        title: "Corrosion Resistance",
        desc: "The anodic layer acts as a permanent barrier against moisture, salt spray and chemicals.",
      },
      {
        title: "Scratch Hardness",
        desc: "Hardness up to 300 HV — significantly tougher than raw aluminium.",
      },
      {
        title: "Colour Stability",
        desc: "Dyed finishes resist UV fading for years, even in outdoor installations.",
      },
      {
        title: "Eco-Friendly",
        desc: "No heavy metals or VOCs — the process is fully RoHS and REACH compliant.",
      },
    ],
    applications: [
      "Architectural facades & curtain walls",
      "Automotive trim & interior parts",
      "Consumer electronics enclosures",
      "Furniture & interior design fittings",
      "Electrical switchgear housings",
    ],
    specs: [
      { label: "Coating Thickness", value: "8 – 25 microns" },
      { label: "Hardness", value: "250 – 300 HV" },
      { label: "Colour Options", value: "Clear, black, bronze, gold, custom" },
      { label: "Standard", value: "IS 1868 / MIL-A-8625 Type II" },
    ],
  },
  {
    slug: "brightdip",
    title: "Bright Dip Anodizing",
    tagline: "Mirror-bright, chrome-like brilliance without chrome",
    shortDesc:
      "Chemical polishing followed by anodizing for a mirror-bright, chrome-like finish.",
    longDesc:
      "Bright dip anodizing combines a chemical brightening step with conventional anodizing to produce a highly reflective, mirror-like finish on aluminium. The process smooths microscopic surface irregularities, giving your parts a premium chrome-like lustre that catches the eye instantly. Unlike chrome plating, bright dip anodizing is environmentally safer, lighter in weight and bonds permanently to the aluminium substrate.",
    image: brightdip,
    video: "/videos/brightdip-texture.mp4",
    gallery: [
      "/gallery/brightdip_1.png",
      "/gallery/brightdip_2.png",
      "/gallery/brightdip_3.png",
      "/gallery/brightdip_4.png",
    ],
    processSteps: [
      {
        step: "Pre-cleaning",
        detail:
          "Thorough degreasing removes all surface contaminants for an even finish.",
      },
      {
        step: "Chemical Brightening",
        detail:
          "A phosphoric-nitric acid bath dissolves micro-peaks on the surface, creating optical-level smoothness.",
      },
      {
        step: "Anodising",
        detail:
          "Sulfuric acid anodizing builds a transparent protective oxide layer over the polished surface.",
      },
      {
        step: "Sealing",
        detail:
          "The porous oxide is sealed to lock in the mirror finish permanently.",
      },
    ],
    benefits: [
      {
        title: "Mirror Finish",
        desc: "Achieves up to 85% specular reflectance — rivalling polished chrome.",
      },
      {
        title: "Lightweight",
        desc: "No added weight from plating layers — ideal for weight-sensitive applications.",
      },
      {
        title: "Permanent Bond",
        desc: "The finish is part of the metal itself — it cannot peel or delaminate.",
      },
      {
        title: "Corrosion Protected",
        desc: "The anodic layer underneath the bright surface guards against environmental attack.",
      },
    ],
    applications: [
      "Premium consumer electronics",
      "Automotive decorative trim",
      "Reflectors & lighting components",
      "High-end furniture hardware",
      "Jewellery & luxury accessories",
    ],
    specs: [
      { label: "Reflectance", value: "Up to 85% specular" },
      { label: "Coating Thickness", value: "10 – 20 microns" },
      { label: "Surface Finish", value: "Ra < 0.2 µm" },
      { label: "Standard", value: "IS 1868 / MIL-A-8625 Type II" },
    ],
  },
  {
    slug: "hardanodising",
    title: "Aluminium Hard Anodising",
    tagline: "Engineered for extreme wear and heavy-duty performance",
    shortDesc:
      "Type III thick-film coating up to 60 microns for wear-critical, high-load parts.",
    longDesc:
      "Hard anodising (Type III) produces an exceptionally thick, dense oxide layer that transforms aluminium into a surface almost as hard as tool steel. This process is specifically designed for components that face extreme mechanical wear, high temperatures and aggressive chemical environments. If your parts need to survive heavy-duty industrial use without failure, hard anodising is the answer.",
    image: hardanodising,
    video: "/videos/hardanodising.mp4",
    gallery: [
      "/gallery/hardanodising_1.png",
      "/gallery/hardanodising_2.png",
      "/gallery/hardanodising_3.png",
      "/gallery/hardanodising_4.png",
    ],
    processSteps: [
      {
        step: "Precision Cleaning",
        detail:
          "Multi-stage cleaning ensures absolute surface purity for uniform coating growth.",
      },
      {
        step: "Low-Temperature Anodising",
        detail:
          "Parts are anodised in chilled sulfuric acid at near-zero temperatures for maximum density.",
      },
      {
        step: "Controlled Current Ramping",
        detail:
          "Current is gradually increased to build thickness without cracking or burning.",
      },
      {
        step: "Post-Treatment",
        detail:
          "Optional PTFE impregnation or sealing to add lubricity or corrosion resistance.",
      },
    ],
    benefits: [
      {
        title: "Extreme Hardness",
        desc: "Up to 70 HRC equivalent — approaching the hardness of industrial ceramics.",
      },
      {
        title: "Wear Resistance",
        desc: "Withstands thousands of hours of abrasive contact without degradation.",
      },
      {
        title: "Thermal Insulation",
        desc: "The thick oxide layer acts as an effective thermal barrier up to 2000°C flash.",
      },
      {
        title: "Dielectric Strength",
        desc: "Excellent electrical insulation properties for high-voltage components.",
      },
    ],
    applications: [
      "Hydraulic cylinders & pneumatic pistons",
      "Textile machinery rollers",
      "Defence & aerospace components",
      "Pump housings & valve bodies",
      "Injection mould tooling",
    ],
    specs: [
      { label: "Coating Thickness", value: "25 – 60 microns" },
      { label: "Hardness", value: "400 – 600 HV (60–70 HRC)" },
      { label: "Wear Rate", value: "< 3.5 mg / 1000 cycles (Taber)" },
      { label: "Standard", value: "MIL-A-8625 Type III" },
    ],
  },
  {
    slug: "chromating",
    title: "Aluminium Chromating",
    tagline: "The essential pre-treatment for paint adhesion and protection",
    shortDesc:
      "Alodine / conversion coating for paint adhesion and light corrosion resistance.",
    longDesc:
      "Chromating (also known as chemical conversion coating or Alodine treatment) creates a thin, protective chromate film on aluminium surfaces. This process is widely used as a pre-treatment before painting or powder coating because it dramatically improves paint adhesion and provides a baseline layer of corrosion resistance. It is also used as a standalone finish where lightweight protection is sufficient.",
    image: chromating,
    video: "/videos/chromating-texture.mp4",
    gallery: [
      "/gallery/chromating_1.png",
      "/gallery/chromating_2.png",
      "/gallery/chromating_3.png",
      "/gallery/chromating_4.png",
    ],
    processSteps: [
      {
        step: "Alkaline Cleaning",
        detail:
          "Removes oils and oxides to expose a chemically active aluminium surface.",
      },
      {
        step: "De-oxidising",
        detail:
          "Acid-based de-oxidiser removes the natural oxide layer for uniform coating.",
      },
      {
        step: "Chromate Immersion",
        detail:
          "Parts are dipped into a chromate solution which reacts with the aluminium to form a protective film.",
      },
      {
        step: "Rinse & Dry",
        detail:
          "Careful rinsing and controlled drying preserves the conversion coating integrity.",
      },
    ],
    benefits: [
      {
        title: "Paint Adhesion",
        desc: "Increases paint bond strength by up to 400% compared to bare aluminium.",
      },
      {
        title: "Corrosion Baseline",
        desc: "Provides 168+ hours of salt spray resistance even without paint.",
      },
      {
        title: "Conductive",
        desc: "Unlike anodising, the chromate layer maintains electrical conductivity.",
      },
      {
        title: "Fast Turnaround",
        desc: "Simple immersion process with rapid cycle times for high-volume orders.",
      },
    ],
    applications: [
      "Pre-treatment before powder coating",
      "Aerospace structural components",
      "Electrical grounding surfaces",
      "Military hardware & defence enclosures",
      "Automotive body-in-white parts",
    ],
    specs: [
      { label: "Film Thickness", value: "0.5 – 4 microns" },
      { label: "Salt Spray (Standalone)", value: "168+ hours" },
      { label: "Colour", value: "Clear to iridescent gold" },
      { label: "Standard", value: "MIL-DTL-5541 / IS 1868" },
    ],
  },
  {
    slug: "blasting",
    title: "Glass Bead Blasting",
    tagline: "Consistent matte texture for flawless finishing",
    shortDesc:
      "Uniform matte pre-treatment for consistent anodizing appearance and grip.",
    longDesc:
      "Glass bead blasting propels fine spherical glass media at high velocity against aluminium surfaces to create a smooth, uniform matte texture. Unlike angular abrasives, glass beads do not cut or damage the surface — they gently peen it, producing a satin finish that hides machining marks, tool lines and minor surface imperfections. This makes it the ideal pre-treatment before anodizing when you need a perfectly even, professional appearance.",
    image: blasting,
    video: "/videos/glass-bead-blasting.mp4",
    gallery: [
      "/gallery/blasting_1.png",
      "/gallery/blasting_2.png",
      "/gallery/blasting_3.png",
      "/gallery/blasting_4.png",
    ],
    processSteps: [
      {
        step: "Part Fixturing",
        detail:
          "Components are securely mounted to ensure consistent blast angle and coverage.",
      },
      {
        step: "Media Selection",
        detail:
          "Glass bead size is chosen based on the required surface finish and part geometry.",
      },
      {
        step: "Blasting",
        detail:
          "Pressurised air propels glass beads uniformly across the entire surface area.",
      },
      {
        step: "Inspection",
        detail:
          "Surface roughness is measured to confirm the target Ra value before proceeding to anodizing.",
      },
    ],
    benefits: [
      {
        title: "Uniform Texture",
        desc: "Creates a perfectly even matte surface — no streaks, hot spots or pattern marks.",
      },
      {
        title: "Hides Imperfections",
        desc: "Eliminates visible machining lines, minor scratches and tool marks.",
      },
      {
        title: "Non-Destructive",
        desc: "Spherical glass beads compress the surface without removing material or altering dimensions.",
      },
      {
        title: "Better Anodizing",
        desc: "The uniform surface ensures consistent dye uptake and colour matching across batches.",
      },
    ],
    applications: [
      "Pre-anodizing surface preparation",
      "Medical device housings",
      "Food processing equipment",
      "Decorative architectural panels",
      "Precision machined components",
    ],
    specs: [
      { label: "Media", value: "Glass beads (40–200 mesh)" },
      { label: "Finish", value: "Ra 0.8 – 3.2 µm (adjustable)" },
      { label: "Pressure", value: "2 – 6 bar" },
      { label: "Dimensional Impact", value: "Negligible (< 0.01 mm)" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
