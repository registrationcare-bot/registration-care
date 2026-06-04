import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    name: "GST Registration",
    href: "/services/gst-registration",
  },
  {
    name: "MSME Registration",
    href: "/services/msme-registration",
  },
  {
    name: "FSSAI License",
    href: "/services/fssai-license",
  },
  {
    name: "Trademark Registration",
    href: "/services/trademark-registration",
  },
  {
    name: "Company Registration",
    href: "/services/company-registration",
  },
  {
    name: "Income Tax Filing",
    href: "/services/income-tax-filing",
  },
];

const companyLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Documentation",
    href: "/documentation",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    name: "Refund Policy",
    href: "/refund-policy",
  },
  {
    name: "Disclaimer",
    href: "/disclaimer",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* Soft Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

      <div className="container-custom relative">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Registration Care"
                width={260}
                height={70}
                priority
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-slate-600">
              Professional assistance for GST Registration, MSME Registration,
              FSSAI License, Trademark Registration, Company Registration and
              other business compliance services across India.
            </p>

            {/* Trust Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-green-100 bg-[#ECFDF3] px-4 py-3 text-sm font-medium text-[#047857]">
              <ShieldCheck className="h-5 w-5" />
              Trusted Registration Assistance Across India
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B1F33]">
              Services
            </h3>

            <div className="mt-6 space-y-4">
              {services.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-2 text-[15px] text-slate-600 transition hover:text-[#2563EB]"
                >
                  {item.name}

                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B1F33]">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              {companyLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-2 text-[15px] text-slate-600 transition hover:text-[#2563EB]"
                >
                  {item.name}

                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-[#0B1F33]">
              Legal
            </h3>

            <div className="mt-6 space-y-4">
              {legalLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-2 text-[15px] text-slate-600 transition hover:text-[#2563EB]"
                >
                  {item.name}

                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-slate-200 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Phone */}
            <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAFC] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                <Phone className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-slate-500">Phone</p>

                <p className="text-[15px] font-medium text-slate-700">
                  +91 8252080029
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAFC] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-slate-500">Email</p>

                <p className="text-[15px] font-medium text-slate-700">
                  info@registrationcare.com
                </p>
              </div>
            </div>

            {/* Area */}
            <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAFC] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-slate-500">Service Area</p>

                <p className="text-[15px] font-medium text-slate-700">
                  Support Across India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-sm text-slate-500">
              © 2026 Registration Care. All rights reserved. Registration &
              Compliance Assistance Platform.
            </p>

            <p className="text-sm text-slate-500">
              Designed to simplify business registrations and compliance
              assistance across India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}