import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Link from "next/link";

import {
  FileText,
  ShieldCheck,
  Building2,
  BadgeCheck,
  FileBadge,
  ChevronRight,
  Search,
} from "lucide-react";

const documentationCategories = [
  {
    title: "GST Documentation",
    icon: FileText,
    description:
      "Comprehensive GST registration, filing and compliance guidance for businesses.",
    links: [
      "GST Registration Process",
      "GST Required Documents",
      "GST Return Filing Guide",
      "GST for Startups",
    ],
  },
  {
    title: "MSME Documentation",
    icon: Building2,
    description:
      "MSME/Udyam registration knowledge base and business benefits guidance.",
    links: [
      "MSME Registration Process",
      "MSME Eligibility",
      "Udyam Benefits",
      "MSME Loan Support",
    ],
  },
  {
    title: "FSSAI Documentation",
    icon: ShieldCheck,
    description:
      "Food business compliance and FSSAI licensing support documentation.",
    links: [
      "FSSAI Basic License",
      "FSSAI State License",
      "FSSAI Central License",
      "Food Business Compliance",
    ],
  },
  {
    title: "Trademark Documentation",
    icon: BadgeCheck,
    description:
      "Trademark filing, objection handling and brand protection guidance.",
    links: [
      "Trademark Registration",
      "Trademark Objection",
      "Trademark Renewal",
      "Brand Protection Guide",
    ],
  },
  {
    title: "Business Compliance",
    icon: FileBadge,
    description:
      "Business compliance assistance and operational documentation resources.",
    links: [
      "Business Compliance Guide",
      "ROC Filing",
      "Annual Compliance",
      "Professional Consultation",
    ],
  },
];

export default function DocumentationPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="container-custom py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB]">
              Registration Care Documentation
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-[#0B1F33]">
              Business Registration & Compliance Documentation
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Structured knowledge base, professional compliance guidance,
              registration documentation support and business assistance
              resources for startups, entrepreneurs and growing businesses.
            </p>

            {/* Search Box */}
            <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <Search className="h-5 w-5 text-slate-400" />

              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {documentationCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-[#0B1F33]">
                        {category.title}
                      </h2>

                      <p className="mt-3 text-[15px] leading-7 text-slate-600">
                        {category.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {category.links.map((link, idx) => (
                          <Link
                            key={idx}
                            href="#"
                            className="group/item flex items-center justify-between rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-100 hover:bg-blue-50"
                          >
                            <span>{link}</span>

                            <ChevronRight className="h-4 w-4 text-slate-400 transition group-hover/item:translate-x-1 group-hover/item:text-[#2563EB]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Trust Section */}
      <section className="border-t border-slate-200 bg-[#F8FAFC] py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#0B1F33]">
              Structured Business Documentation Support
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Registration Care provides structured business consultation,
              registration assistance, documentation guidance and compliance
              support for startups, professionals and businesses across India.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1D4ED8]"
              >
                Get Professional Consultation
              </Link>

              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 text-sm font-semibold text-[#0B1F33] transition hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}