"use client";

import Link from "next/link";
import { useMemo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    question: "What services does Registration Care provide?",
    answer:
      "Registration Care provides professional consultation and assistance for GST Registration, MSME/Udyam Registration, FSSAI License, Trademark Registration, Company Registration, IEC Code Registration and other business compliance-related services. Our objective is to help entrepreneurs, startups and established businesses understand registration requirements, documentation needs and compliance procedures through a structured and transparent process. We focus on simplifying complex registration workflows while providing guidance throughout the application journey.",
  },

  {
    category: "General",
    question: "How does the registration process generally work?",
    answer:
      "The process usually begins with understanding your business requirements and determining the most suitable registration or compliance service. After consultation, the required documents are identified and reviewed. Once documentation is complete, application preparation and submission assistance is provided. Depending on the selected service, additional follow-up, clarification or status support may be required. Timelines can vary based on regulatory requirements, document accuracy and application complexity.",
  },

  {
    category: "General",
    question: "Who can apply for business registration services?",
    answer:
      "Business registration services may be relevant for entrepreneurs, startups, freelancers, proprietorships, partnerships, LLPs, private limited companies, manufacturers, traders, service providers and other entities depending on the nature of their operations. Eligibility requirements differ across registration categories. Before applying, businesses should evaluate their objectives, operational structure and applicable regulatory obligations to determine the registrations that may be appropriate for them.",
  },

  {
    category: "Documentation",
    question: "What documents are generally required for registration services?",
    answer:
      "Document requirements vary depending on the selected service and business structure. Commonly requested documents may include identity proof, address proof, photographs, business address details, contact information and supporting business-related documentation. Certain registrations may require additional declarations, authorizations or regulatory documents. Accurate and complete documentation is important because incomplete submissions can lead to delays, clarification requests or application rejections.",
  },

  {
    category: "GST Registration",
    question: "What is GST registration and who may need it?",
    answer:
      "GST registration is a tax registration process applicable to businesses that satisfy prescribed conditions under GST regulations. Requirements can depend on factors such as annual turnover, interstate supplies, e-commerce activities, business category and other regulatory provisions. Registration allows eligible businesses to operate within the GST framework and comply with applicable tax requirements. Businesses should review their specific circumstances and seek professional guidance before determining whether GST registration is necessary.",
  },

  {
    category: "GST Registration",
    question: "What are the benefits of GST registration?",
    answer:
      "GST registration may help eligible businesses operate within the formal tax system, improve business credibility, support participation in certain commercial opportunities and facilitate compliance with applicable regulations. Depending on the nature of operations, registration can also be important when dealing with suppliers, customers and business partners that require GST-compliant transactions. The exact advantages vary based on industry, business model and regulatory obligations.",
  },

  {
    category: "MSME Registration",
    question: "What is MSME or Udyam Registration?",
    answer:
      "MSME Registration, commonly known as Udyam Registration, is a government-recognized registration framework for Micro, Small and Medium Enterprises. Eligible businesses can use Udyam Registration as an official recognition of their MSME status. Depending on eligibility and applicable policies, registered enterprises may benefit from various business support initiatives, financing opportunities, procurement participation and other programs designed for MSMEs.",
  },

  {
    category: "MSME Registration",
    question: "What are the advantages of MSME registration?",
    answer:
      "MSME registration can help businesses establish recognized MSME status and may provide access to opportunities available under various schemes, procurement initiatives and business support programs. Benefits and eligibility can vary over time based on government policies and applicable regulations. Businesses should evaluate their specific circumstances and consult official guidelines to understand which opportunities may be available to them.",
  },

  {
    category: "FSSAI License",
    question: "Who needs an FSSAI License or Registration?",
    answer:
      "Food business operators involved in manufacturing, processing, packaging, storage, transportation, distribution or sale of food products may be required to obtain FSSAI Registration or an FSSAI License depending on the scale and nature of operations. The applicable category is determined by various regulatory criteria. Businesses engaged in food-related activities should assess their obligations carefully to ensure compliance with food safety requirements.",
  },

  {
    category: "FSSAI License",
    question: "What documents are generally required for FSSAI registration?",
    answer:
      "FSSAI documentation requirements vary depending on the category of registration or license being applied for. Common requirements may include identity proof, address proof, business details, food business information and additional supporting documentation relevant to the specific operation. Certain categories may require more extensive documentation. Ensuring that documents are accurate and complete can significantly improve application efficiency.",
  },
];

