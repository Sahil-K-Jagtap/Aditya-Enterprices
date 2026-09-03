import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/clients")({
  component: ClientsPage,
  head: () => ({
    meta: [
      {
        title: "Our International Clients | Aditya Enterprises Pune",
      },
      {
        name: "description",
        content: "We are honored to serve our esteemed customers from various countries around the world.",
      },
    ],
  }),
});

function ClientsPage() {
  const images = [
    "/clients/client-1.jpg",
    "/clients/client-2.jpg",
    "/clients/client-3.jpg",
    "/clients/client-4.jpg",
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-24">
      {/* ── Content Section ── */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            hash="about"
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10 active:scale-95"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to About
          </Link>
          
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 mb-4 block">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Global Reach
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-8 sm:mb-12 leading-tight">
            Our International <br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              Partnerships
            </span>
          </h1>
          
          <div className="mt-10 sm:mt-16 flex flex-col gap-10 sm:gap-16 md:gap-32">
            {/* Block 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative max-w-4xl border-l-2 sm:border-l-4 border-white/20 pl-4 sm:pl-6 md:pl-10"
            >
              <p className="text-lg sm:text-2xl md:text-3xl font-medium leading-relaxed text-white/90">
                We are honored to serve our esteemed customers from various countries around the world 
                and sincerely appreciate the trust they place in our company. 
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-xl leading-relaxed text-white/60">
                Their continued confidence in our products and services reflects our unwavering commitment to quality, precision, 
                reliability, and customer satisfaction. We strive to understand the unique requirements of every international client and 
                consistently deliver solutions that meet global standards while ensuring timely delivery 
                and professional support. Serving industrial hubs across Germany, Amsterdam (Netherlands) and many more.
              </p>
            </motion.div>

            {/* Block 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto mb-6 sm:mb-8 inline-flex max-w-fit items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] px-5 sm:px-6 py-2 backdrop-blur-sm">
                <span className="text-xs sm:text-base font-bold uppercase tracking-[0.2em] text-white/90">
                  Our Commitment
                </span>
              </div>
              <p className="text-xl sm:text-3xl md:text-4xl font-light italic leading-relaxed text-white/90">
                "Our valued overseas customers are an integral part of our growth and success, and we remain 
                dedicated to building long-lasting partnerships based on integrity, mutual respect, innovation, 
                and excellence."
              </p>
              <p className="mt-5 sm:mt-8 text-sm sm:text-xl text-white/60">
                We look forward to strengthening these relationships and continuing to provide 
                world-class products and services that exceed expectations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={src}
                alt={`Client visit ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/800x600/111111/444444?text=Client+Photo+" + (i + 1);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
