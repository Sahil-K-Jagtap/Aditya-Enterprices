import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Factory,
  Layers,
  Shield,
  Sparkles,
} from "lucide-react";
import { getServiceBySlug, servicesData } from "../lib/services-data";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/service/$id")({
  component: ServiceDetailPage,
  head: ({ params }) => {
    const service = getServiceBySlug(params.id);
    return {
      meta: [
        {
          title: service
            ? `${service.title} | Aditya Enterprises Pune`
            : "Service Not Found",
        },
        {
          name: "description",
          content: service
            ? service.longDesc.slice(0, 160)
            : "Service not found.",
        },
      ],
    };
  },
});

function ServiceDetailPage() {
  const { id } = Route.useParams();
  const service = getServiceBySlug(id);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeMedia, setActiveMedia] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setActiveMedia(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  if (!service) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg text-white/60">
          We couldn't find that service.
        </p>
        <Link
          to="/"
          hash="services"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-[1.03]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>
      </main>
    );
  }

  // Get related services (excluding the current one)
  const related = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  const benefitIcons = [Shield, Sparkles, Layers, Factory];

  return (
    <main key={id} className="bg-black text-white">
      {/* ── Hero Banner ── */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-16 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/"
              hash="services"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-3 w-3" />
              All Services
            </Link>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium text-white/70 md:text-xl">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Detailed Description ── */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Overview
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            What is{" "}
            <span className="bg-gradient-to-r from-white via-white/70 to-white/40 bg-clip-text text-transparent">
              {service.title}?
            </span>
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-white/80">
            {service.longDesc}
          </p>
        </motion.div>
      </section>

      {/* ── Process Media Carousel ── */}
      <section className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Gallery & Process
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              See it in action
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60 aspect-video bg-black/50"
          >
            <div className="overflow-hidden h-full w-full" ref={emblaRef}>
              <div className="flex h-full w-full touch-pan-y">
                
                {/* 1. Video Slide */}
                <div className="relative h-full min-w-0 shrink-0 grow-0 basis-full">
                  <video
                    key={service.video}
                    src={service.video}
                    autoPlay
                    loop
                    muted={true}
                    playsInline
                    onCanPlay={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.play().catch(console.error);
                    }}
                    className="h-full w-full object-cover"
                  >
                    <p className="p-8 text-center text-white/50">
                      Video of the {service.title.toLowerCase()} process will appear here.
                    </p>
                  </video>
                </div>
                
                {/* 2. Image Slides */}
                {service.gallery.map((img, i) => (
                  <div key={img + i} className="relative h-full min-w-0 shrink-0 grow-0 basis-full flex items-center justify-center bg-black/80">
                    <img 
                      src={img} 
                      alt={`${service.title} example ${i + 1}`}
                      className="h-full w-full object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 transition-all hover:bg-black/60 hover:scale-110 group-hover:opacity-100 border border-white/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 transition-all hover:bg-black/60 hover:scale-110 group-hover:opacity-100 border border-white/10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>

          {/* Thumbnails */}
          <div className="mt-6 flex justify-center gap-4 overflow-x-auto pb-4">
            <button
              onClick={() => scrollTo(0)}
              className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                activeMedia === 0 ? "border-white" : "border-white/10 opacity-50 hover:opacity-100"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <span className="text-xs font-medium">Video</span>
              </div>
            </button>
            {service.gallery.map((img, i) => (
              <button
                key={img + i}
                onClick={() => scrollTo(i + 1)}
                className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border-2 bg-black transition-all ${
                  activeMedia === i + 1 ? "border-white" : "border-white/10 opacity-50 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            How It Works
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Our process, step by step
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {service.processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-start gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {step.step}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/80">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="bg-[#050505] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Why Choose This
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Key advantages
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {service.benefits.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{b.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/80">
                    {b.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technical Specs ── */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Specifications
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Technical data
          </h2>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          {service.specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex items-center justify-between px-8 py-5 ${
                i % 2 === 0 ? "bg-white/[0.02]" : "bg-white/[0.04]"
              }`}
            >
              <span className="text-base font-medium text-white/80">
                {spec.label}
              </span>
              <span className="text-base font-bold text-white">{spec.value}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Applications ── */}
      <section className="bg-[#050505] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Industries
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Typical applications
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.applications.map((app, i) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4 transition-all hover:border-white/15"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-white/40" />
                <span className="text-base font-medium text-white/90">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Explore More
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Other services we offer
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to="/service/$id"
                params={{ id: s.slug }}
                className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-xs text-white/50">{s.tagline}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>


      <Footer />
    </main>
  );
}
