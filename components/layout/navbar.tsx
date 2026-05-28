"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    name: "Home",
    href: "/",
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
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },


];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      
      <div className="container-custom flex h-20 items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F33] to-[#2563EB] text-base font-bold text-white shadow-md">
            RC
          </div>

          <div className="hidden sm:block">
            <h2 className="text-[20px] font-bold tracking-tight text-[#0B1F33]">
              Registration Care
            </h2>

            <p className="text-xs text-slate-500">
              Business Compliance Services
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[15px] font-semibold text-slate-600 transition hover:text-[#2563EB]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          
          <Link
            href="https://wa.me/918252080029"
            target="_blank"
            className="inline-flex h-11 cursor-pointer items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 text-sm font-semibold text-[#0B1F33] transition hover:bg-slate-50"
          >
            WhatsApp Support
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-11 cursor-pointer items-center justify-center rounded-2xl bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1D4ED8]"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Menu className="h-5 w-5 text-[#0B1F33]" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] border-l border-slate-200 bg-white p-0 sm:max-w-sm"
            >
              
              <div className="flex h-full flex-col">
                
                {/* Top */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                  
                  <div className="flex items-center gap-3">
                    
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F33] to-[#2563EB] text-base font-bold text-white shadow-md">
                      RC
                    </div>

                    <div>
                      <h2 className="text-lg font-bold leading-none text-[#0B1F33]">
                        Registration Care
                      </h2>

                      <p className="mt-1 text-xs text-slate-500">
                        Business Compliance Services
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-5 py-6">
                  
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="flex items-center rounded-2xl px-4 py-4 text-[15px] font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-8 space-y-3">
                    
                    <Link
                      href="https://wa.me/918252080029"
                      target="_blank"
                      className="flex h-12 w-full items-center justify-center rounded-2xl border border-slate-300 bg-white text-sm font-semibold text-[#0B1F33] transition hover:bg-slate-50"
                    >
                      WhatsApp Support
                    </Link>

                    <Link
                      href="/contact"
                      className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#2563EB] text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#1D4ED8]"
                    >
                      Get Consultation
                    </Link>
                  </div>

                  {/* Trust Box */}
                  <div className="mt-8 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-5">
                    
                    <p className="text-sm leading-7 text-slate-600">
                      Professional registration and compliance
                      assistance for startups and businesses across India.
                    </p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}