
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Link from "next/link";

import {
  FileText,
  BadgeCheck,
  ShieldCheck,
  FileBadge,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

import { services } from "@/data/services";

const icons = [
  FileText,
  BadgeCheck,
  ShieldCheck,
  FileBadge,
  Building2,
  BriefcaseBusiness,
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#E7EFEA] bg-[#F6FBF7]">
        <div className="container-custom section-padding">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
            Our Services
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight text-[#0B1F33]">
            Business Registration & Compliance Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Professional consultation and documentation assistance
            for startups, entrepreneurs and businesses across India.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#F9FCFA]">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];

              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group rounded-3xl border border-[#D8E8DD] bg-[#F2F8F4] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#BCD7C5] hover:bg-[#F7FBF8] hover:shadow-sm"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FBE2C4] bg-[#FFF4E8] text-[#F59E0B] transition group-hover:bg-[#F59E0B] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h2 className="mt-6 text-2xl font-semibold text-[#0B1F33]">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 text-sm font-medium text-[#F59E0B]">
                    Learn More →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
