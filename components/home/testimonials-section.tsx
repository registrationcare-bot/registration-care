import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    image: "rahul-sharma.jpg",
    business: "E-commerce Seller",
    service: "GST Registration",
    review:
      "The GST registration process was handled professionally. The team kept me informed throughout and made the entire process hassle-free.",
  },
  {
    name: "Priya Verma",
    image: "priya-verma.jpg",
    business: "Food Business Owner",
    service: "FSSAI License",
    review:
      "Excellent documentation support and clear communication. The licensing process was completed smoothly and on time.",
  },
  {
    name: "Amit Kumar",
    image: "amit-kumar.jpg",
    business: "Startup Founder",
    service: "Company Registration",
    review:
      "Professional guidance throughout company incorporation. The team helped us understand every step clearly.",
  },
  {
    name: "Sneha Gupta",
    image: "sneha-gupta.jpg",
    business: "Retail Business Owner",
    service: "Trademark Registration",
    review:
      "The trademark filing process was straightforward and transparent. Highly satisfied with the support received.",
  },
  {
    name: "Vikram Singh",
    image: "vikram-singh.jpg",
    business: "Importer & Exporter",
    service: "IEC Registration",
    review:
      "Quick assistance and regular updates. IEC registration was completed faster than expected.",
  },
  {
    name: "Neha Agarwal",
    image: "neha-agarwal.jpg",
    business: "Small Business Owner",
    service: "MSME Registration",
    review:
      "Responsive support team and smooth documentation process. Great experience overall.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Client Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Trusted By Startups & Businesses Across India
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Real experiences from entrepreneurs, startups and business owners
            who used Registration Care services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              {/* Top */}
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-slate-200">
                  <Image
                    src={`/images/testimonials/${item.image}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-[#0B1F33]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.business}
                  </p>
                </div>
              </div>

              {/* Service Badge */}
              <div className="mt-5 inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#2563EB]">
                {item.service}
              </div>

              {/* Stars */}
              <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <div className="mt-5">
                <Quote className="h-8 w-8 text-blue-100" />
              </div>

              {/* Review */}
              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-6 py-5">
          <div className="text-sm font-medium text-slate-700">
            ⭐ 5-Star Client Experience
          </div>

          <div className="text-sm font-medium text-slate-700">
            ✓ Transparent Communication
          </div>

          <div className="text-sm font-medium text-slate-700">
            ✓ Documentation Support
          </div>

          <div className="text-sm font-medium text-slate-700">
            ✓ Dedicated Assistance
          </div>
        </div>
      </div>
    </section>
  );
}