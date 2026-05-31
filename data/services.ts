import { onboardingFields } from "./onboarding-fields";
export interface Service {
  slug: string;

  category: string;

  title: string;

  description: string;

  overview: string;

  eligibility?: string[];

  benefits?: string[];

  documents?: string[];

  process?: string[];

  timeline?: string;

  governmentFees?: string;

  professionalFees?: string;

  relatedServices?: string[];

  governmentReference?: {
    authority: string;

    portal: string;

    purpose: string;
  };

  onboardingFields?: {
  label: string;

  description?: string;

  helpText?: string;

  example?: string;

  placeholder?: string;

  type:
    | "text"
    | "email"
    | "tel"
    | "number"
    | "textarea"
    | "select";

  required: boolean;

  section?: string;

  options?: string[];
}[];

  faqs?: {
    question: string;

    answer: string;
  }[];
}



export const services: Service[] = [
  {
    slug: "gst-registration",

    category: "Business Registration",

    title: "GST Registration",

    description:
      "Professional GST registration assistance and compliance support for businesses across India.",

    overview:
      "GST registration is essential for businesses requiring Goods and Services Tax compliance. Our team provides structured consultation and documentation assistance for the registration process.",

    eligibility: [
      "Businesses exceeding GST turnover threshold",
      "Interstate suppliers",
      "Ecommerce sellers",
      "Service providers requiring GST compliance",
    ],

    benefits: [
      "Professional consultation support",
      "Documentation assistance",
      "Business compliance guidance",
      "Application process support",
      "Input tax credit eligibility",
      "Legal GST compliance support",
    ],

    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Business Address Proof",
      "Business Details",
      "Bank Account Details",
      "Passport Size Photograph",
    ],

    process: [
      "Initial consultation and requirement understanding",
      "Document collection and verification",
      "Application preparation and submission",
      "GST portal processing and verification",
      "Registration status tracking and support",
      "GST certificate assistance",
    ],

    timeline: "3-7 working days",

    governmentFees:
      "Government fees may vary depending on business category.",

    professionalFees:
      "Professional consultation and documentation fees depend on service requirements.",

    relatedServices: [
      "MSME Registration",
      "GST Return Filing",
      "Company Registration",
    ],

    onboardingFields:
  onboardingFields.gstRegistration,

    faqs: [
      {
        question: "Who needs GST registration?",

        answer:
          "Businesses crossing applicable turnover limits or requiring GST compliance may require GST registration.",
      },

      {
        question:
          "What documents are required for GST registration?",

        answer:
          "Common documents include PAN card, Aadhaar card, address proof and business details.",
      },

      {
        question:
          "How long does GST registration take?",

        answer:
          "Processing time may vary depending on verification and application details.",
      },
    ],
  },

  {
    slug: "msme-registration",

    category: "Business Registration",

    title: "MSME Registration",

    description:
      "MSME/Udyam registration assistance for startups and small businesses.",

    overview:
      "MSME registration helps businesses access government schemes, benefits and recognition under the Udyam registration framework.",

    benefits: [
      "MSME recognition support",
      "Guidance for government benefits",
      "Business registration assistance",
      "Startup support consultation",
    ],

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Business Information",
      "Bank Details",
    ],
  },

  {
    slug: "fssai-license",

    category: "Food Licensing",

    title: "FSSAI License",

    description:
      "FSSAI licensing and food business compliance assistance.",

    overview:
      "FSSAI licensing is required for food-related businesses and operations. We provide consultation and application assistance for licensing support.",

    benefits: [
      "Food business compliance support",
      "License application guidance",
      "Documentation assistance",
      "Professional consultation",
    ],

    documents: [
      "PAN Card",
      "Business Address Proof",
      "Food Business Details",
      "Identity Proof",
    ],
  },

  {
    slug: "trademark-registration",

    category: "Brand Protection",

    title: "Trademark Registration",

    description:
      "Trademark filing, brand protection and intellectual property assistance.",

    overview:
      "Trademark registration helps businesses protect brand names, logos and intellectual property rights.",

    benefits: [
      "Brand protection support",
      "Trademark filing assistance",
      "Legal ownership support",
    ],

    documents: [
      "Identity Proof",
      "Business Registration Documents",
      "Brand Name or Logo",
    ],
  },

  {
    slug: "company-registration",

    category: "Company Registration",

    title: "Company Registration",

    description:
      "Private Limited, OPC and LLP company registration assistance for startups and businesses.",

    overview:
      "Professional company registration consultation and documentation support for business incorporation.",

    benefits: [
      "Business incorporation support",
      "Startup registration guidance",
      "Documentation assistance",
    ],

    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Address Proof",
    ],
  },

  {
    slug: "llp-registration",

    category: "Company Registration",

    title: "LLP Registration",

    description:
      "Limited Liability Partnership registration and compliance assistance.",

    overview:
      "Professional LLP registration support for businesses and partnerships.",

    benefits: [
      "Limited liability support",
      "Business registration guidance",
      "Compliance assistance",
    ],

    documents: [
      "PAN Card",
      "Address Proof",
      "Partner Documents",
    ],
  },

  {
    slug: "startup-india-registration",

    category: "Startup Registration",

    title: "Startup India Registration",

    description:
      "Startup India recognition and startup compliance assistance.",

    overview:
      "Professional Startup India registration and startup ecosystem consultation support.",

    benefits: [
      "Startup recognition support",
      "Government scheme guidance",
      "Business consultation",
    ],

    documents: [
      "Company Documents",
      "Startup Details",
      "Founder Information",
    ],
  },

  {
    slug: "iec-code",

    category: "Import Export",

    title: "IEC Code Registration",

    description:
      "Import Export Code registration assistance for businesses and exporters.",

    overview:
      "IEC registration support for import-export businesses and international trade operations.",

    benefits: [
      "Import export compliance",
      "International trade support",
      "Business consultation",
    ],

    documents: [
      "PAN Card",
      "Business Address Proof",
      "Bank Details",
    ],
  },

  {
    slug: "gem-registration",

    category: "Government Registration",

    title: "GeM Registration",

    description:
      "Government eMarketplace registration assistance for sellers and businesses.",

    overview:
      "Professional GeM portal registration and seller onboarding support.",

    benefits: [
      "Government marketplace access",
      "Seller onboarding support",
      "Tender participation assistance",
    ],

    documents: [
      "PAN Card",
      "Business Registration",
      "Bank Details",
    ],
  },

  {
    slug: "pf-registration",

    category: "Business Compliance",

    title: "PF Registration",

    description:
      "Provident Fund registration and compliance support for employers.",

    overview:
      "PF registration assistance and employer compliance consultation services.",

    benefits: [
      "Employer compliance support",
      "Employee benefits compliance",
      "Registration assistance",
    ],

    documents: [
      "Business Registration",
      "Employee Details",
      "PAN Card",
    ],
  },

  {
    slug: "esi-registration",

    category: "Business Compliance",

    title: "ESI Registration",

    description:
      "ESI registration and employee compliance assistance for businesses.",

    overview:
      "Professional ESI registration and compliance support for employers.",

    benefits: [
      "Employee compliance support",
      "Registration assistance",
      "Professional consultation",
    ],

    documents: [
      "Business Registration",
      "Employee Details",
      "Address Proof",
    ],
  },

  {
    slug: "shop-license",

    category: "Business Licensing",

    title: "Shop & Establishment License",

    description:
      "Shop and establishment registration assistance for businesses and shops.",

    overview:
      "Professional shop license registration and business compliance support.",

    benefits: [
      "Business license support",
      "Compliance assistance",
      "Registration consultation",
    ],

    documents: [
      "Business Address Proof",
      "Identity Proof",
      "Business Details",
    ],
  },

  {
    slug: "dsc-services",

    category: "Digital Services",

    title: "Digital Signature Certificate",

    description:
      "Digital Signature Certificate application and renewal assistance.",

    overview:
      "Professional DSC application and digital compliance support services.",

    benefits: [
      "Digital filing support",
      "Certificate assistance",
      "Renewal support",
    ],

    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Photograph",
    ],
  },
];
