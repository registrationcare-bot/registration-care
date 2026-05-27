import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import LegalTemplate from "@/components/legal/legal-template";

export default function TermsPage() {
  return (
    <main>
      <Navbar />

      <LegalTemplate
        title="Terms & Conditions"
        description="Terms governing the use of Registration Care website and services."
        content={`
By using this website, users agree to comply with the terms and conditions outlined below.

Registration Care provides consultation, documentation assistance and support services related to business registrations and compliance processes.

Users are responsible for:
• Providing accurate information
• Submitting valid documents
• Reviewing service details before proceeding

Registration timelines and approvals may vary depending on government procedures, document verification and application requirements.

Registration Care does not guarantee approvals or government decisions.

Users are advised to review all service-related details carefully before making payments or submitting applications.

The website content is intended for informational and consultation purposes only.

For support or queries, users may contact:
info@registrationcare.com
        `}
      />

      <Footer />
    </main>
  );
}