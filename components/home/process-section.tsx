import {
  MessageSquareMore,
  FileCheck2,
  ClipboardCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    title: "Consultation",
    description:
      "Discuss your business requirements and registration needs with our support team.",
    icon: MessageSquareMore,
  },
  {
    title: "Document Collection",
    description:
      "Secure submission and structured verification of required documents.",
    icon: FileCheck2,
  },
  {
    title: "Application Processing",
    description:
      "Professional preparation and processing of registration applications.",
    icon: ClipboardCheck,
  },
  {
    title: "Registration Completion",
    description:
      "Application completion, updates and compliance-related assistance.",
    icon: BadgeCheck,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#FFF7ED] py-20">
      
      <div className="container-custom">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C]">
            Simple Process
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Professional Assistance Through Every Step
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Registration Care follows a structured consultation
            and documentation process to help businesses
            complete registrations with clarity and confidence.
          </p>
        </div>

        {/* Process Grid */}
        <div className="relative mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-[#FED7AA] bg-[#FFFBF5] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FDBA74] hover:bg-white hover:shadow-[0_20px_60px_rgba(234,88,12,0.08)]"
              >
                
                {/* Background Glow */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-100/30 blur-3xl transition group-hover:bg-orange-100/50" />

                {/* Step Number */}
                <div className="absolute right-6 top-5 text-5xl font-bold text-orange-100">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-[#FED7AA] bg-[#FFEDD5] text-[#EA580C] transition group-hover:scale-105 group-hover:bg-[#EA580C] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="relative">
                  
                  <h3 className="mt-7 text-[28px] font-semibold leading-tight text-[#0B1F33]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {/* Learn More */}
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#EA580C] transition group-hover:gap-3">
                    Step {index + 1}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}