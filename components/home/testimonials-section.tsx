import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    business: "E-commerce Seller",
    review:
      "The team guided me through the GST registration process and answered all my questions promptly. The overall experience was smooth and professional.",
  },
  {
    name: "Priya Verma",
    business: "Food Business Owner",
    review:
      "I needed assistance with FSSAI licensing and documentation. Registration Care provided clear guidance and regular updates throughout the process.",
  },
  {
    name: "Amit Kumar",
    business: "Startup Founder",
    review:
      "The consultation was helpful and the documentation support saved us a lot of time. I would recommend their services to new businesses.",
  },
  {
    name: "Sneha Gupta",
    business: "Retail Business Owner",
    review:
      "Very professional communication and a structured process. The team helped us understand the requirements and complete the registration smoothly.",
  },
  {
    name: "Vikram Singh",
    business: "Importer & Exporter",
    review:
      "Excellent support for IEC registration. The guidance was clear and the process was much easier than I expected.",
  },
  {
    name: "Neha Agarwal",
    business: "Small Business Owner",
    review:
      "Responsive support, transparent communication and professional assistance throughout the registration journey.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Client Feedback
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            What Businesses Say About Registration Care
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Feedback from business owners who received registration and
            compliance-related assistance.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 text-[15px] leading-8 text-slate-600">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-sm font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <p className="font-semibold text-[#0B1F33]">
                    {item.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    {item.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Box */}
        <div className="mt-16 rounded-[2.5rem] bg-[#0B1F33] p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Trusted Assistance
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Supporting Businesses Across India
              </h3>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-300">
                Registration Care provides structured guidance and
                professional assistance for registrations, documentation
                and compliance-related processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}