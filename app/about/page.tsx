import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import {
  ShieldCheck,
  BadgeCheck,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    title: "Professional Assistance",
    description:
      "Structured guidance for business registrations and compliance processes.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and process-oriented consultation support.",
    icon: BadgeCheck,
  },
  {
    title: "Business-Focused Approach",
    description:
      "Designed to support startups, entrepreneurs and growing businesses.",
    icon: Users,
  },
  {
    title: "Modern Compliance Support",
    description:
      "Professional registration assistance with a modern digital-first approach.",
    icon: BriefcaseBusiness,
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-[#F8FAFC]">
        <div className="container-custom section-padding">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">
            About Registration Care
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight text-[#0B1F33]">
            Professional Business Registration & Compliance Assistance
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Registration Care is focused on helping startups,
            entrepreneurs and businesses simplify registration
            and compliance-related processes through structured
            consultation and documentation support.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-16 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-[#0B1F33]">
              Simplifying Business Compliance For Modern Businesses
            </h2>

            <div className="mt-6 space-y-6 leading-8 text-slate-600">
              
              <p>
                Our goal is to provide professional assistance
                for registrations, documentation and compliance-related
                processes through a structured and transparent approach.
              </p>

              <p>
                We support businesses with services including
                GST registration, MSME registration, FSSAI licensing,
                trademark registration and other compliance-related assistance.
              </p>

              <p>
                Registration Care is designed to simplify business
                processes for startups, entrepreneurs and growing businesses
                seeking reliable consultation and guidance.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 md:p-10">
            
            <h3 className="text-3xl font-bold text-[#0B1F33]">
              Why Businesses Choose Us
            </h3>

            <div className="mt-10 space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-[#0B1F33]">
                        {feature.title}
                      </h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0B1F33] text-white">
        <div className="container-custom">
          
          <div className="mx-auto max-w-4xl text-center">
            
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Get Started
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Need Assistance With Business Registrations?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Connect with our team for professional consultation
              and registration assistance for your business.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              
              <button className="h-12 rounded-xl bg-[#1D4ED8] px-8 text-base font-medium text-white transition hover:bg-blue-700">
                Get Consultation
              </button>

              <button className="h-12 rounded-xl border border-white/20 bg-white/5 px-8 text-base text-white transition hover:bg-white hover:text-[#0B1F33]">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}