export default function FAQSection() {
  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    []
  );

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB]">
            Frequently Asked Questions
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Common Questions About Business Registration & Compliance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore answers to frequently asked questions related to GST
            Registration, MSME Registration, FSSAI Licensing, Trademark
            Registration, Company Registration and other business compliance
            services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
  <Accordion
    type="single"
    collapsible
    className="space-y-5"
  >
    {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                  <div className="flex flex-col items-start gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                      {faq.category}
                    </span>

                    <span className="text-lg font-semibold leading-7 text-[#0B1F33]">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                  <div className="border-l-4 border-blue-100 pl-5">
                    <p className="text-[15px] leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}

            {/* Additional Premium FAQs */}

            {[
              {
                category: "Trademark Registration",
                question:
                  "Why is trademark registration important for a business?",
                answer:
                  "Trademark registration helps businesses protect distinctive brand elements such as names, logos, slogans and other identifiers associated with their products or services. A registered trademark can strengthen brand identity, reduce the likelihood of marketplace confusion and contribute to long-term brand value. Businesses planning to invest in branding often consider trademark protection as an important part of their intellectual property strategy.",
              },

              {
                category: "Company Registration",
                question:
                  "What are the common types of business entities in India?",
                answer:
                  "Businesses may operate through structures such as Sole Proprietorships, Partnerships, Limited Liability Partnerships (LLPs), Private Limited Companies and One Person Companies (OPCs). Each structure has different compliance requirements, liability considerations, ownership rules and operational flexibility. Selecting an appropriate structure depends on business goals, funding requirements, ownership preferences and future growth plans.",
              },

              {
                category: "IEC Registration",
                question:
                  "What is an IEC Code and who may require it?",
                answer:
                  "IEC, or Import Export Code, is a business identification number generally required for businesses involved in import or export activities. Businesses intending to engage in international trade may need IEC registration depending on applicable regulations and operational requirements. The registration process and documentation requirements can vary based on the nature of the business.",
              },

              {
                category: "Support",
                question:
                  "Do you provide assistance after application submission?",
                answer:
                  "Yes. Registration Care aims to provide support throughout the registration journey. Depending on the service selected, assistance may include status updates, clarification support, document-related communication and guidance regarding next procedural steps. The objective is to help businesses navigate registration processes more confidently and efficiently.",
              },

              {
                category: "Timelines",
                question:
                  "How long do business registrations generally take?",
                answer:
                  "Processing times vary significantly depending on the selected registration, document quality, application complexity and regulatory review procedures. Some registrations may be processed relatively quickly, while others can require additional scrutiny, clarification or verification. Timelines should therefore be treated as indicative estimates rather than guaranteed completion dates.",
              },

              {
                category: "Consultation",
                question:
                  "How can I get started with Registration Care?",
                answer:
                  "Getting started is simple. Businesses can submit an enquiry through the website, request a consultation or contact the support team directly. Once requirements are reviewed, guidance is provided regarding documentation, eligibility considerations, application procedures and the next steps required for the selected service.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={`extra-${index}`}
                value={`extra-${index}`}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                  <div className="flex flex-col items-start gap-3">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#059669]">
                      {faq.category}
                    </span>

                    <span className="text-lg font-semibold leading-7 text-[#0B1F33]">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                  <div className="border-l-4 border-green-100 pl-5">
                    <p className="text-[15px] leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 text-center">
          <h3 className="text-2xl font-bold text-[#0B1F33]">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Connect with Registration Care to discuss your business
            registration, licensing and compliance requirements. Our team can
            help you understand documentation requirements, application
            processes and the most suitable next steps for your business.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl bg-[#2563EB] px-8 py-4 font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
}