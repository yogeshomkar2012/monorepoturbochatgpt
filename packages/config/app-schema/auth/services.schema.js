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
      process: [
        "Pickup from origin",
        "Route optimization",
        "Live tracking",
        "Safe delivery",
      ],
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
      process: [
        "Goods receiving",
        "Inventory storage",
        "Order processing",
        "Dispatch",
      ],
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
      process: [
        "Cargo booking",
        "Airport handling",
        "Flight transit",
        "Final delivery",
      ],
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
      process: [
        "Cargo consolidation",
        "Port handling",
        "Ocean transit",
        "Destination delivery",
      ],
    },

    // 📦 EXPRESS DELIVERY
    {
      id: "5",

      slug: "express",
      icon: Package,
      title: "Express Delivery",
      subtitle: "Same-Day & Next-Day Delivery",
      description: "Time-sensitive express delivery across major cities.",
      features: [
        "Same-day delivery",
        "Next-day delivery",
        "Real-time tracking",
        "Proof of delivery",
      ],
      process: [
        "Order confirmation",
        "Immediate pickup",
        "Priority routing",
        "Fast delivery",
      ],
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
      features: [
        "Supply chain planning",
        "Vendor coordination",
        "Cost optimization",
        "Risk management",
      ],
      process: [
        "Requirement analysis",
        "Supply chain design",
        "Execution & monitoring",
        "Continuous optimization",
      ],
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
