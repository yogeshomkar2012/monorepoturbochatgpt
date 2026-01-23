import { Truck, Plane, Package, Route, Ship, Warehouse } from "@repo/icons";
export const callToActionSchema = {
  title: "Move Your Shipments With Confidence",
  subtitle:
    "Join thousands of businesses using our logistics platform for fast, reliable, and transparent deliveries.",
  primaryAction: {
    label: "Get Started",
    path: "/auth/register",
  },
  secondaryAction: {
    label: "Contact Sales",
    path: "/contact",
  },
};
export const howItWorksSchema = {
  title: "How It Works",
  subtitle:
    "A simple and transparent logistics process designed for speed and reliability.",
  steps: [
    {
      id: 1,
      step: "01",
      title: "Book Your Shipment",
      description:
        "Share shipment details online or with our team to schedule a pickup.",
    },
    {
      id: 2,
      step: "02",
      title: "Pickup & Processing",
      description:
        "Our team collects the goods and prepares them for safe transportation.",
    },
    {
      id: 3,
      step: "03",
      title: "Transport & Tracking",
      description:
        "Goods move through our network with real-time tracking visibility.",
    },
    {
      id: 4,
      step: "04",
      title: "Safe Delivery",
      description:
        "On-time delivery with confirmation and complete documentation.",
    },
  ],
};
export const serviceSchema = [
  {
    title: "Road Freight",
    description:
      "Reliable and cost-effective road transportation for short and long distances.",
    icon: Truck,
  },
  {
    title: "Air Freight",
    description:
      "Fast and secure air cargo solutions for time-critical shipments.",
    icon: Plane,
  },
  {
    title: "Ocean Freight",
    description:
      "Global sea freight services with full container and bulk shipping options.",
    icon: Ship,
  },
  {
    title: "Warehousing",
    description:
      "Modern warehouses with inventory management and secure storage.",
    icon: Warehouse,
  },
  {
    title: "Express Delivery",
    description: "Same-day and next-day express delivery across major cities.",
    icon: Package,
  },
  {
    title: "Supply Chain",
    description: "End-to-end supply chain solutions optimized for efficiency.",
    icon: Route,
  },
];
export const coverageSchema = {
  title: "Nationwide Logistics Coverage",
  subtitle:
    "Delivering across cities, states, and borders with a strong and reliable logistics network.",
  stats: [
    {
      id: 1,
      label: "Cities Covered",
      value: "250+",
    },
    {
      id: 2,
      label: "Warehouses",
      value: "120+",
    },
    {
      id: 3,
      label: "Daily Shipments",
      value: "50,000+",
    },
    {
      id: 4,
      label: "On-Time Delivery",
      value: "98%",
    },
  ],
};
export const technologySchema = {
  title: "Smart Technology & Real-Time Tracking",
  subtitle:
    "Powered by modern logistics technology to give you full visibility, control, and reliability across every shipment.",
  features: [
    {
      id: 1,
      title: "Real-Time GPS Tracking",
      description:
        "Track your shipments live with precise GPS-based location updates.",
    },
    {
      id: 2,
      title: "Automated Notifications",
      description:
        "Get instant alerts for pickup, transit milestones, and delivery.",
    },
    {
      id: 3,
      title: "Smart Route Optimization",
      description:
        "AI-powered routing ensures faster delivery and reduced fuel costs.",
    },
    {
      id: 4,
      title: "Secure Data & Compliance",
      description:
        "Enterprise-grade security with compliance to logistics standards.",
    },
  ],
};
export const testimonialSchema = {
  title: "Trusted by Businesses Nationwide",
  subtitle:
    "Thousands of companies rely on our logistics network to move goods safely, on time, every time.",
  testimonials: [
    {
      id: 1,
      name: "Ravi Logistics Pvt Ltd",
      role: "Supply Chain Manager",
      message:
        "Their real-time tracking and reliable delivery have completely transformed our supply chain operations.",
    },
    {
      id: 2,
      name: "Anita Retail Group",
      role: "Operations Head",
      message:
        "We reduced delivery delays by 30% after switching to this logistics platform.",
    },
    {
      id: 3,
      name: "Global Freight Co.",
      role: "Logistics Director",
      message:
        "Professional service, transparent pricing, and excellent customer support.",
    },
  ],
};
export const whyChooseUsSchema = {
  title: "Why Choose Our Logistics Services",
  subtitle:
    "We combine reliability, technology, and experience to move your goods safely and on time.",
  items: [
    {
      id: 1,
      title: "On-Time Delivery",
      description:
        "We ensure timely deliveries with optimized routes and real-time tracking.",
    },
    {
      id: 2,
      title: "Pan-India Network",
      description:
        "Strong nationwide coverage connecting major hubs and remote locations.",
    },
    {
      id: 3,
      title: "Secure Handling",
      description:
        "Your cargo is handled with strict safety and compliance standards.",
    },
    {
      id: 4,
      title: "Technology Driven",
      description:
        "Advanced tracking, reporting, and logistics automation systems.",
    },
  ],
};
