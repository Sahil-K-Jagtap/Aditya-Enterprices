import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import popupImg from "../../assets/service-hardanodising.jpg";


const navLinks = [
  { hash: "home", label: "Home" },
  { hash: "about", label: "About Us" },
  { hash: "services", label: "Services" },
  { hash: "contact", label: "Find Us" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-6 py-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <Link
          to="/"
          className="flex items-center justify-center transition-transform hover:scale-105"
        >
          <img 
            src="/logo.png" 
            alt="Aditya Enterprises Logo" 
            className="h-10 w-auto scale-[1.3] origin-left object-contain brightness-0 invert" 
          />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.hash}>
              <Link
                to="/"
                hash={l.hash}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur-xl transition-colors hover:bg-white/20 cursor-pointer">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl overflow-hidden p-0 border border-white/15 bg-[#0a0a0a]/95 text-white shadow-2xl backdrop-blur-2xl sm:flex">
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
            <div className="flex-1 p-8 sm:p-10">
              <DialogHeader>
                <DialogTitle className="bg-gradient-to-br from-white to-white/50 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                  Get in touch
                </DialogTitle>
                <p className="mt-2 text-sm text-white/50">
                  Our engineering team responds to all inquiries and quotes within one business day.
                </p>
              </DialogHeader>
              <div className="mt-8 grid gap-4">
                <div className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-white/40">Direct Line</div>
                      <a href="tel:+919850292893" className="mt-1 block text-lg font-bold text-white hover:text-white/80">+91 9850292893</a>
                      <div className="text-xs text-white/50">Mr. Sachin Kirdak</div>
                    </div>
                    <div>
                      <a href="tel:+918208302347" className="block text-lg font-bold text-white hover:text-white/80">+91 8208302347</a>
                      <div className="text-xs text-white/50">Mr. Sunil Kirdak</div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="mailto:adityaentp123@gmail.com" 
                  className="group flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/40">Sales & Queries</div>
                    <div className="text-lg font-bold text-white">adityaentp123@gmail.com</div>
                  </div>
                </a>
                
                <div className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/40">Headquarters</div>
                    <div className="mt-1 text-sm font-medium leading-relaxed text-white/80">
                      SR No. 95/1, Landge Nagar, <br />Pune Nashik Highway, Bhosari, <br />Pune-411039, Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}