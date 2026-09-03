"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, Mail, MapPin, Menu, X, Globe, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
const popupImg = "/assets/service-hardanodising.jpg";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Our Clients" },
  { href: "/#contact", label: "Find Us" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-4 py-2.5 shadow-2xl shadow-black/60 backdrop-blur-2xl sm:px-6 sm:py-3">
          <Link
            href="/#home"
            className="flex items-center justify-center transition-transform hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Aditya Enterprises Logo"
              className="h-8 sm:h-10 w-auto scale-[1.2] origin-left object-contain brightness-0 invert"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-xs lg:text-sm font-medium text-white/75 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
              <DialogTrigger asChild>
                <button className="inline-flex min-h-[40px] sm:min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur-xl transition-all hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                  <span>Contact</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl overflow-hidden p-0 border border-white/15 bg-[#0a0a0a]/95 text-white shadow-2xl backdrop-blur-2xl sm:flex rounded-3xl">
                {/* Left side imagery */}
                <div className="relative hidden w-2/5 sm:block">
                  <img src={popupImg} alt="Anodizing machinery" className="h-full w-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-[#0a0a0a]/95" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <img
                      src="/logo.png"
                      alt="Aditya Enterprises Logo"
                      className="w-[90%] max-w-[280px] -translate-y-8 object-contain drop-shadow-2xl brightness-0 invert"
                    />
                  </div>
                  <div className="absolute bottom-10 left-8 right-8">
                    <div className="text-sm font-medium leading-relaxed text-white/80">
                      Precision aluminium finishing engineered for the industries that build India.
                    </div>
                  </div>
                </div>

                {/* Right side content */}
                <div className="flex-1 p-6 sm:p-10 max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent">
                      Get in touch
                    </DialogTitle>
                    <p className="mt-1.5 text-xs sm:text-sm text-white/50">
                      Our engineering team responds to all inquiries and quotes within one business day.
                    </p>
                  </DialogHeader>
                  <div className="mt-6 grid gap-3 sm:gap-4">
                    <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div>
                          <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/40">Direct Line</div>
                          <a href="tel:+919850292893" className="mt-0.5 block text-base sm:text-lg font-bold text-white hover:text-white/80">+91 9850292893</a>
                          <div className="text-xs text-white/50">Mr. Sachin Kirdak</div>
                        </div>
                        <div className="pt-1 border-t border-white/5">
                          <a href="tel:+918208302347" className="block text-base sm:text-lg font-bold text-white hover:text-white/80">+91 8208302347</a>
                          <div className="text-xs text-white/50">Mr. Sunil Kirdak</div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="mailto:adityaentp123@gmail.com"
                      className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
                    >
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/40">Sales & Queries</div>
                        <div className="text-sm sm:text-lg font-bold text-white break-all sm:break-normal">adityaentp123@gmail.com</div>
                      </div>
                    </a>

                    <a
                      href="https://maps.app.goo.gl/x43jxXPCLZxDKrGg6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
                    >
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/40">Headquarters</div>
                        <div className="mt-0.5 text-xs sm:text-sm font-medium leading-relaxed text-white/80 group-hover:text-white">
                          SR No. 95/1, Landge Nagar, <br />Pune Nashik Highway, Bhosari, <br />Pune-411039, Maharashtra
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Hamburger Trigger (Umano style circular button) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Drawer (Umano Design Studio aesthetic) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 px-6 py-6 text-white backdrop-blur-3xl md:hidden overflow-y-auto"
          >
            {/* Top Bar of Drawer */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <Link href="/#home" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/logo.png"
                  alt="Aditya Enterprises Logo"
                  className="h-8 w-auto scale-[1.15] origin-left object-contain brightness-0 invert"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Links with High-Impact Typography */}
            <div className="flex flex-1 flex-col justify-center py-8">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Navigation
              </div>
              <ul className="flex flex-col gap-5">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between text-3xl font-extrabold tracking-tight text-white/90 transition-colors hover:text-white"
                    >
                      <span>{l.label}</span>
                      <ArrowRight className="h-6 w-6 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Quick Contact & CTA */}
            <div className="border-t border-white/10 pt-6">
              <div className="mb-4 flex items-center justify-between text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  ISO 9001:2015 Certified
                </span>
                <span>Pune, Maharashtra</span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactDialogOpen(true);
                }}
                className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-black shadow-xl shadow-white/10 transition-transform active:scale-98"
              >
                <span>Get in Touch & Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}