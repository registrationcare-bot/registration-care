import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import LegalTemplate from "@/components/legal/legal-template";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      <LegalTemplate
        title="Privacy Policy"
        description="Learn how Registration Care collects, uses and protects user information."
        content={`
Registration Care values user privacy and is committed to protecting information shared through this website.

Information submitted through contact forms or consultation requests may be used for communication, service assistance and support purposes.

We may collect information such as:
• Name
• Phone number
• Email address
• Business information
• Service requirements

Information is handled responsibly and used only for business communication and service-related assistance.

Users are advised not to share sensitive passwords or confidential credentials through public communication channels.

This website may use analytics and cookies to improve user experience and website performance.

For privacy-related queries, users may contact:
info@registrationcare.com
        `}
      />

      <Footer />
    </main>
  );
}