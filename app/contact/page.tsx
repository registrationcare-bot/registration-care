import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import ContactForm from "@/components/contact/contact-form";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-[#F8FAFC]">
        <div className="container-custom section-padding">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">
            Contact Us
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight text-[#0B1F33]">
            Get Professional Business Registration Assistance
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Connect with our team for consultation, documentation
            assistance and business compliance support services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            
            <h2 className="text-3xl font-bold text-[#0B1F33]">
              Contact Information
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our team is available to assist businesses, startups
              and entrepreneurs with registration and compliance-related queries.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-6">
              
              {/* Phone */}
              <div className="flex gap-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8]">
                  <Phone className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0B1F33]">
                    Phone Support
                  </h3>

                  <p className="mt-2 text-slate-600">
                    +91 8252080029
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8]">
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0B1F33]">
                    Email Address
                  </h3>

                  <p className="mt-2 text-slate-600">
                    info@registrationcare.com
                  </p>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex gap-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8]">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0B1F33]">
                    Service Area
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Business registration and compliance support across India.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8]">
                  <Clock3 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0B1F33]">
                    Support Hours
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Monday - Saturday | 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 md:p-10">
            
            <h2 className="text-3xl font-bold text-[#0B1F33]">
              Request Consultation
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Submit your details and our team will connect with you shortly.
            </p>

            {/* REAL FORM */}
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}