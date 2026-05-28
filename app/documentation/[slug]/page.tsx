import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Link from "next/link";

import {
  ChevronRight,
  FileText,
} from "lucide-react";

import { docsData } from "@/components/documentation/docs-data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
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
          <div className="flex items-center gap-2 text-sm text-slate-500">
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
          <div className="mt-6 max-w-4xl">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2563EB]">
              <FileText className="h-4 w-4" />
              {doc.category}
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-[#0B1F33]">
              {doc.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {doc.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-custom">
          
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            
            {/* Sidebar */}
            <aside className="hidden lg:block">
              
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6">
                
                <h3 className="text-lg font-semibold text-[#0B1F33]">
                  Documentation
                </h3>

                <div className="mt-6 space-y-2">
                  {docsData.map((item, index) => (
                    <Link
                      key={index}
                      href={`/documentation/${item.slug}`}
                      className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        item.slug === slug
                          ? "bg-[#2563EB] text-white"
                          : "text-slate-700 hover:bg-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="max-w-4xl">
              
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
                
                <div className="prose prose-slate max-w-none">
                  {doc.content
                    .split("\n")
                    .filter(Boolean)
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-6 text-[17px] leading-8 text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
                  
                  <h3 className="text-2xl font-bold text-[#0B1F33]">
                    Need Professional Assistance?
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Registration Care provides structured consultation
                    and business compliance assistance for startups,
                    entrepreneurs and businesses across India.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}