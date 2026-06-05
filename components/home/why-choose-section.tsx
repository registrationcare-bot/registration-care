
import Image from "next/image";
import Link from "next/link";

import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const benefits = [
  "Professional Registration Assistance",
  "Documentation Review & Support",
  "Transparent Communication",
  "Dedicated Business Support",
  "PAN India Service Coverage",
  "Startup Friendly Process",
];

const stats = [
  {
    value: "500+",
    label: "Applications Assisted",
  },
  {
    value: "50+",
    label: "Cities Served",
  },
  {
    value: "24/7",
    label: "WhatsApp Support",
  },
  {
    value: "100%",
    label: "Transparent Process",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="container-custom">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <div className="text-4xl font-bold text-[#0B1F33]">
                {stat.value}
              </div>

              <div className="mt-2 text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Illustration */}
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <Image
              src="/images/business-consultation-illustration.png"
              alt="Business Consultation"
              width={700}
              height={700}
              className="h-auto w-full"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Why Businesses Trust Registration Care
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
              Professional Guidance For Business Registrations & Compliance
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Registration Care provides structured assistance for
              registrations, licenses and compliance-related services
              for startups, entrepreneurs and businesses across India.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2563EB] px-8 py-4 font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Get Free Consultation

                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

