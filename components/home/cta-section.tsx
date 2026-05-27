import Link from "next/link";

import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      
      <div className="container-custom">
        
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-[#F8FAFC] px-8 py-14 shadow-[0_20px_80px_rgba(15,23,42,0.04)] md:px-14">
          
          {/* Soft Glow */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Left */}
            <div>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB]">
                <ShieldCheck className="h-4 w-4" />
                Professional Business Assistance
              </div>

              {/* Heading */}
              <h2 className="mt-8 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
                Need Help With Business Registrations & Compliance?
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Connect with Registration Care for structured
                consultation, documentation support and
                compliance-related assistance for your business.
              </p>
            </div>

            {/* Right */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              
              <div className="space-y-5">
                
                {/* Primary CTA */}
                <Link
                  href="/contact"
                  className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-8 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1D4ED8]"
                >
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>

                {/* Secondary CTA */}
                <button
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 text-base font-semibold text-[#0B1F33] transition hover:bg-slate-50"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Support
                </button>
              </div>

              {/* Trust Text */}
              <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-5">
                
                <p className="text-sm leading-7 text-slate-600">
                  Registration Care assists startups, entrepreneurs
                  and businesses with registrations, documentation
                  and compliance-related consultation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}