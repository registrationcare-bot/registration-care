import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Link from "next/link";

import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-[#F8FAFC]">
        <div className="container-custom section-padding">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">
            Knowledge Center
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight text-[#0B1F33]">
            Business Registration & Compliance Guides
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Educational resources, business registration guides
            and compliance-related articles for startups and businesses.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog, index) => (
              <Link
                key={index}
                href={`/blog/${blog.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-sm"
              >
                <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#1D4ED8]">
                  {blog.category}
                </div>

                <h2 className="mt-6 text-2xl font-semibold leading-snug text-[#0B1F33]">
                  {blog.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {blog.description}
                </p>

                <div className="mt-6 text-sm font-medium text-[#1D4ED8]">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}