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
    <section className="relative bg-black px-4 py-20 sm:px-6 sm:py-32 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#0a0d0f_50%,#000_100%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            Industry Applications
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Finishes trusted across{" "}
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              six sectors
            </span>
          </h2>
        </motion.div>
        <div className="mt-10 sm:mt-16 grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 sm:flex-col backdrop-blur-xl transition-all duration-300 hover:border-white/25 active:scale-[0.98]"
            >
              <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                <ind.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold tracking-wide text-white">{ind.name}</h3>
                <p className="mt-1 sm:mt-3 text-sm sm:text-base leading-relaxed text-white/80">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}