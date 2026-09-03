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
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-[1.03] active:scale-[0.97]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>
      </main>
    );
  }

  // Get related services (excluding the current one)
  const related = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);
  const totalSlides = 1 + service.gallery.length;

  const benefitIcons = [Shield, Sparkles, Layers, Factory];

  return (
    <main key={id} className="bg-black text-white">
      {/* ── Hero Banner ── */}
      <section className="relative h-[55vh] sm:h-[70vh] min-h-[380px] sm:min-h-[500px] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-4 pb-10 sm:px-6 sm:pb-16 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/"
              hash="services"
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10 active:scale-95"
            >
              <ArrowLeft className="h-3 w-3" />
              All Services
            </Link>
            <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg md:text-xl font-medium text-white/70">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Detailed Description ── */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-24 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Overview
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            What is{" "}
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              {service.title}?
            </span>
          </h2>
          <p className="mt-5 sm:mt-8 text-sm sm:text-xl leading-relaxed text-white/80">
            {service.longDesc}
          </p>
        </motion.div>
      </section>

      {/* ── Process Media Carousel ── */}
      <section className="relative overflow-hidden bg-[#050505] px-4 py-14 sm:px-6 sm:py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
              Gallery & Process
            </div>
            <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              See it in action
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 md:flex-row md:gap-0"
          >
            {/* Main Viewer */}
            <div className="group relative flex-1 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-r-none border border-white/10 md:border-r-0 shadow-2xl shadow-black/60 bg-black/50" style={{ aspectRatio: '16 / 9', minHeight: '220px', maxHeight: '520px' }}>
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
                        className="h-full w-full object-contain p-2 sm:p-4"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows (always visible on mobile for discoverability) */}
              <button 
                onClick={scrollPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95 sm:opacity-0 sm:group-hover:opacity-100 border border-white/10"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              <button 
                onClick={scrollNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95 sm:opacity-0 sm:group-hover:opacity-100 border border-white/10"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Thumbnails — horizontal scroll on mobile, vertical on desktop */}
            <div className="flex md:flex-col gap-1.5 sm:gap-2 md:gap-0 overflow-x-auto md:overflow-x-visible md:w-28 md:self-stretch rounded-xl sm:rounded-2xl md:rounded-l-none md:rounded-r-3xl border border-white/10 md:border-l-0 bg-white/[0.02] backdrop-blur-xl" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <button
                onClick={() => scrollTo(0)}
                className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 md:w-full md:h-auto md:flex-1 md:min-h-0 overflow-hidden transition-all duration-300 ${
                  activeMedia === 0
                    ? "bg-white/10 ring-2 ring-white/30 md:ring-0"
                    : "bg-transparent opacity-60 hover:opacity-100 hover:bg-white/[0.04]"
                }`}
              >
                {activeMedia === 0 && (
                  <motion.div
                    layoutId="activeThumb"
                    className="absolute inset-0 border-2 border-white/30 pointer-events-none hidden md:block"
                    style={{ borderRadius: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                  <div className="flex flex-col items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/60">Video</span>
                  </div>
                </div>
              </button>
              {service.gallery.map((img, i) => (
                <button
                  key={img + i}
                  onClick={() => scrollTo(i + 1)}
                  className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 md:w-full md:h-auto md:flex-1 md:min-h-0 overflow-hidden transition-all duration-300 md:border-t md:border-white/[0.06] ${
                    activeMedia === i + 1
                      ? "bg-white/10 ring-2 ring-white/30 md:ring-0"
                      : "bg-transparent opacity-60 hover:opacity-100 hover:bg-white/[0.04]"
                  }`}
                >
                  {activeMedia === i + 1 && (
                    <motion.div
                      layoutId="activeThumb"
                      className="absolute inset-0 border-2 border-white/30 pointer-events-none hidden md:block"
                      style={{ borderRadius: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <img src={img} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Mobile swipe indicator dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4 md:hidden">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeMedia === i 
                    ? "w-5 h-1.5 bg-white" 
                    : "w-1.5 h-1.5 bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ── Benefits Grid ── */}
      <section className="bg-[#050505] px-4 py-14 sm:px-6 sm:py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Why Choose This
            </div>
            <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Key advantages
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:gap-6 sm:grid-cols-2">
            {service.benefits.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-start gap-4 sm:flex-col rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] p-5 sm:p-8 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] active:scale-[0.98]"
                >
                  <div className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 sm:mb-2 items-center justify-center rounded-xl sm:rounded-2xl bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white">{b.title}</h3>
                    <p className="mt-1.5 sm:mt-3 text-xs sm:text-base leading-relaxed text-white/80">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── Applications ── */}
      <section className="bg-[#050505] px-4 py-14 sm:px-6 sm:py-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Industries
            </div>
            <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Typical applications
            </h2>
          </motion.div>

          <div className="grid gap-2.5 sm:gap-4 sm:grid-cols-2">
            {service.applications.map((app, i) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 sm:px-6 sm:py-4 transition-all hover:border-white/15 active:scale-[0.98]"
              >
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white/40" />
                <span className="text-sm sm:text-base font-medium text-white/90">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-24 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            Explore More
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Other services we offer
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to="/service/$id"
                params={{ id: s.slug }}
                className="group block overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] active:scale-[0.98]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="flex items-center justify-between p-4 sm:p-6">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">{s.title}</h3>
                    <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-white/50">{s.tagline}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
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
