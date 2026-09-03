"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "../../components/site/Footer";

export function ContactContent() {
  return (
    <>
      <main className="bg-black text-white pt-28 sm:pt-32">
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Get in Touch
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Talk to our{" "}
              <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                finishing team
              </span>
            </h1>
          </motion.div>

          <div className="mt-10 sm:mt-14 grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-xl transition-all hover:border-white/25"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" />
              <div className="mt-4 text-[11px] sm:text-xs uppercase tracking-widest text-white/40">Call the works</div>
              <div className="mt-3 space-y-3">
                <a href="tel:+919850292893" className="block rounded-xl p-2 -mx-2 active:bg-white/5 transition-all active:scale-[0.98]">
                  <div className="text-base sm:text-lg font-semibold text-white">+91 9850292893</div>
                  <div className="mt-0.5 text-xs sm:text-sm text-white/50">Mr. Sachin Kirdak</div>
                </a>
                <a href="tel:+918208302347" className="block rounded-xl p-2 -mx-2 active:bg-white/5 transition-all active:scale-[0.98]">
                  <div className="text-base sm:text-lg font-semibold text-white">+91 8208302347</div>
                  <div className="mt-0.5 text-xs sm:text-sm text-white/50">Mr. Sunil Kirdak</div>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-xl transition-all hover:border-white/25"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" />
              <div className="mt-4 text-[11px] sm:text-xs uppercase tracking-widest text-white/40">Email us</div>
              <a href="mailto:adityaentp123@gmail.com" className="mt-2 block text-sm sm:text-lg font-semibold text-white break-all active:opacity-80 transition-opacity">
                adityaentp123@gmail.com
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-xl transition-all hover:border-white/25"
            >
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" />
              <div className="mt-4 text-[11px] sm:text-xs uppercase tracking-widest text-white/40">Facility</div>
              <a
                href="https://maps.app.goo.gl/x43jxXPCLZxDKrGg6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm sm:text-lg font-semibold text-white hover:text-white/80 transition-colors active:scale-[0.98]"
              >
                SR No. 95/1, Landge Nagar, Pune Nashik Highway, Bhosari, Pune-411039
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 sm:mt-14 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl shadow-black/60"
          >
            <iframe
              title="Aditya Enterprises facility location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9592476140417!2d73.84387597595568!3d18.639293582477383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c778f0fdf0d1%3A0x7536a6807d7c070c!2sAditya%20Enterprises!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="h-[280px] sm:h-[420px] w-full border-0 grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
