export const footerSchema = {
  brand: {
    name: "LogiTrans",
    description:
      "Reliable logistics and transportation solutions across cities and borders.",
  },

  links: {
    company: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/careers" },
      { label: "Blog", path: "/blog" },
    ],
    services: [
      { label: "Road Transport", path: "/services/road" },
      { label: "Air Freight", path: "/services/air" },
      { label: "Warehousing", path: "/services/warehouse" },
      { label: "Ocean", path: "/services/ocean" },
      { label: "Supply Chain Solution", path: "/services/supply-chain" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms & Conditions", path: "/terms" },
    ],
  },

  copyright: "© 2026 LogiTrans. All rights reserved.",
};
