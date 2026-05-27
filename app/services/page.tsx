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

const services = [
  {
    title: "GST Registration",
    description:
      "GST registration and compliance assistance for businesses and startups.",
    href: "/services/gst-registration",
    icon: FileText,
  },
  {
    title: "MSME Registration",
    description:
      "MSME/Udyam registration assistance and startup support guidance.",
    href: "/services/msme-registration",
    icon: BadgeCheck,
  },
  {
    title: "FSSAI License",
    description:
      "FSSAI licensing and food business compliance support services.",
    href: "/services/fssai-license",
    icon: ShieldCheck,
  },
  {
    title: "Trademark Registration",
    description:
      "Trademark filing and brand protection consultation support.",
    href: "/services/trademark-registration",
    icon: FileBadge,
  },
  {
    title: "Company Registration",
    description:
      "Business incorporation and company registration assistance.",
    href: "/services/company-registration",
    icon: Building2,
  },
  {
    title: "IEC Code",
    description:
      "Import Export Code registration support for businesses.",
    href: "/services/iec-code",
    icon: BriefcaseBusiness,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-[#F8FAFC]">
        <div className="container-custom section-padding">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={index}
                  href={service.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8] transition group-hover:bg-[#1D4ED8] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-[#0B1F33]">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 text-sm font-medium text-[#1D4ED8]">
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