import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import LegalTemplate from "@/components/legal/legal-template";

export default function RefundPolicyPage() {
  return (
    <main>
      <Navbar />

      <LegalTemplate
        title="Refund Policy"
        description="Refund and cancellation policy for Registration Care services."
        content={`
Registration Care provides consultation, documentation assistance and support services for business registrations and compliance processes.

Users are advised to review service details carefully before proceeding with payments.

Refund eligibility may vary depending on:
• Service stage
• Documentation status
• Work already completed
• Government processing status

Refunds may not be applicable once application processing, documentation review or consultation work has been initiated.

Government fees, third-party charges and statutory payments are generally non-refundable.

Users may contact our support team for refund-related queries or clarification regarding service status.

For support, contact:
info@registrationcare.com
        `}
      />

      <Footer />
    </main>
  );
}