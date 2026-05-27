interface BlogTemplateProps {
  blog: {
    title: string;
    description: string;
    category: string;
    content: string;
  };
}

export default function BlogTemplate({
  blog,
}: BlogTemplateProps) {
  return (
    <article className="bg-white">
      
      {/* Hero */}
      <section className="border-b border-slate-100 bg-[#F8FAFC]">
        <div className="container-custom section-padding">
          
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#1D4ED8]">
            {blog.category}
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-[#0B1F33]">
            {blog.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {blog.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          
          <div className="max-w-4xl">
            <div className="whitespace-pre-line text-lg leading-8 text-slate-700">
              {blog.content}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}