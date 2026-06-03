
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Link from "next/link";

import { notFound } from "next/navigation";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileText,
  ShieldCheck,
  Building2,
} from "lucide-react";

import { services } from "@/data/services";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#FCFEFC]">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-[#E7EFEA] bg-[#F6FBF7]">
        <div className="container-custom section-padding">
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* LEFT */}
            <div>
              
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FBE2C4] bg-[#FFF4E8] px-4 py-2 text-sm font-medium text-[#F59E0B]">
                
                <ShieldCheck className="h-4 w-4" />

                {service.category || "Business Registration"}
              </div>

              <h1 className="mt-6 text-5xl font-bold leading-tight text-[#0B1F33]">
                {service.title}
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {service.overview}
              </p>

              {service.highlights &&
  service.highlights.length > 0 && (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {service.highlights.map(
        (item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-2xl border border-[#D8E8DD] bg-white px-4 py-3"
          >
            <BadgeCheck className="h-5 w-5 text-[#16A34A]" />

            <span className="text-sm font-medium text-[#0B1F33]">
              {item}
            </span>
          </div>
        )
      )}
    </div>
)}

              {/* TRUST BADGES */}
              <div className="mt-8 flex flex-wrap gap-3">
                
                <div className="rounded-full border border-[#D8E8DD] bg-[#F2F8F4] px-4 py-2 text-sm font-medium text-[#15803D]">
                  Documentation Support
                </div>

                <div className="rounded-full border border-[#D8E8DD] bg-[#F2F8F4] px-4 py-2 text-sm font-medium text-[#15803D]">
                  Startup Friendly
                </div>

                <div className="rounded-full border border-[#D8E8DD] bg-[#F2F8F4] px-4 py-2 text-sm font-medium text-[#15803D]">
                  Consultation Assistance
                </div>
              </div>

              {/* CTA */}
{service.startingPrice && (
  <div className="mt-8">
    <p className="text-sm text-slate-500">
      Starting From
    </p>

    <p className="text-4xl font-bold text-[#16A34A]">
      {service.startingPrice}
    </p>
  </div>
)}

              <div className="mt-10 flex flex-wrap gap-4">
                
                <Link
                  href={`/apply/${service.slug}`}
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#F59E0B] px-6 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
                >
                  Start Registration Process

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#D8E8DD] bg-white px-6 text-sm font-semibold text-[#0B1F33] transition hover:bg-[#F8FAF8]"
                >
                  Talk to Expert
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[2rem] border border-[#D8E8DD] bg-white p-8 shadow-sm">
              
              <h2 className="text-2xl font-bold text-[#0B1F33]">
  Why Businesses Choose This Service
</h2>

<p className="mt-3 text-slate-600">
  Trusted registration assistance with
  expert documentation support and
  guided application processing.
</p>

<div className="mt-8 grid grid-cols-2 gap-4">
  <div className="rounded-2xl bg-[#F6FBF7] p-5">
    <p className="text-sm text-slate-500">
      Timeline
    </p>

    <p className="mt-2 text-xl font-bold text-[#0B1F33]">
      {service.timeline || "3-7 Days"}
    </p>
  </div>

  <div className="rounded-2xl bg-[#FFF4E8] p-5">
    <p className="text-sm text-slate-500">
      Starting From
    </p>

    <p className="mt-2 text-xl font-bold text-[#F59E0B]">
      {service.startingPrice || "Contact Us"}
    </p>
  </div>
</div> 

<div className="mt-8 rounded-[2rem] border border-[#D8E8DD] bg-[#F6FBF7] p-8 text-center">
  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
    <Building2 className="h-12 w-12 text-[#16A34A]" />
  </div>

  <h3 className="mt-6 text-lg font-semibold text-[#0B1F33]">
    Registration Assistance
  </h3>

  <p className="mt-3 text-sm leading-7 text-slate-600">
    Professional support for documentation,
    compliance and registration requirements.
  </p>
</div>

              <div className="mt-8 space-y-5">
                
                <div className="flex items-start gap-4">
                  
                  <div className="rounded-xl bg-[#FFF4E8] p-3 text-[#F59E0B]">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0B1F33]">
                      Estimated Timeline
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      {service.timeline ||
                        "Timeline may vary depending on application verification."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  
                  <div className="rounded-xl bg-[#F2F8F4] p-3 text-[#16A34A]">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0B1F33]">
                      Documentation Assistance
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Structured consultation and documentation guidance
                      based on service requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  
                  <div className="rounded-xl bg-[#F2F8F4] p-3 text-[#16A34A]">
                    <BadgeCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0B1F33]">
                      Professional Support
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Consultation assistance for startups,
                      entrepreneurs and businesses across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      {service.eligibility && service.eligibility.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            
            <div className="max-w-3xl">
              
              <h2 className="text-4xl font-bold text-[#0B1F33]">
                Eligibility
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Businesses and individuals commonly eligible for{" "}
                {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {service.eligibility.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-[#D8E8DD] bg-[#F2F8F4] p-6"
                >
                  <div className="flex items-start gap-4">
                    
                    <div className="rounded-xl bg-white p-3 text-[#16A34A]">
                      <BadgeCheck className="h-5 w-5" />
                    </div>

                    <h3 className="font-semibold text-[#0B1F33]">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DOCUMENTS */}
      {service.documents && service.documents.length > 0 && (
        <section className="border-y border-[#E7EFEA] bg-[#F6FBF7] section-padding">
          <div className="container-custom">
            
            <div className="max-w-3xl">
              
              <h2 className="text-4xl font-bold text-[#0B1F33]">
                Required Documents
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Commonly required documents for{" "}
                {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {service.documents.map((document, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-[#D8E8DD] bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    
                    <div className="rounded-xl bg-[#FFF4E8] p-3 text-[#F59E0B]">
                      <FileText className="h-5 w-5" />
                    </div>

                    <h3 className="font-semibold text-[#0B1F33]">
                      {document}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      {service.process && service.process.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            
            <div className="max-w-3xl">
              
              <h2 className="text-4xl font-bold text-[#0B1F33]">
                Registration Process
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Structured consultation and onboarding process.
              </p>
            </div>

            <div className="mt-14 space-y-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-5 rounded-3xl border border-[#D8E8DD] bg-white p-6"
                >
                  
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4E8] text-lg font-bold text-[#F59E0B]">
                    {index + 1}
                  </div>

                  <h3 className="pt-2 text-lg font-semibold text-[#0B1F33]">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="border-y border-[#E7EFEA] bg-[#F6FBF7] section-padding">
          <div className="container-custom">
            
            <div className="max-w-3xl">
              
              <h2 className="text-4xl font-bold text-[#0B1F33]">
                Benefits
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Key business advantages and compliance benefits.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-[#D8E8DD] bg-white p-6"
                >
                  <div className="flex items-start gap-4">
                    
                    <div className="rounded-xl bg-[#F2F8F4] p-3 text-[#16A34A]">
                      <BadgeCheck className="h-5 w-5" />
                    </div>

                    <h3 className="font-semibold text-[#0B1F33]">
                      {benefit}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GOVERNMENT INFO */}
      {service.governmentReference && (
        <section className="section-padding">
          <div className="container-custom">
            
            <div className="rounded-[2rem] border border-[#D8E8DD] bg-white p-10">
              
              <div className="flex items-center gap-3">
                
                <div className="rounded-2xl bg-[#F2F8F4] p-3 text-[#16A34A]">
                  <Building2 className="h-6 w-6" />
                </div>

                <h2 className="text-3xl font-bold text-[#0B1F33]">
                  Government Information
                </h2>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                
                <div>
                  <h3 className="text-lg font-semibold text-[#0B1F33]">
                    Authority
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.governmentReference.authority}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0B1F33]">
                    Portal
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.governmentReference.portal}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#0B1F33]">
                  Purpose
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.governmentReference.purpose}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="border-y border-[#E7EFEA] bg-[#F6FBF7] section-padding">
          <div className="container-custom">
            
            <div className="max-w-3xl">
              
              <h2 className="text-4xl font-bold text-[#0B1F33]">
                Frequently Asked Questions
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Common questions related to{" "}
                {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-[#D8E8DD] bg-white p-8"
                >
                  <h3 className="text-xl font-semibold text-[#0B1F33]">
                    {faq.question}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-[#E7EFEA] bg-[#FFFDF8] section-padding">
        <div className="container-custom">
          
          <div className="rounded-[2rem] border border-[#F4E7D3] bg-white p-10 text-center">
            
            <h2 className="text-4xl font-bold text-[#0B1F33]">
              Need Professional Consultation Support?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Registration Care provides structured consultation
              and documentation assistance for startups,
              entrepreneurs and businesses across India.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              
              <Link
                href={`/apply/${service.slug}`}
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#F59E0B] px-6 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
              >
                Start Registration Process
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#D8E8DD] bg-white px-6 text-sm font-semibold text-[#0B1F33] transition hover:bg-[#F8FAF8]"
              >
                Talk to Expert
              </Link>
            </div>

            <p className="mt-8 text-sm leading-7 text-slate-500">
              Registration Care provides consultation and
              documentation assistance services and is not
              a government authority.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
