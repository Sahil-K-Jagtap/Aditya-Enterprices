import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "../../assets/hero-anodized.jpg";
import { GlassCard } from "./GlassCard";

export function HeroScrollSequence() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Centerpiece scale: 1.1 -> 0.62
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.62]);
  const centerRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);

  // Hero text: fade + translate up, snap to zero and stay gone
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -140]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.18],
    [1, 0.1, 0],
  );
  const textBlur = useTransform(scrollYProgress, [0, 0.18], [0, 16]);
  const textFilter = useTransform(textBlur, (v) => `blur(${v}px)`);
  const textVisibility = useTransform(scrollYProgress, (v) =>
    v > 0.18 ? "hidden" : "visible",
  );
  const textPointer = useTransform(scrollYProgress, (v) =>
    v > 0.15 ? "none" : "auto",
  );

  // Stats cards: glide up from below viewport, driven by same scroll
  const leftY = useTransform(scrollYProgress, [0.1, 0.35], [420, -30]);
  const leftRotate = useTransform(scrollYProgress, [0.1, 0.35], [-6, 0]);
  const rightY = useTransform(scrollYProgress, [0.15, 0.4], [420, -30]);
  const rightRotate = useTransform(scrollYProgress, [0.15, 0.4], [6, 0]);
  const bottomY = useTransform(scrollYProgress, [0.2, 0.45], [520, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  return (
    <section id="home" ref={trackRef} className="relative h-[450vh] w-full bg-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1f22_0%,#000_60%)]" />
        </div>

        {/* Centerpiece */}
        <motion.div
          style={{ scale, rotate: centerRotate }}
          className="relative z-10 h-[100dvh] w-full overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
        >
          <img
            src={heroImg}
            alt="Anodized aluminum industrial parts on a precision conveyor line"
            className="h-full w-full object-cover"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/90 via-black/40 to-black/40" />
        </motion.div>

        {/* Hero text overlay */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
            filter: textFilter,
            pointerEvents: textPointer,
            visibility: textVisibility,
          }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center will-change-transform"
        >
          {/* Subtle radial dark glow strictly behind the text */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[60vh] w-[80vw] max-w-4xl rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_70%)] blur-2xl" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Precision anodizing, industrial scale
            </span>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,1)] md:text-7xl">
              Anodized finishes that <br />
              <span className="bg-gradient-to-r from-white via-[#c9c9c9] to-[#6b6b6b] bg-clip-text text-transparent">
                outlast the machine
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] md:text-lg">
              Aluminium anodising, bright dip, hard coating, chromating and glass bead
              blasting — engineered in Pune for the industries that build India.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg shadow-white/10 transition-transform hover:scale-[1.03]"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-3 font-medium text-white backdrop-blur-xl transition-colors hover:bg-white/10"
              >
                Request Quote
              </button>
            </div>
          </div>
        </motion.div>

        {/* Overlapping stats cards */}
        <GlassCard
          y={leftY}
          style={{ rotate: leftRotate }}
          opacity={cardsOpacity}
          className="absolute left-4 top-1/2 z-30 hidden w-64 -translate-y-1/2 md:block"
        >
          <div className="text-4xl font-bold text-white">ISO 9001</div>
          <div className="mt-1 text-sm font-medium text-white/90">Certified quality system</div>
        </GlassCard>

        <GlassCard
          y={rightY}
          style={{ rotate: rightRotate }}
          opacity={cardsOpacity}
          className="absolute right-4 top-1/2 z-30 hidden w-64 -translate-y-1/2 md:block"
        >
          <div className="text-4xl font-bold text-white">Worldwide</div>
          <div className="mt-1 text-sm font-medium text-white/90">Catering to exact customer requirements globally</div>
        </GlassCard>

        <GlassCard
          y={bottomY}
          opacity={cardsOpacity}
          className="absolute bottom-8 left-1/2 z-30 hidden w-[90%] max-w-2xl -translate-x-1/2 md:flex md:items-center md:gap-6"
        >
          <div className="flex-1">
            <div className="text-4xl font-bold text-white">Diverse Segments</div>
            <div className="mt-1 text-sm font-medium text-white/90">
              Serving construction, durables, transport, textiles, irrigation & electrification
            </div>
          </div>
          <div
            className="h-16 flex-1 rounded-xl"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
            aria-hidden
          />
        </GlassCard>
      </div>
    </section>
  );
}