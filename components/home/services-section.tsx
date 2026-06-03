import { services } from "@/data/services";
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
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         
         {services
  .filter((service) => service.popular)
  .slice(0, 6)
  .map((service, index) => {
            

            return (
              <Link
              
                key={index}
               href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-[2rem] border border-[#D1FAE5] bg-[#F8FFFC] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#A7F3D0] hover:bg-white hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]"
              >
                {service.popular && (
  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#059669] to-[#10B981] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
    ⭐ Popular
  </div>
)}
                
                {/* Glow */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-100/30 blur-3xl transition group-hover:bg-green-100/50" />

                {/* Icon */}
               <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-[#D1FAE5] bg-[#ECFDF3] text-[#059669]">
  <span className="text-xl font-bold">
   <span className="text-lg font-bold">
  {service.title
    .split(" ")
    .map(word => word[0])
    .slice(0, 2)
    .join("")}
</span>
  </span>
</div>

                {/* Content */}
                <div className="relative">
                  
                  <h3 className="mt-7 text-[28px] font-semibold leading-tight text-[#0B1F33]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {service.highlights &&
service.highlights.length > 0 ? (
  <div className="mt-5 space-y-2">
    {service.highlights
      .slice(0, 3)
      .map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-sm text-slate-600"
        >
          <span className="text-green-600">
            ✓
          </span>

          {item}
        </div>
      ))}
  </div>
) : (
  <div className="mt-5 space-y-2">
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <span className="text-green-600">✓</span>
      Professional Assistance
    </div>

    <div className="flex items-center gap-2 text-sm text-slate-600">
      <span className="text-green-600">✓</span>
      Documentation Support
    </div>

    <div className="flex items-center gap-2 text-sm text-slate-600">
      <span className="text-green-600">✓</span>
      Expert Consultation
    </div>
  </div>
)}

{service.startingPrice ? (
  <div className="mt-5">
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Starting From
    </p>

    <p className="text-2xl font-bold text-[#059669]">
      {service.startingPrice}
    </p>
  </div>
) : (
  <div className="mt-5">
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Starting From
    </p>

    <p className="text-2xl font-bold text-[#059669]">
      Contact Us
    </p>
  </div>
)}

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

        <div className="mt-12 text-center">
  <Link
    href="/services"
    className="inline-flex items-center gap-2 rounded-xl bg-[#059669] px-6 py-3 font-semibold text-white transition hover:bg-[#047857]"
  >
    View All Services
    <ArrowRight className="h-4 w-4" />
  </Link>
</div>
      </div>
    </section>
  );
}