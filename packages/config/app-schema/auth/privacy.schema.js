export const privacySchema = {
  hero: {
    title: "Privacy Policy",
    lastUpdated: "January 2026",
    subtitle:
      "Your privacy is important to us. This policy explains how we handle your data.",
  },

  sections: [
    {
      id: "information",
      title: "Information We Collect",
      content: [
        "We collect personal and business information necessary to provide logistics services.",
      ],
      bullets: [
        "Name, email, phone number",
        "Pickup & delivery addresses",
        "Shipment details",
      ],
    },
    {
      id: "usage",
      title: "How We Use Information",
      content: [
        "Your data is used to deliver services efficiently and securely.",
      ],
      bullets: [
        "Order processing",
        "Shipment tracking",
        "Customer support",
      ],
    },
    {
      id: "sharing",
      title: "Data Sharing",
      content: [
        "We do not sell your personal data.",
        "Data is shared only with trusted logistics partners.",
      ],
    },
    {
      id: "security",
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data.",
      ],
    },
    {
      id: "rights",
      title: "Your Rights",
      content: [
        "You have the right to access, update, or delete your personal data.",
      ],
    },
  ],
};
