
import {
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Clock3,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

const trustItems = [
  {
    title: "Secure Documentation",
    description:
      "Safe handling of business registration and compliance documents with a structured process.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Guidance",
    description:
      "Professional assistance for GST, MSME, FSSAI, Trademark and business registrations.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Response",
    description:
      "Quick support and consultation to help businesses move forward without delays.",
    icon: Clock3,
  },
  {
    title: "Dedicated Assistance",
    description:
      "Guidance throughout documentation, registration and compliance processes.",
    icon: Headphones,
  },
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
    value: "100%",
    label: "Transparent Process",
  },
  {
    value: "24/7",
    label: "WhatsApp Support",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB]">
            <CheckCircle2 className="h-4 w-4" />
            Trusted Registration Assistance
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Why Businesses Choose Registration Care
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Professional assistance for registrations, documentation and
            compliance-related processes with a transparent and structured
            approach.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
            >
              <div className="text-4xl font-bold tracking-tight text-[#0B1F33]">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                {/* Glow */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-50 opacity-0 blur-2xl transition group-hover:opacity-100" />

                <div className="relative">
                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 min-h-[56px] text-center text-xl font-semibold text-[#0B1F33]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-center text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

       </div>
    </section>
  );
}
