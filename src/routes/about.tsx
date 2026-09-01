import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Aditya Enterprises — Anodizing Specialists in Pune" },
      {
        name: "description",
        content:
          "20 years of precision anodizing and metal finishing from our Pune facility.",
      },
      { property: "og:title", content: "About Aditya Enterprises" },
      {
        property: "og:description",
        content: "20 years of precision anodizing from Pune.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <main className="pt-32">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-600">
              About us
            </span>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#130B29] md:text-6xl">
              20 years of precision anodizing
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-gray-600">
              Aditya Enterprises caters to the needs of customers 
              worldwide with a wide range of products. Foreseeing the vital role that Aluminium 
              would play in the future, we invested in technology and quality assurance, working 
              towards a position of undisputed leadership in anodizing.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { k: "20", v: "Years in operation" },
              { k: "180+", v: "Skilled operators & engineers" },
              { k: "ISO 9001", v: "Certified quality system" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="text-4xl font-bold text-[#130B29]">{s.k}</div>
                <div className="mt-2 text-sm text-gray-600">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-[#130B29]">Our facility</h2>
            <p>
              Our Pune plant runs on a 1,200 kVA rectifier bank feeding two
              independent DC lines. Every batch is racked, pre-cleaned, etched,
              anodized and sealed under a documented traveler — with in-line
              coating-thickness readings taken every 45 minutes.
            </p>
            <p>
              We serve OEMs across automotive, defence, architectural, and
              consumer electronics — with a batch rejection rate that stayed
              under 0.4% across FY24.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}