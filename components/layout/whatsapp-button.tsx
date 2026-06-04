
"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "918252080029";

  const message =
    "Hello Registration Care, I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <div className="group relative">
        {/* Outer Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" />

        {/* Main Button */}
        <div className="relative flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-[0_12px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_18px_50px_rgba(37,211,102,0.45)]">
          {/* WhatsApp Icon */}
          <FaWhatsapp className="h-8 w-8 shrink-0" />

          {/* Text */}
          <div className="hidden sm:block">
            <p className="text-[11px] font-medium leading-none opacity-90">
              Need Assistance?
            </p>

            <p className="mt-1 text-sm font-bold">
              Chat on WhatsApp
            </p>
          </div>
        </div>

        {/* Tooltip */}
        <div className="pointer-events-none absolute bottom-full right-0 mb-3 translate-y-2 rounded-xl bg-[#0B1F33] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Get Free Consultation
        </div>
      </div>
    </Link>
  );
}

