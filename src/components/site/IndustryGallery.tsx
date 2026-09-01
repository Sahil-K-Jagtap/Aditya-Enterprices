import { Car, Zap, Sun, Plane, Smartphone, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { icon: Car, name: "Automotive", desc: "Engine components, decorative trim, suspension parts." },
  { icon: Zap, name: "Electrical", desc: "Heat sinks, bus bars, switchgear enclosures." },
  { icon: Sun, name: "Solar", desc: "Mounting frames, inverter housings, panel rails." },
  { icon: Plane, name: "Aerospace", desc: "Structural fittings, landing gear components, hydraulic valves." },
  { icon: Smartphone, name: "Consumer Electronics", desc: "Laptop enclosures, smartphone frames, audio equipment." },
  { icon: Building2, name: "Architecture", desc: "Facade panels, window frames, curtain wall systems." },
];

export function IndustryGallery() {
  return (
    <section className="relative bg-black px-6 py-32 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#0a0d0f_50%,#000_100%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Industry applications
          </span>
          <h2 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
            Finishes trusted across{" "}
            <span className="bg-gradient-to-r from-white via-white/70 to-white/30 bg-clip-text text-transparent">
              six sectors
            </span>
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-colors hover:border-white/25"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                <ind.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-wide text-white">{ind.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/90">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}