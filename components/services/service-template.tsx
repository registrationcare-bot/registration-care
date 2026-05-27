import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceTemplateProps {
  service: {
    title: string;
    description: string;
    overview: string;

    benefits: string[];

    documents: string[];

    process?: string[];

    faqs?: {
      question: string;
      answer: string;
    }[];
  };
}


export default function ServiceTemplate({
  service,
}: ServiceTemplateProps) {
  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="border-b border-slate-100 bg-[#F8FAFC]">
        <div className="container-custom section-padding">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">
            Professional Assistance
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight text-[#0B1F33]">
            {service.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {service.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="h-12 rounded-xl bg-[#1D4ED8] px-8 text-base hover:bg-blue-700">
              Get Consultation
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-xl px-8"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom grid gap-16 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-[#0B1F33]">
              Service Overview
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {service.overview}
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8">
            <h3 className="text-2xl font-semibold text-[#0B1F33]">
              Key Benefits
            </h3>

            <div className="mt-6 space-y-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4"
                >
                  <div className="h-2 w-2 rounded-full bg-[#1D4ED8]" />

                  <span className="text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          
          <h2 className="text-3xl font-bold text-[#0B1F33]">
            Required Documents
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {service.documents.map((document, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <p className="font-medium text-[#0B1F33]">
                  {document}
                </p>
              </div>
            ))}

            
          </div>
        </div>
      </section>
 
 {/* Process */}
<section className="section-padding">
  <div className="container-custom">
    
    <h2 className="text-3xl font-bold text-[#0B1F33]">
      Registration Process
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {service.process?.map((step, index) => (
        <div
          key={index}
          className="rounded-3xl border border-slate-200 bg-white p-6"
        >
          <div className="text-4xl font-bold text-slate-100">
            0{index + 1}
          </div>

          <p className="mt-4 leading-7 text-slate-700">
            {step}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQs */}
<section className="section-padding bg-[#F8FAFC]">
  <div className="container-custom">
    
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-[#0B1F33]">
        Frequently Asked Questions
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Common questions related to {service.title.toLowerCase()} and registration assistance.
      </p>
    </div>

    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-4 md:p-8">
      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {service.faqs?.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-slate-100"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-[#0B1F33] hover:no-underline">
              {faq.question}
            </AccordionTrigger>

            <AccordionContent className="leading-7 text-slate-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>

{/* Related Services */}
<section className="section-padding bg-white">
  <div className="container-custom">
    
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-[#0B1F33]">
        Related Services
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Explore additional registration and compliance services
        for businesses and startups.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      
      <Link
        href="/services/msme-registration"
        className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-sm"
      >
        <h3 className="text-2xl font-semibold text-[#0B1F33]">
          MSME Registration
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Udyam registration and MSME support services for businesses.
        </p>
      </Link>

      <Link
        href="/services/fssai-license"
        className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-sm"
      >
        <h3 className="text-2xl font-semibold text-[#0B1F33]">
          FSSAI License
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Food business licensing and compliance assistance.
        </p>
      </Link>

      <Link
        href="/services/trademark-registration"
        className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-sm"
      >
        <h3 className="text-2xl font-semibold text-[#0B1F33]">
          Trademark Registration
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Brand protection and trademark filing consultation support.
        </p>
      </Link>
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
        Need Professional Assistance For {service.title}?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        Connect with our team for consultation, documentation
        assistance and registration support for your business.
      </p>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        
        <button className="h-12 rounded-xl bg-[#1D4ED8] px-8 text-base font-medium text-white transition hover:bg-blue-700">
          Get Free Consultation
        </button>

        <button className="h-12 rounded-xl border border-white/20 bg-white/5 px-8 text-base text-white transition hover:bg-white hover:text-[#0B1F33]">
          Contact Support
        </button>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
        <div>✔ Professional Guidance</div>
        <div>✔ Transparent Process</div>
        <div>✔ Responsive Support</div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}