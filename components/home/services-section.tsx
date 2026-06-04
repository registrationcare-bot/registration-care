
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-50 blur-3xl" />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#059669]">
            Our Services
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Registration & Compliance Services For Modern Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Professional consultation and structured assistance for startups,
            entrepreneurs and businesses across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((service) => service.popular)
            .slice(0, 6)
            .map((service, index) => {
              const imagePath = `/images/services/${service.slug}-illustration.png`;

              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-green-100 hover:shadow-[0_25px_70px_rgba(16,185,129,0.10)]"
                >
                  {/* Illustration Area */}
                  <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5]">
                    <Image
                      src={imagePath}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {service.popular && (
                      <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#059669] to-[#10B981] px-4 py-2 text-xs font-bold text-white shadow-lg">
                        ⭐ Popular
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold leading-tight text-[#0B1F33]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {service.description}
                    </p>

                    {service.highlights &&
                    service.highlights.length > 0 ? (
                      <div className="mt-6 space-y-3">
                        {service.highlights
                          .slice(0, 3)
                          .map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <span className="text-[#10B981]">✓</span>
                              {item}
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="text-[#10B981]">✓</span>
                          Professional Assistance
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="text-[#10B981]">✓</span>
                          Documentation Support
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="text-[#10B981]">✓</span>
                          Expert Consultation
                        </div>
                      </div>
                    )}

                    {/* Price */}
                    <div className="mt-6 border-t border-slate-100 pt-6">
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Starting From
                      </p>

                      <p className="mt-1 text-2xl font-bold text-[#059669]">
                        {service.startingPrice || "Contact Us"}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#059669] transition group-hover:gap-3">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#059669] px-8 py-4 font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#047857]"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
