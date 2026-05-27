"use client";

import { useState } from "react";

import {
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    setSuccess(false);

    setErrorMessage("");

    const { error } = await supabase
      .from("leads")
      .insert([formData]);

    setLoading(false);

    if (error) {
      setErrorMessage(
        "Unable to submit your inquiry. Please try again."
      );

      console.log(error);

      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div>
      
      {/* Success Message */}
      {success && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-5">
          
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />

          <div>
            <h3 className="font-semibold text-green-800">
              Inquiry Submitted Successfully
            </h3>

            <p className="mt-1 text-sm leading-6 text-green-700">
              Our team will contact you shortly regarding your business requirements.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5">
          
          <AlertCircle className="mt-0.5 h-5 w-5 text-red-600" />

          <div>
            <h3 className="font-semibold text-red-800">
              Submission Failed
            </h3>

            <p className="mt-1 text-sm leading-6 text-red-700">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Service */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Service Required
          </label>

          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="GST / MSME / FSSAI / Trademark"
            className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Message
          </label>

          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business requirements..."
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#2563EB] px-8 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting Inquiry...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </button>
      </form>
    </div>
  );
}