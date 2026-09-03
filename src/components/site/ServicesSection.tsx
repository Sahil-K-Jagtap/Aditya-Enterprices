import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { servicesData } from "../../lib/services-data";



export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-black px-4 py-20 sm:px-6 sm:py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#0a0d0f_50%,#000_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Services
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Full-stack{" "}
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              aluminium finishing
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-white/60">
            Five specialist processes under one roof — engineered for repeatable
            colour, hardness and dimensional tolerance.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {servicesData.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-white/25 active:scale-[0.98]"
            >
              <Link
                to="/service/$id"
                params={{ id: s.slug }}
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-3 p-5 sm:p-7">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/55">{s.shortDesc}</p>
                  </div>
                  <div className="mt-0.5 shrink-0 rounded-full border border-white/15 bg-white/5 p-2 text-white/70 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}