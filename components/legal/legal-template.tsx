interface LegalTemplateProps {
  title: string;
  description: string;
  content: string;
}

export default function LegalTemplate({
  title,
  description,
  content,
}: LegalTemplateProps) {
  return (
    <section className="bg-white">
      
      {/* Hero */}
      <section className="border-b border-slate-100 bg-[#F8FAFC]">
        <div className="container-custom section-padding">
          
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#0B1F33]">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          
          <div className="max-w-4xl whitespace-pre-line text-lg leading-8 text-slate-700">
            {content}
          </div>
        </div>
      </section>
    </section>
  );
}