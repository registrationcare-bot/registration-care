import Link from "next/link";

import {
  FileText,
  BadgeCheck,
  Building2,
  ShieldCheck,
  BriefcaseBusiness,
  FileBadge,
  ArrowRight,
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
      "Udyam registration guidance and MSME documentation support.",
    href: "/services/msme-registration",
    icon: BadgeCheck,
  },
  {
    title: "FSSAI License",
    description:
      "FSSAI licensing support for food businesses and home kitchens.",
    href: "/services/fssai-license",
    icon: ShieldCheck,
  },
  {
    title: "Trademark Registration",
    description:
      "Trademark filing and intellectual property consultation services.",
    href: "/services/trademark-registration",
    icon: FileBadge,
  },
  {
    title: "Company Registration",
    description:
      "Private limited company and startup incorporation support.",
    href: "/services/company-registration",
    icon: Building2,
  },
  {
    title: "IEC Code",
    description:
      "Import Export Code registration assistance for businesses.",
    href: "/services/iec-code",
    icon: BriefcaseBusiness,
  },

  {
  title: "GeM Registration",
  description:
    "Government e-Marketplace registration and onboarding support.",
  href: "/services/gem-registration",
  icon: BadgeCheck,
},
{
  title: "Income Tax Filing",
  description:
    "Professional income tax return filing and consultation services.",
  href: "/services/income-tax-filing",
  icon: BriefcaseBusiness,
},
{
  title: "Startup India Registration",
  description:
    "Startup India recognition and DPIIT registration assistance for startups.",
  href: "/services/startup-india-registration",
  icon: Building2,
},
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      
      <div className="container-custom">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#059669]">
            Our Services
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Registration & Compliance Services For Modern Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Professional consultation and structured assistance
            for startups, entrepreneurs and businesses across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                href={service.href}
                className="group relative overflow-hidden rounded-[2rem] border border-[#D1FAE5] bg-[#F8FFFC] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#A7F3D0] hover:bg-white hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
              >
                
                {/* Glow */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-100/30 blur-3xl transition group-hover:bg-green-100/50" />

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-[#D1FAE5] bg-[#ECFDF3] text-[#059669] transition group-hover:scale-105 group-hover:bg-[#059669] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="relative">
                  
                  <h3 className="mt-7 text-[28px] font-semibold leading-tight text-[#0B1F33]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#059669] transition group-hover:gap-3">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}