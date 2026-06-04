import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import WhatsAppButton from "@/components/layout/whatsapp-button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Registration Care",
  description:
    "Professional business registration and compliance services including GST, MSME, FSSAI, Trademark, GeM and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        {children}

        <WhatsAppButton />
      </body>
    </html>
  );
}