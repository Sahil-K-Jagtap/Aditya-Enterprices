"use client";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="border-t border-white/10 bg-black px-4 py-12 sm:px-6 sm:py-16 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 sm:mb-8 text-center text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-white/40">
          DELIVERING EXCELLENCE IN
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-12 opacity-60">
          {["PRECISION", "QUALITY", "RELIABILITY", "DURABILITY", "CONSISTENCY"].map((p) => (
            <div key={p} className="text-xs sm:text-sm font-bold tracking-widest text-white/70">
              {p}
            </div>
          ))}
        </div>
        <div className="mt-10 sm:mt-14 flex flex-col items-center gap-1.5 text-[11px] sm:text-xs text-white/40">
          <div>© {new Date().getFullYear()} Aditya Enterprises</div>
          <div>Pune, Maharashtra · ISO 9001:2015 certified</div>
        </div>
      </div>
    </motion.footer>
  );
}