"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email us",
    value: "adityaentp123@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adityaentp123@gmail.com",
  },
  {
    icon: MapPin,
    label: "Facility",
    value: "SR No. 95/1, Landge Nagar, Pune Nashik Highway, Bhosari, Pune-411039",
    href: "https://maps.app.goo.gl/x43jxXPCLZxDKrGg6",
  },
];

const phoneContacts = [
  { name: "Mr. Sachin Kirdak", number: "+91 9850292893", href: "tel:+919850292893" },
  { name: "Mr. Sunil Kirdak", number: "+91 8208302347", href: "tel:+918208302347" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-black px-4 py-20 sm:px-6 sm:py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#161a1d_0%,#000_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Get in Touch
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Talk to our{" "}
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              finishing team
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-white/60">
            Send us a drawing, part sample, or specification — we'll come back
            with a coating plan and quote within one business day.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Phone contacts — single card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-xl transition-all hover:border-white/25"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" />
            <div className="mt-4 sm:mt-6 text-[11px] sm:text-xs uppercase tracking-widest text-white/40">
              Call the works
            </div>
            <div className="mt-3 sm:mt-4 space-y-3">
              {phoneContacts.map((pc) => (
                <a key={pc.name} href={pc.href} className="block rounded-xl p-2 -mx-2 transition-all active:scale-[0.98] active:bg-white/5">
                  <div className="text-base sm:text-lg font-semibold text-white">{pc.number}</div>
                  <div className="text-xs sm:text-sm text-white/50">{pc.name}</div>
                </a>
              ))}
            </div>
          </motion.div>
          {/* Other contact items */}
          {contactItems.map((it, i) => {
            const Icon = it.icon;
            const inner = (
              <>
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white/80" />
                <div className="mt-4 sm:mt-6 text-[11px] sm:text-xs uppercase tracking-widest text-white/40">
                  {it.label}
                </div>
                <div className="mt-2 text-sm sm:text-lg font-semibold text-white break-words">
                  {it.value}
                </div>
              </>
            );
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i + 2) * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-xl transition-all hover:border-white/25 active:scale-[0.98]"
              >
                {it.href ? <a href={it.href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl shadow-black/60"
        >
          <iframe
            title="Aditya Enterprises facility location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9592476140417!2d73.84387597595568!3d18.639293582477383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c778f0fdf0d1%3A0x7536a6807d7c070c!2sAditya%20Enterprises!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="h-[280px] sm:h-[420px] w-full border-0 grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=adityaentp123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-black shadow-lg shadow-white/10 transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            Request a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}