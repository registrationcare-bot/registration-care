import {
  LayoutGrid,
  ClipboardList,
  CreditCard,
  FileCheck2,
} from "lucide-react";

const processSteps = [
  {
    title: "Choose Service",
    description:
      "Select GST, MSME, FSSAI, Trademark, Company Registration or other business services.",
    icon: LayoutGrid,
  },
  {
    title: "Submit Application",
    description:
      "Fill your business details through our structured online application form.",
    icon: ClipboardList,
  },
  {
    title: "Secure Payment",
    description:
      "Complete payment securely using UPI, Cards, Net Banking and other supported methods.",
    icon: CreditCard,
  },
  {
    title: "Documents & Processing",
    description:
      "Upload required documents and our team begins application processing and verification.",
    icon: FileCheck2,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#FFF7ED] py-16">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C]">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B1F33] md:text-5xl">
            Simple 4-Step Registration Process
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Registration Care simplifies business registrations through a
            structured application, payment and document processing workflow.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative flex h-full flex-col rounded-[1.75rem] border border-[#FED7AA] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FDBA74] hover:shadow-[0_20px_50px_rgba(234,88,12,0.08)]"
              >
                {/* Number */}
                <div className="absolute right-5 top-4 text-4xl font-bold text-orange-100">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF7ED] text-[#EA580C] transition group-hover:bg-[#EA580C] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mt-5 min-h-[64px] text-2xl font-semibold leading-tight text-[#0B1F33]">
                  {step.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-[#FED7AA] bg-white px-6 py-5">
          <div className="text-sm font-medium text-slate-700">
            ✓ Secure Payment
          </div>

          <div className="text-sm font-medium text-slate-700">
            ✓ Application Tracking
          </div>

          <div className="text-sm font-medium text-slate-700">
            ✓ Document Assistance
          </div>

          <div className="text-sm font-medium text-slate-700">
            ✓ Dedicated Support
          </div>
        </div>
      </div>
    </section>
  );
}