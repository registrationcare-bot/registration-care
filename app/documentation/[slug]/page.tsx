import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Link from "next/link";

import {
  ChevronRight,
  FileText,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { docsData } from "@/components/documentation/docs-data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const doc = docsData.find(
    (item) => item.slug === slug
  );

  if (!doc) {
    return {
      title: "Documentation | Registration Care",
    };
  }

  return {
    title: `${doc.title} | Registration Care`,

    description: doc.description,
  };
}

export default async function DocumentationArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const doc = docsData.find(
    (item) => item.slug === slug
  );

  if (!doc) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />

        <div className="container-custom py-32 text-center">
          
          <h1 className="text-4xl font-bold text-[#0B1F33]">
            Documentation Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The requested documentation page does not exist.
          </p>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-[#F8FAFC]">
        <div className="container-custom py-14">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            
            <Link
              href="/documentation"
              className="transition hover:text-[#2563EB]"
            >
              Documentation
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span>{doc.category}</span>
          </div>

          {/* Heading */}
          <div className="mt-6 max-w-5xl">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2563EB]">
              
              <FileText className="h-4 w-4" />

              {doc.category}
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight text-[#0B1F33] md:text-6xl">
              {doc.title}
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              {doc.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-custom">
          
          <div className="grid gap-12 lg:grid-cols-[260px_1fr_240px]">
            
            {/* Left Sidebar */}
            <aside className="lg:block">
              
              <div className="overflow-x-auto lg:sticky lg:top-28">
                
                <div className="grid grid-cols-2 gap-3 lg:block lg:space-y-2">
                  {docsData.map((item, index) => (
                    <Link
                      key={index}
                      href={`/documentation/${item.slug}`}
                      className={`block rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                        item.slug === slug
                          ? "border-blue-600 bg-[#2563EB] text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="min-w-0">
              
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
                
                {/* Article Intro */}
                <div className="border-b border-slate-100 pb-10">
                  
                  <h2 className="text-3xl font-bold tracking-tight text-[#0B1F33]">
                    Overview
                  </h2>

                  <p className="mt-6 text-[17px] leading-9 text-slate-700">
                    {doc.description}
                  </p>
                </div>

                {/* Structured Sections */}
                <div className="mt-14 space-y-16">
                  {doc.sections.map((section, index) => (
                    <section
                      key={index}
                      id={section.heading
                        .toLowerCase()
                        .replace(/\s+/g, "-")}
                    >
                      
                      <h2 className="text-3xl font-bold tracking-tight text-[#0B1F33]">
                        {section.heading}
                      </h2>

                      <div className="mt-5 h-1 w-16 rounded-full bg-blue-600" />

                      <p className="mt-8 text-[17px] leading-9 text-slate-700">
                        {section.content}
                      </p>
                    </section>
                  ))}
                </div>

                {/* FAQs */}
                <div className="mt-20">
                  
                  <div className="border-b border-slate-200 pb-6">
                    
                    <h2 className="text-4xl font-bold tracking-tight text-[#0B1F33]">
                      Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      Common questions related to {doc.title.toLowerCase()}.
                    </p>
                  </div>

                  <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white px-6 py-2">
                    
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      {doc.faqs?.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border-slate-200"
                        >
                          
                          <AccordionTrigger className="py-6 text-left text-lg font-semibold text-[#0B1F33] hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>

                          <AccordionContent className="pb-6 text-[16px] leading-8 text-slate-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8">
                  
                  <h3 className="text-2xl font-bold text-[#0B1F33]">
                    Need Professional Assistance?
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    Registration Care provides structured consultation,
                    documentation assistance and business compliance
                    support services for startups, entrepreneurs and
                    businesses across India.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#2563EB] px-6 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
                    >
                      Get Consultation
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 text-sm font-semibold text-[#0B1F33] transition hover:bg-slate-50"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Right TOC */}
            <aside className="hidden xl:block">
              
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6">
                
                <h3 className="text-lg font-semibold text-[#0B1F33]">
                  On This Page
                </h3>

                <div className="mt-6 space-y-3">
                  {doc.sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#${section.heading
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block text-sm leading-6 text-slate-600 transition hover:text-[#2563EB]"
                    >
                      {section.heading}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}