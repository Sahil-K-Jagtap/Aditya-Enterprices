import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const stats = [
  { k: "20", v: "Years in operation" },
  { k: "Global", v: "Worldwide reach" },
  { k: "ISO 9001", v: "Certified quality system" },
  { k: "0.4%", v: "Batch rejection rate FY24" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-black px-6 py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a1f22_0%,#000_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            About us
          </span>
          <h2 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
            20 years of{" "}
            <span className="bg-gradient-to-r from-white via-white/70 to-white/30 bg-clip-text text-transparent">
              pioneering excellence
            </span>
          </h2>
          <div className="mt-6 grid gap-10 lg:grid-cols-4 lg:gap-4 lg:items-center">
            <div className="space-y-4 lg:col-span-3">
              <p className="text-lg text-white/60">
                Aditya Enterprises caters to the needs of customers worldwide
                with a wide range of products. Foreseeing the vital role that Aluminium would play
                in the future, we invested in technology and quality assurance, working towards a
                position of undisputed leadership in anodizing. Our products are used in diverse
                segments ranging from constructions to consumer durables, transport to textiles,
                and irrigation to electrification.
              </p>
              <p className="text-lg text-white/60">
                Every great accomplishment begins with a dream & every dream needs people who can
                make it come true. Aditya Enterprises is a cutting-edge organization with a
                combination of highly talented people, pioneering in anodizing and chromating,
                backed up by advanced technologies and a dedicated customer-focused culture.
                ‘So everything you need is here, look no further’.
              </p>
            </div>
            <div className="flex justify-center lg:col-span-1">
              <Link
                to="/clients"
                className="group flex flex-col items-center justify-center gap-4 transition-transform hover:scale-[1.02]"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors group-hover:bg-white">
                  <ArrowRight className="h-10 w-10 text-white transition-colors group-hover:text-black" />
                </div>
                <span className="text-base font-extrabold uppercase tracking-[0.2em] text-white transition-colors group-hover:text-white/80">Our Clients</span>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="text-4xl font-bold text-white">{s.k}</div>
              <div className="mt-2 text-sm text-white/50">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}