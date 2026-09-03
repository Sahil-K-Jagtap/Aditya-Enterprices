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
      <main className="bg-black text-white pt-28 sm:pt-32">
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              About Us
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              20 years of{" "}
              <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                precision anodizing
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-lg leading-relaxed text-white/60">
              Aditya Enterprises caters to the needs of customers 
              worldwide with a wide range of products. Foreseeing the vital role that Aluminium 
              would play in the future, we invested in technology and quality assurance, working 
              towards a position of undisputed leadership in anodizing.
            </p>
          </motion.div>

          <div className="mt-10 sm:mt-16 grid gap-3 sm:gap-6 grid-cols-2 sm:grid-cols-3">
            {[
              { k: "20", v: "Years in operation" },
              { k: "180+", v: "Skilled operators & engineers" },
              { k: "ISO 9001", v: "Certified quality system" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-8 backdrop-blur-xl"
              >
                <div className="text-2xl sm:text-4xl font-extrabold text-white">{s.k}</div>
                <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/50">{s.v}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mt-12 sm:mt-16 space-y-5 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Our <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">facility</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/70">
              Our Pune plant runs on a 1,200 kVA rectifier bank feeding two
              independent DC lines. Every batch is racked, pre-cleaned, etched,
              anodized and sealed under a documented traveler — with in-line
              coating-thickness readings taken every 45 minutes.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-white/70">
              We serve OEMs across automotive, defence, architectural, and
              consumer electronics — with a batch rejection rate that stayed
              under 0.4% across FY24.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}