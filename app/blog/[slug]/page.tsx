import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import BlogTemplate from "@/components/blog/blog-template";

import { blogs } from "@/data/blogs";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Registration Care`,
    description: blog.description,
  };
}

export default async function BlogPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <BlogTemplate blog={blog} />

      <Footer />
    </main>
  );
}