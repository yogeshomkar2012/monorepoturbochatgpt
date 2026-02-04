import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  Warehouse,
  MapPin,
  ScrollText,
  Instagram,
  Facebook,
  Twitter,
} from "@repo/icons";

export const sideBarNavigationSchema = [
  { id: 1, title: "Control Tower", icon: LayoutDashboard, link: "/dashboard" },
  {
    id: 2,
    title: "Shipments",
    icon: Package,
    subItems: [
      { title: "Live Tracking", link: "/shipments/active" },
      { title: "Order History", link: "/shipments/history" },
      { title: "Create Consignment", link: "/shipments/new" },
    ],
  },
  { id: 3, title: "Driver Directory", icon: Users, link: "/drivers" },
  {
    id: 4,
    title: "Fleet Management",
    icon: Truck,
    subItems: [
      { title: "Vehicle List", link: "/fleet/vehicles" },
      { title: "Service Logs", link: "/fleet/maintenance" },
    ],
  },
  { id: 5, title: "Hubs & Inventory", icon: Warehouse, link: "/warehouse" },
  { id: 6, title: "Route Optimization", icon: MapPin, link: "/routes" },
  {
    id: 7,
    title: "E-Way Bills / Invoices",
    icon: ScrollText,
    link: "/documents",
  },
];
export const socialSchema = [
  { id: 1, title: "Facebook", link: "https://facebook.com", icon: Facebook },
  { id: 2, title: "Instagram", link: "https://instagram.com", icon: Instagram },
  { id: 3, title: "Twitter", link: "https://twitter.com", icon: Twitter },
];
