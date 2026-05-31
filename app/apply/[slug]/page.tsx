
"use client";


import { use, useState } from "react";


import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { notFound } from "next/navigation";

import {
  ShieldCheck,
  BadgeCheck,
 FileText,
  Lock,
} from "lucide-react";

import { services } from "@/data/services";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";




interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ApplyPage({
  params,
}: PageProps) {
  const { slug } = use(params);

  
const service = services.find(
  (item) => item.slug === slug
);






  const [formData, setFormData] = useState<
    Record<string, string>
  >({});

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  if (!service) {
    notFound();
  }

  const handleChange = (
    label: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [label]: value,
    }));

    if (errors[label]) {
      setErrors((prev) => ({
        ...prev,
        [label]: "",
      }));
    }
  };

  
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const newErrors: Record<string, string> = {};

  service.onboardingFields?.forEach((field) => {
    if (
      field.required &&
      !formData[field.label]
    ) {
      newErrors[field.label] =
        `${field.label} is required`;
    }
  });

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      "/api/leads",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
    body: JSON.stringify({
  name:
    formData["Full Name"] || "",
  phone:
    formData["Mobile Number"] || "",
  email:
    formData["Email Address"] || "",
  service:
    service.title,
  form_data: formData,
}),
      }
    );

    const data = await response.json();

if (!data.success) {
  throw new Error(
    data.message ||
      "Failed to submit application"
  );
}

alert(
  "Application submitted successfully."
);

setFormData({});
  

  } catch (error) {
  console.error(error);

  alert(
    "Something went wrong. Please try again."
  );
} finally {
  setLoading(false);
}
};


const groupedFields =
  service.onboardingFields?.reduce(
    (acc, field) => {
      const section =
        field.section || "General Information";

      if (!acc[section]) {
        acc[section] = [];
      }

      acc[section].push(field);

      return acc;
    },
    {} as Record<string, typeof service.onboardingFields>
  ) || {};
  return (
    <main className="bg-[#FCFEFC]">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-[#E7EFEA] bg-[#F6FBF7]">
        <div className="container-custom section-padding">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#FBE2C4] bg-[#FFF4E8] px-4 py-2 text-sm font-medium text-[#F59E0B]">

              <ShieldCheck className="h-4 w-4" />

              Service Onboarding
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-[#0B1F33]">
              Start {service.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Complete the onboarding form below to initiate
              your registration assistance and documentation
              support process.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="grid gap-10 lg:grid-cols-[1fr_500px]">

            {/* LEFT */}
            <div>

              <h2 className="text-4xl font-bold text-[#0B1F33]">
                Why Choose Registration Care?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Structured consultation and documentation
                assistance for startups, entrepreneurs and
                businesses across India.
              </p>

              {/* TRUST BLOCKS */}
              <div className="mt-10 space-y-5">

                <div className="flex gap-4 rounded-3xl border border-[#D8E8DD] bg-white p-6">

                  <div className="rounded-2xl bg-[#F2F8F4] p-3 text-[#16A34A]">
                    <BadgeCheck className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0B1F33]">
                      Documentation Assistance
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Structured support for document preparation,
                      verification and registration assistance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-3xl border border-[#D8E8DD] bg-white p-6">

                  <div className="rounded-2xl bg-[#F2F8F4] p-3 text-[#16A34A]">
                    <FileText className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0B1F33]">
                      Guided Registration Process
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Consultation-focused onboarding process
                      for smoother registration support.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-3xl border border-[#D8E8DD] bg-white p-6">

                  <div className="rounded-2xl bg-[#FFF4E8] p-3 text-[#F59E0B]">
                    <Lock className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0B1F33]">
                      Secure Information Handling
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Your information is handled securely for
                      onboarding and consultation purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* PROCESS */}
              <div className="mt-12 rounded-[2rem] border border-[#D8E8DD] bg-[#F6FBF7] p-8">

                <h3 className="text-2xl font-bold text-[#0B1F33]">
                  Onboarding Process
                </h3>

                <div className="mt-8 space-y-5">
                  {[
                    "Submit onboarding details",
                    "Complete service initiation payment",
                    "Receive consultation assistance",
                    "Document verification and support",
                    "Registration process guidance",
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4E8] font-bold text-[#F59E0B]">
                        {index + 1}
                      </div>

                      <div className="pt-2 text-slate-700">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[2rem] border border-[#D8E8DD] bg-white p-8 shadow-sm">

              <h2 className="text-3xl font-bold text-[#0B1F33]">
                Service Onboarding Form
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Fill in your details to begin the onboarding
                and documentation assistance process.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >

                
              
{/* DYNAMIC FIELDS */}
{Object.entries(groupedFields).map(
  ([section, fields]) => (
    <div
      key={section}
      className="space-y-6"
    >
      <div className="border-b border-[#E7EFEA] pb-4">
        <h3 className="text-xl font-bold text-[#0B1F33]">
          {section}
        </h3>
      </div>

      {fields?.map((field, index) => (
        <div key={index}>
          <Label className="flex items-center gap-1">
            {field.label}

            {field.required && (
              <span className="text-red-500">
                *
              </span>
            )}
          </Label>

          {field.description && (
            <p className="mt-1 text-sm text-slate-500">
              {field.description}
            </p>
          )}

          {field.type === "textarea" ? (
            <Textarea
              placeholder={
                field.placeholder ||
                `Enter ${field.label.toLowerCase()}`
              }
              className="mt-2 min-h-[120px] rounded-2xl border-[#D8E8DD]"
              required={field.required}
              value={formData[field.label] || ""}
              onChange={(e) =>
                handleChange(
                  field.label,
                  e.target.value
                )
              }
            />
          ) : field.type === "select" ? (
            <select
              className="mt-2 flex h-12 w-full rounded-2xl border border-[#D8E8DD] bg-white px-4 text-sm outline-none"
              required={field.required}
              value={formData[field.label] || ""}
              onChange={(e) =>
                handleChange(
                  field.label,
                  e.target.value
                )
              }
            >
              <option value="">
                Select {field.label}
              </option>

              {field.options?.map(
                (option, optionIndex) => (
                  <option
                    key={optionIndex}
                    value={option}
                  >
                    {option}
                  </option>
                )
              )}
            </select>
          ) : (
            <Input
              placeholder={
                field.placeholder ||
                `Enter ${field.label.toLowerCase()}`
              }
              className="mt-2 h-12 rounded-2xl border-[#D8E8DD]"
              required={field.required}
              value={formData[field.label] || ""}
              onChange={(e) =>
                handleChange(
                  field.label,
                  e.target.value
                )
              }
            />
          )}

          {field.example && (
            <p className="mt-2 text-xs text-[#16A34A]">
              Example: {field.example}
            </p>
          )}

          {field.helpText && (
            <p className="mt-2 text-xs text-[#F59E0B]">
              {field.helpText}
            </p>
          )}

          {errors[field.label] && (
            <p className="mt-2 text-sm text-red-500">
              {errors[field.label]}
            </p>
          )}
        </div>
      ))}
    </div>
  )
)}



                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#F59E0B] text-sm font-semibold text-white transition hover:bg-[#EA580C] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Processing..."
                    : "Continue to Secure Payment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
