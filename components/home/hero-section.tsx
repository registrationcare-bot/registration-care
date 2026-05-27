import Link from "next/link";

import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Lock,
  CheckCircle2,
  Headphones,
  FileCheck2,
} from "lucide-react";

const trustCards = [
  {
    title: "Secure Documentation",
    description:
      "Safe and structured handling of business registration documents.",
    icon: Lock,
  },
  {
    title: "Expert Consultation",
    description:
      "Professional assistance for registrations and compliance processes.",
    icon: Headphones,
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and process-oriented guidance for businesses.",
    icon: FileCheck2,
  },
  {
    title: "Verified Assistance",
    description:
      "Professional support for startups and businesses across India.",
    icon: CheckCircle2,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

      <div className="container-custom relative grid gap-16 py-16 lg:grid-cols-2 lg:items-start lg:py-24">
        
        {/* Left */}
        <div className="pt-8 lg:pt-14">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB]">
            <ShieldCheck className="h-4 w-4" />
            Trusted Business Compliance Assistance
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-[#0B1F33] md:text-6xl">
            Business Registrations & Compliance Made Simple
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Professional assistance for GST, MSME, FSSAI,
            Trademark, GeM and business compliance services
            for startups and businesses across India.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#2563EB] px-8 text-base font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-[#1D4ED8]"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/services"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 text-base font-semibold text-[#0B1F33] transition hover:bg-slate-50"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-6">
            
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <BadgeCheck className="h-5 w-5 text-green-500" />
              Expert Guidance
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <BadgeCheck className="h-5 w-5 text-green-500" />
              Transparent Process
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Clock3 className="h-5 w-5 text-green-500" />
              Fast Support
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            
            {/* Top */}
            <div className="flex items-start justify-between gap-6">
              
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
                  Why Businesses Choose Us
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-[#0B1F33]">
                  Professional Compliance Assistance
                </h3>
              </div>

              <div className="rounded-2xl bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                Trusted Support
              </div>
            </div>

            {/* Trust Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={index}
                    className="group rounded-3xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h4 className="mt-5 text-lg font-semibold text-[#0B1F33]">
                      {card.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Trust Box */}
            <div className="mt-8 rounded-3xl bg-[#0B1F33] p-6 text-white">
              
              <div className="flex items-start gap-4">
                
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="h-6 w-6 text-blue-300" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    Structured Consultation Process
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Registration Care helps startups and businesses
                    simplify registration and compliance-related
                    processes through structured guidance and
                    professional assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}