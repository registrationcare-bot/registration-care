import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import LegalTemplate from "@/components/legal/legal-template";

export default function DisclaimerPage() {
  return (
    <main>
      <Navbar />

      <LegalTemplate
        title="Disclaimer"
        description="Important disclaimer regarding Registration Care services and website usage."
        content={`
Registration Care provides consultation, documentation assistance and support services related to business registrations and compliance processes.

We are not a government authority or government-affiliated entity.

Approval timelines, application status and registration outcomes depend on government departments, verification procedures and regulatory requirements.

The information available on this website is intended for general informational and consultation purposes only.

While efforts are made to keep information accurate and updated, Registration Care does not guarantee completeness, accuracy or approval outcomes.

Users are advised to independently verify important legal, tax or compliance-related matters when necessary.

Use of this website and services is subject to applicable terms, policies and government regulations.

For clarification or support, contact:
info@registrationcare.com
        `}
      />

      <Footer />
    </main>
  );
}