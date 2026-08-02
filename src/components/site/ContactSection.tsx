import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const items = [
  {
    icon: Phone,
    label: "Call the works",
    value: "+91 9850292893",
    href: "tel:+919850292893",
  },
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
    href: "https://maps.app.goo.gl/92ZG7MYZ1fWZtmRN9",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-black px-6 py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#161a1d_0%,#000_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Get in touch
          </span>
          <h2 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
            Talk to our{" "}
            <span className="bg-gradient-to-r from-white via-white/70 to-white/30 bg-clip-text text-transparent">
              finishing team
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Send us a drawing, part sample, or specification — we'll come back
            with a coating plan and quote within one business day.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            const inner = (
              <>
                <Icon className="h-6 w-6 text-white/80" />
                <div className="mt-6 text-xs uppercase tracking-widest text-white/40">
                  {it.label}
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  {it.value}
                </div>
              </>
            );
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-colors hover:border-white/25"
              >
                {it.href ? <a href={it.href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60"
        >
          <iframe
            title="Aditya Enterprises facility location"
            src="https://www.google.com/maps?q=MIDC+Bhosari+Pune&output=embed"
            className="h-[420px] w-full border-0 grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=adityaentp123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black shadow-lg shadow-white/10 transition-transform hover:scale-[1.03]"
          >
            Request a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}