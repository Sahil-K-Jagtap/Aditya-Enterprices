import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/10 bg-black px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center text-xs font-semibold tracking-[0.3em] text-white/40">
          DELIVERING EXCELLENCE IN
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
          {["PRECISION", "QUALITY", "RELIABILITY", "DURABILITY", "CONSISTENCY"].map((p) => (
            <div key={p} className="text-sm font-bold tracking-widest text-white/70">
              {p}
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center gap-2 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Aditya Enterprises</div>
          <div>Pune, Maharashtra · ISO 9001:2015 certified</div>
        </div>
      </div>
    </motion.footer>
  );
}