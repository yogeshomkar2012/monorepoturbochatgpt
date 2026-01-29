import {
  Building,
  Info,
  Home,
  LogIn,
  Plane,
  Ship,
  Warehouse,
  Truck,
  Contact,
} from "@repo/icons";
export const navigationSchema = [
  { label: "home", path: "/", icon: Home },
  { label: "about", path: "/about", icon: Info },
  {
    label: "services",
    icon: Building,
    path: "/services",
    children: [
      { label: "Road Transport", path: "/services/road", icon: Truck },
      { label: "Ocean Freight", path: "/services/ocean", icon: Ship },
      { label: "Air Freight", path: "/services/air", icon: Plane },
      { label: "Warehouse", path: "/services/warehouse", icon: Warehouse },
      { label: "Express Delivery", path: "/services/express", icon: "" },
      { label: "Supply Chain", path: "/services/supply-chain", icon: "" },
      { label: "Service", path: "/services" },
    ],
  },
  { label: "contact", path: "/contact", icon: Contact },
  { label: "Login", path: "/login", icon: LogIn },
];
