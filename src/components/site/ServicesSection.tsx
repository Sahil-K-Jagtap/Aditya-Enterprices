import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { servicesData } from "../../lib/services-data";



export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-black px-6 py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#0a0d0f_50%,#000_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Services
          </span>
          <h2 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
            Full-stack{" "}
            <span className="bg-gradient-to-r from-white via-white/70 to-white/30 bg-clip-text text-transparent">
              aluminium finishing
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Five specialist processes under one roof — engineered for repeatable
            colour, hardness and dimensional tolerance.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors hover:border-white/25"
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
                <div className="flex items-start justify-between gap-4 p-7">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/55">{s.shortDesc}</p>
                  </div>
                  <div className="mt-1 rounded-full border border-white/15 bg-white/5 p-2 text-white/70 transition-all group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
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