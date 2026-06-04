
import Image from "next/image";
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

const services = [
  "GST Registration",
  "MSME Registration",
  "FSSAI License",
  "Trademark",
  "Company Registration",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

      <div className="container-custom relative grid gap-12 py-8 lg:grid-cols-2 lg:items-center lg:py-12">
        {/* Left */}
        <div>
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB]">
            <ShieldCheck className="h-4 w-4" />
            Trusted Business Registration Platform
          </div>

          {/* Service Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-[#0B1F33] md:text-6xl">
            Business Registrations & Compliance Made Simple
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Professional assistance for GST Registration, MSME Registration,
            FSSAI License, Trademark Registration, Company Registration and
            business compliance services across India.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
           <Link
  href="/services"
  className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#2563EB] px-8 text-base font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-[#1D4ED8]"
>
  Start Registration
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

          {/* Stats */}
        {/* Stats */}
<div className="mt-12 grid grid-cols-3 gap-3 border-t border-slate-200 pt-8 sm:gap-6">
  <div className="rounded-2xl bg-slate-50 p-4 text-center">
    <div className="text-2xl font-bold text-[#0B1F33] sm:text-3xl">
      500+
    </div>

    <div className="mt-2 text-xs text-slate-500 sm:text-sm">
      Applications Assisted
    </div>
  </div>

  <div className="rounded-2xl bg-slate-50 p-4 text-center">
    <div className="text-2xl font-bold text-[#0B1F33] sm:text-3xl">
      50+
    </div>

    <div className="mt-2 text-xs text-slate-500 sm:text-sm">
      Cities Served
    </div>
  </div>

  <div className="rounded-2xl bg-slate-50 p-4 text-center">
    <div className="text-2xl font-bold text-[#0B1F33] sm:text-3xl">
      100%
    </div>

    <div className="mt-2 text-xs text-slate-500 sm:text-sm">
      Transparent Process
    </div>
  </div>
</div>
</div>

        {/* Right Side */}
        <div className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            {/* Illustration */}
            <div className="mb-8 overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
              <Image
                src="/images/hero-illustration.png"
                alt="Business Registration Consultation"
                width={700}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}

