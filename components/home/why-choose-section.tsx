import {
  ShieldCheck,
  MessagesSquare,
  FileSearch,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    title: "Structured Guidance",
    description:
      "Professional assistance throughout the registration process.",
    icon: ShieldCheck,
  },
  {
    title: "Documentation Support",
    description:
      "Help with document preparation, review and submission.",
    icon: FileSearch,
  },
  {
    title: "Transparent Communication",
    description:
      "Clear updates and progress tracking throughout your application.",
    icon: MessagesSquare,
  },
  {
    title: "Dedicated Support",
    description:
      "Responsive assistance for startups and growing businesses.",
    icon: Headphones,
  },
];

const trustPoints = [
  "Secure Process",
  "Expert Assistance",
  "WhatsApp Support",
  "Startup Friendly",
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Why Choose Registration Care
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0B1F33] md:text-4xl">
            Professional Registration Assistance
          </h2>

          <p className="mx-auto mt-4 text-base leading-7 text-slate-600">
            Structured support for business registrations,
            documentation and compliance services across India.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#0B1F33]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-white px-6 py-5">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}