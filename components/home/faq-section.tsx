"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Registration Care provide?",
    answer:
      "Registration Care provides consultation and assistance for GST registration, MSME/Udyam registration, FSSAI licensing, trademark registration, company registration and other business compliance-related services.",
  },
  {
    question: "How does the registration process work?",
    answer:
      "Our process generally includes consultation, document collection, application preparation, submission assistance and status support throughout the registration process.",
  },
  {
    question: "Can startups and small businesses apply?",
    answer:
      "Yes. Registration Care assists startups, entrepreneurs, MSMEs and growing businesses seeking registration and compliance-related support.",
  },
  {
    question: "What documents are usually required?",
    answer:
      "Document requirements vary depending on the service. Common documents may include identity proof, address proof, business details and supporting registration documents.",
  },
  {
    question: "Do you provide support after application submission?",
    answer:
      "Yes. Support may include status guidance, compliance-related assistance and communication regarding the registration process.",
  },
  {
    question: "How can I contact your support team?",
    answer:
      "Users can connect through the contact page, consultation forms or support communication channels available on the website.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-20">
      
      <div className="container-custom">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Common Questions About Business Registrations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Answers to commonly asked questions related to
            registration processes, documentation and
            compliance assistance services.
          </p>
        </div>

        {/* FAQ Box */}
        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-4 md:p-6">
          
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 transition hover:border-blue-100"
              >
                
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-[#0B1F33] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 pr-6 text-[15px] leading-8 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}