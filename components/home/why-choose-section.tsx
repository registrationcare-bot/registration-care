import {
  ShieldCheck,
  MessagesSquare,
  FileSearch,
  Building2,
} from "lucide-react";

const features = [
  {
    title: "Structured Guidance",
    description:
      "Professional assistance through registration and compliance-related processes.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Communication",
    description:
      "Clear updates and process-oriented support throughout the consultation journey.",
    icon: MessagesSquare,
  },
  {
    title: "Documentation Support",
    description:
      "Organized assistance for document collection, review and application preparation.",
    icon: FileSearch,
  },
  {
    title: "Startup-Friendly Approach",
    description:
      "Designed for startups, entrepreneurs and businesses seeking modern compliance support.",
    icon: Building2,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#F1F5F9] py-20">
      
      <div className="container-custom">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Why Choose Registration Care
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Professional Assistance With A Modern Consultation Approach
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Registration Care focuses on structured guidance,
            transparent communication and professional assistance
            for startups and businesses across India.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="mt-7 text-[30px] font-semibold leading-tight text-[#0B1F33]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[15px] leading-8 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Card */}
        <div className="mt-16 rounded-[2.5rem] bg-[#0B1F33] p-10 text-white">
          
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            
            {/* Left */}
            <div>
              
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Business Support
              </p>

              <h3 className="mt-5 text-4xl font-bold leading-tight">
                Helping Businesses Navigate Registrations With Confidence
              </h3>
            </div>

            {/* Right */}
            <div>
              
              <p className="text-lg leading-8 text-slate-300">
                Registration Care provides consultation and
                compliance-related assistance for startups,
                entrepreneurs and businesses seeking structured
                support for registrations and documentation processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}