import { Truck, Plane, Package, Route, Ship, Warehouse } from "@repo/icons";

export const servicesSchema = {
  hero: {
    title: "Our Logistics Services",
    subtitle:
      "End-to-end transportation and supply chain solutions tailored to your business.",
  },

  coreServices: [
    // 🚛 ROAD TRANSPORTATION
    {
      id: "1",
      slug: "road",
      icon: Truck,
      title: "Road Transportation",
      subtitle: "Reliable & Flexible Ground Logistics",
      description:
        "Reliable and fast road transport solutions across cities and states.",
      features: [
        "Full Truck Load (FTL)",
        "Less Than Truck Load (LTL)",
        "GPS Tracking",
        "On-Time Delivery",
      ],
      overview:
        "Our road transportation service ensures fast, reliable, and cost-effective delivery across cities and states.",

      workflow: [
        "Pickup from origin",
        "Route planning",
        "Live GPS tracking",
        "Safe delivery",
      ],
      industries: ["E-commerce", "Retail", "Manufacturing", "FMCG"],
      cta: {
        title: "Move Your Cargo by Road",
        buttonText: "Get Road Quote",
        path: "/contact",
      },
    },

    // 🏢 WAREHOUSING
    {
      id: "2",
      slug: "warehouse",
      icon: Warehouse,
      title: "Warehouse Management",
      subtitle: "Smart Storage & Distribution",
      description:
        "Secure storage, inventory tracking, and distribution facilities.",
      features: [
        "Inventory control",
        "Cold storage",
        "24/7 security",
        "Distribution support",
      ],
      overview:
        "Secure, scalable, and technology-driven warehousing solutions for modern supply chains.",
    
      workflow: [
        "Inbound receiving",
        "Inventory storage",
        "Order fulfillment",
        "Outbound dispatch",
      ],
      industries: ["E-commerce", "Pharma", "Retail", "FMCG"],
      cta: {
        title: "Optimize Your Storage",
        buttonText: "Talk to Us",
        path: "/contact",
      },
    },

    // ✈️ AIR FREIGHT
    {
      id: "3",
      slug: "air",
      icon: Plane,
      title: "Air Freight",
      subtitle: "Fast & Global Air Cargo",
      description:
        "Fast and secure air cargo solutions for time-critical shipments.",
      features: [
        "Express air cargo",
        "International coverage",
        "Priority handling",
        "Custom clearance support",
      ],
      overview:
        "Time-critical air freight services for urgent and high-value shipments.",
      
      workflow: [
        "Pickup & documentation",
        "Airport handling",
        "Air transit",
        "Final delivery",
      ],
      industries: ["Pharma", "Electronics", "Healthcare"],
      cta: {
        title: "Ship Faster by Air",
        buttonText: "Get Air Quote",
        path: "/contact",
      },
    },

    // 🚢 OCEAN FREIGHT
    {
      id: "4",
      slug: "ocean",
      icon: Ship,
      title: "Ocean Freight",
      subtitle: "Cost-Effective Global Shipping",
      description:
        "Reliable ocean freight solutions for bulk and international cargo.",
      features: [
        "FCL & LCL shipping",
        "Global port coverage",
        "Cost-effective transport",
        "Cargo safety compliance",
      ],
      overview:
        "Reliable ocean freight solutions for large-volume international shipments.",
     
      workflow: [
        "Container booking",
        "Port handling",
        "Ocean transit",
        "Destination delivery",
      ],
      industries: ["Manufacturing", "Automotive", "Heavy Equipment"],
      cta: {
        title: "Ship Worldwide",
        buttonText: "Get Ocean Quote",
        path: "/contact",
      },
    },

    // 📦 EXPRESS DELIVERY
    {
      id: "5",

      slug: "express",
      icon: Package,
      title: "Express Delivery",
      subtitle: "Same-Day & Next-Day Delivery",
      description: "Time-sensitive express delivery across major cities.",
    
      overview:
        "Fast and reliable express delivery solutions for urgent shipments.",
      features: [
        "Same-day delivery",
        "Next-day delivery",
        "Real-time tracking",
        "Proof of delivery",
      ],
      workflow: [
        "Pickup",
        "Route optimization",
        "Express transit",
        "Instant delivery",
      ],
      industries: ["E-commerce", "Retail"],
      cta: {
        title: "Deliver Faster",
        buttonText: "Start Express",
        path: "/contact",
      },
    },

    // 🧭 SUPPLY CHAIN SOLUTIONS
    {
      id: "6",

      slug: "supply-chain",
      icon: Route,
      title: "Supply Chain Solutions",
      subtitle: "Optimized End-to-End Logistics",
      description:
        "Optimized supply chain planning for cost and time efficiency.",
     
      overview:
        "Integrated supply chain solutions to reduce cost, improve visibility, and increase efficiency.",
      features: [
        "Supply chain planning",
        "Vendor coordination",
        "Cost optimization",
        "End-to-end visibility",
      ],
      workflow: [
        "Requirement analysis",
        "Planning & optimization",
        "Execution",
        "Monitoring & improvement",
      ],
      industries: ["Manufacturing", "Retail", "FMCG"],
      cta: {
        title: "Optimize Your Supply Chain",
        buttonText: "Consult Experts",
        path: "/contact",
      },
    },
  ],

  industries: ["E-commerce", "Manufacturing", "Retail", "Healthcare", "FMCG"],

  workflow: [
    "Request a Quote",
    "Plan & Schedule",
    "Pickup & Transport",
    "Live Tracking",
    "Successful Delivery",
  ],

  cta: {
    title: "Need a Custom Logistics Solution?",
    buttonText: "Contact Us",
    path: "/contact",
  },
};
