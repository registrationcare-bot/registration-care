import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Link from "next/link";

import {
  Search,
  ChevronRight,
  FileText,
  Building2,
  ShieldCheck,
  BadgeCheck,
  BriefcaseBusiness,
  FileBadge,
  Landmark,
  Receipt,
  Store,
  Globe2,
} from "lucide-react";

const docsSections = [
  {
    title: "GST Documentation",
    icon: FileText,
    href: "/documentation/gst-registration",
  },

  {
    title: "MSME Documentation",
    icon: Building2,
    href: "/documentation/msme-registration",
  },

  {
    title: "FSSAI Documentation",
    icon: ShieldCheck,
    href: "/documentation/fssai-license",
  },

  {
    title: "Trademark Documentation",
    icon: BadgeCheck,
    href: "/documentation/trademark-registration",
  },

  {
    title: "Company Registration",
    icon: Landmark,
    href: "/services/company-registration",
  },

  {
    title: "IEC Code",
    icon: Globe2,
    href: "/services/iec-code",
  },

  {
    title: "GeM Registration",
    icon: BriefcaseBusiness,
    href: "/services/gem-registration",
  },

  {
    title: "PF & ESI",
    icon: Receipt,
    href: "/services/pf-esi-registration",
  },

  {
    title: "Shop License",
    icon: Store,
    href: "/services/shop-license",
  },

  {
    title: "DSC Services",
    icon: FileBadge,
    href: "/services/dsc",
  },
];

export default function DocumentationPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="min-h-screen border-b border-slate-200 bg-white">
        <div className="container-custom">
          
          <div className="grid lg:grid-cols-[290px_1fr]">
            
            {/* Sidebar */}
            <aside className="border-b border-slate-200 lg:border-r">
              
              <div className="overflow-x-auto lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:overflow-y-auto lg:pr-6 lg:pt-10">
                
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Documentation
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-[#0B1F33]">
                    Registration Care Docs
                  </h2>
                </div>

                {/* Search */}
                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3">
                  
                  <Search className="h-4 w-4 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                {/* Navigation */}
               <div className="mt-6 grid grid-cols-2 gap-3 lg:mt-10 lg:block lg:space-y-2">
                  {docsSections.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={index}
                        href={item.href}
                      className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-3 py-3 transition hover:bg-[#F8FAFC] lg:border-0 lg:bg-transparent lg:px-4"
                      >
                        
                        <div className="flex items-center gap-3">
                          
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                            <Icon className="h-4 w-4" />
                          </div>

                          <span className="text-sm font-medium text-slate-700">
                            {item.title}
                          </span>
                        </div>

                        <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#2563EB]" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="px-0 py-12 lg:px-16">
              
              {/* Top Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB]">
                Registration Care Documentation
              </div>

              {/* Heading */}
              <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-[#0B1F33] md:text-6xl">
                Business Registration & Compliance Documentation
              </h1>

              <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
                Structured business registration documentation,
                compliance guidance, consultation resources and
                professional support knowledge base for startups,
                entrepreneurs and businesses across India.
              </p>

              {/* Mobile Search */}
              <div className="mt-10 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 lg:hidden">
                
                <Search className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Quick Start */}
              <div className="mt-16">
                
                <h2 className="text-3xl font-bold tracking-tight text-[#0B1F33]">
                  Quick Start Documentation
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Explore structured documentation resources and
                  registration guidance for various business compliance
                  requirements and government registrations.
                </p>

                {/* Docs Grid */}
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {docsSections.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                      >
                        
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
                          <Icon className="h-7 w-7" />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#0B1F33]">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-[15px] leading-7 text-slate-600">
                          Structured documentation and professional
                          guidance related to {item.title.toLowerCase()}.
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                          Explore Documentation

                          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-20 rounded-[2rem] border border-blue-100 bg-blue-50 p-10">
                
                <h2 className="text-4xl font-bold tracking-tight text-[#0B1F33]">
                  Need Professional Business Assistance?
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Registration Care provides structured registration,
                  documentation and compliance consultation services
                  for startups, entrepreneurs and businesses across India.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#2563EB] px-7 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1D4ED8]"
                  >
                    Get Consultation
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 text-sm font-semibold text-[#0B1F33] transition hover:bg-slate-50"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}