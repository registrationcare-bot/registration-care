import {
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Clock3,
} from "lucide-react";

const trustItems = [
  {
    title: "Secure Process",
    description:
      "Safe document handling and structured registration assistance for businesses.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Assistance",
    description:
      "Professional guidance for registrations and compliance-related processes.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Support",
    description:
      "Quick responses and streamlined consultation support for businesses.",
    icon: Clock3,
  },
  {
    title: "Dedicated Help",
    description:
      "Consultation support throughout the registration and documentation process.",
    icon: Headphones,
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Why Businesses Choose Us
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Professional Registration Assistance With A Structured Approach
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Registration Care helps startups and businesses
            simplify registrations and compliance-related
            processes through professional consultation
            and structured assistance.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
              >
                
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-[26px] font-semibold leading-tight text-[#0B1F33]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}