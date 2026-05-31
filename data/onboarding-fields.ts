export interface OnboardingField {
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
}

export const onboardingFields: Record<
  string,
  OnboardingField[]
> = {
gstRegistration: [
  {
    section: "Personal Information",
    label: "Full Name",
    description:
      "Please enter the full name of the applicant applying for GST registration.",
    example: "Ankit Kumar",
    placeholder: "Enter your full name",
    type: "text",
    required: true,
  },

  {
    section: "Personal Information",
    label: "Mobile Number",
    description:
      "We will use this number for registration updates and document verification.",
    example: "9876543210",
    placeholder: "Enter your mobile number",
    type: "tel",
    required: true,
  },

  {
    section: "Personal Information",
    label: "Email Address",
    description:
      "Enter an active email address for GST registration communication.",
    example: "ankit@gmail.com",
    placeholder: "Enter your email address",
    type: "email",
    required: true,
  },

  {
    section: "Business Information",
    label: "Business Name",
    description:
      "Enter the official name of your business.",
    example: "ABC Enterprises",
    placeholder: "Enter business name",
    type: "text",
    required: true,
  },

  {
    section: "Business Information",
    label: "Trade Name",
    description:
      "This is the name customers know your business by.",
    example: "ABC Traders",
    placeholder: "Enter trade name",
    type: "text",
    required: false,
  },

  {
    section: "Business Information",
    label: "Business Structure",
    description:
      "Select how your business is legally organized.",
    helpText:
      "If you run the business alone, choose Proprietorship.",
    type: "select",
    required: true,
    options: [
      "Proprietorship",
      "Partnership Firm",
      "LLP",
      "Private Limited Company",
      "OPC",
      "HUF",
      "Trust",
      "Society",
      "Other",
    ],
  },

  {
    section: "Business Information",
    label: "Business Activity",
    description:
      "Select the option that best describes your business.",
    type: "select",
    required: true,
    options: [
      "Trader",
      "Manufacturer",
      "Service Provider",
      "E-Commerce Seller",
      "Importer",
      "Exporter",
      "Mixed Activity",
    ],
  },

  {
    section: "Business Information",
    label: "Business Start Date",
    description:
      "When did you start or plan to start business operations?",
    example: "01/04/2025",
    placeholder: "DD/MM/YYYY",
    type: "text",
    required: false,
  },

  {
    section: "Business Address",
    label: "State",
    description:
      "State where your business operates.",
    example: "Jharkhand",
    placeholder: "Enter state",
    type: "text",
    required: true,
  },

  {
    section: "Business Address",
    label: "District",
    description:
      "District of your business location.",
    example: "East Singhbhum",
    placeholder: "Enter district",
    type: "text",
    required: true,
  },

  {
    section: "Business Address",
    label: "Pincode",
    description:
      "Enter the pincode of your business address.",
    example: "831001",
    placeholder: "Enter pincode",
    type: "text",
    required: true,
  },

  {
    section: "Business Address",
    label: "Complete Business Address",
    description:
      "Enter the full address from where the business operates.",
    placeholder:
      "House No, Road, Area, City, State",
    type: "textarea",
    required: true,
  },

  {
    section: "GST Requirements",
    label: "Expected Annual Turnover",
    description:
      "Approximate value of sales expected in one year.",
    helpText:
      "Don't worry if you're not sure. A rough estimate is perfectly fine.",
    example: "₹10 Lakh",
    placeholder: "Enter expected turnover",
    type: "text",
    required: true,
  },

  {
    section: "GST Requirements",
    label: "Do You Sell Outside Your State?",
    description:
      "Select Yes if you supply goods or services to customers in other states.",
    type: "select",
    required: true,
    options: ["Yes", "No"],
  },

  {
    section: "GST Requirements",
    label: "Do You Sell On Amazon, Flipkart, Meesho Or Other Marketplaces?",
    description:
      "Select Yes if you sell products through online marketplaces.",
    type: "select",
    required: true,
    options: ["Yes", "No"],
  },

  {
    section: "GST Requirements",
    label: "Import Or Export Activity?",
    description:
      "Select Yes if you import or export products or services.",
    type: "select",
    required: true,
    options: ["Yes", "No"],
  },

  {
    section: "Document Availability",
    label: "PAN Card Available?",
    description:
      "PAN is mandatory for GST registration.",
    helpText:
      "If unavailable, our team will guide you.",
    type: "select",
    required: true,
    options: ["Yes", "No"],
  },

  {
    section: "Document Availability",
    label: "Aadhaar Card Available?",
    description:
      "Required for identity verification.",
    type: "select",
    required: true,
    options: ["Yes", "No"],
  },

  {
    section: "Document Availability",
    label: "Bank Account Available?",
    description:
      "A business or personal bank account is generally required.",
    type: "select",
    required: true,
    options: ["Yes", "No"],
  },

  {
    section: "Document Availability",
    label: "Business Address Proof Available?",
    description:
      "Electricity bill, rent agreement, property tax receipt, etc.",
    type: "select",
    required: true,
    options: ["Yes", "No"],
  },

  {
    section: "Additional Information",
    label: "Anything Else We Should Know?",
    description:
      "Share any additional information that may help us assist you better.",
    placeholder:
      "Urgent registration, multiple locations, special requirements, etc.",
    type: "textarea",
    required: false,
  },
],


  msmeRegistration: [],

  fssaiLicense: [],

  trademarkRegistration: [],

  companyRegistration: [],

  llpRegistration: [],

  startupIndiaRegistration: [],

  iecCode: [],

  gemRegistration: [],

  pfRegistration: [],

  esiRegistration: [],

  shopLicense: [],

  dscServices: [],
};