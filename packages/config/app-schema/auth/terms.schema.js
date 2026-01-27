export const termsSchema = {
  hero: {
    title: "Terms & Conditions",
    lastUpdated: "January 2026",
    subtitle:
      "Please read these terms carefully before using our logistics services.",
  },

  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: [
        "By accessing or using our services, you agree to be bound by these Terms & Conditions.",
        "If you do not agree, please discontinue using our services.",
      ],
    },
    {
      id: "services",
      title: "Use of Services",
      content: [
        "Our services are intended for lawful transportation and logistics purposes only.",
      ],
      bullets: [
        "No misuse of logistics network",
        "No transportation of prohibited goods",
        "Compliance with local & international laws",
      ],
    },
    {
      id: "accounts",
      title: "User Accounts",
      content: [
        "You are responsible for maintaining the confidentiality of your account.",
        "All activities under your account are your responsibility.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: [
        "We are not liable for indirect or consequential damages.",
        "Our liability is limited to the value of the shipment as agreed.",
      ],
    },
    {
      id: "termination",
      title: "Termination",
      content: [
        "We reserve the right to suspend or terminate services if terms are violated.",
      ],
    },
  ],
};
