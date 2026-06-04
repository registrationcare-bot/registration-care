import Link from "next/link";

import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  "GST Registration",
  "MSME Registration",
  "FSSAI License",
  "Trademark Registration",
  "Company Registration",
  
];

export default function CTASection() {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-[#F8FAFC] to-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.04)] md:p-12">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB]">
              <ShieldCheck className="h-4 w-4" />
              Start Your Registration Journey
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
              Ready To Start Your Registration?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Choose your service, submit your application and start your
              registration process online with professional assistance from
              Registration Care.
            </p>

            {/* Service Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-8 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1D4ED8]"
              >
                Start Registration
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/918252080029"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 text-base font-semibold text-[#0B1F33] transition hover:bg-slate-50"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust Strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-white px-6 py-5">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Secure Application Process
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Dedicated Support
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Documentation Assistance
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Transparent Process
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}