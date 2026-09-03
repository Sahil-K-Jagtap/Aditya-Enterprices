import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919850292893"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/30 transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
}