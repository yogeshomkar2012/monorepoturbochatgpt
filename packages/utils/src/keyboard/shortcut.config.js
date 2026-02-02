export const keyBoardSthortCuts = [
  {
    id: "open-about",
    sequence: [{ alt: true, key: "a" }],
    action: "ABOUT",
    description: "Open About Page",
  },
  {
    id: "open-services",
    sequence: [{ alt: true, key: "s" }],
    action: "SERVICES",
    description: "Open Services Page",
  },
  {
    id: "open-login",
    sequence: [{ alt: true, key: "l" }],
    action: "LOGIN",
    description: "Open Login Page",
  },
  {
    id: "open-contact",
    sequence: [{ alt: true, key: "c" }],
    action: "CONTACT",
    description: "Open contact Page",
  },
  {
    id: "open-home",
    sequence: [{ alt: true, key: "h" }],
    action: "HOME",
    description: "Open Home Page",
  },
  {
    id: "open-signup",
    sequence: [{ alt: true, key: "r" }],
    action: "SIGNUP",
    description: "Open Signup Page",
  },
  {
    id: "open-service-details-road",
    // Multi-key sequence: Alt+S, then R
    sequence: [{ alt: true, key: "s" }, { key: "r" }],
    action: "SERVICE_DETAILS_ROAD",
    description: "Open Road Service Details Page (Alt+S, then R)",
  },
  {
    id: "open-service-details-air",
    // Multi-key sequence: Alt+S, then a
    sequence: [{ alt: true, key: "s" }, { key: "a" }],
    action: "SERVICE_DETAILS_AIR",
    description: "Open Road Service Details Page (Alt+S, then R)",
  },
  {
    id: "open-service-details-warehouse",
    // Multi-key sequence: Alt+S, then a
    sequence: [{ alt: true, key: "s" }, { key: "w" }],
    action: "SERVICE_DETAILS_WAREHOUSE",
    description: "Open Road Service Details Page (Alt+S, then W)",
  },
  {
    id: "open-service-details-ocean",
    // Multi-key sequence: Alt+S, then a
    sequence: [{ alt: true, key: "s" }, { key: "o" }],
    action: "SERVICE_DETAILS_OCEAN",
    description: "Open Road Service Details Page (Alt+S, then O)",
  },
  {
    id: "open-service-details-express",
    // Multi-key sequence: Alt+S, then a
    sequence: [{ alt: true, key: "s" }, { key: "e" }],
    action: "SERVICE_DETAILS_EXPRESS",
    description: "Open Road Service Details Page (Alt+S, then O)",
  },
  {
    id: "open-service-details-supplychain",
    // Multi-key sequence: Alt+S, then a
    sequence: [{ alt: true, key: "s" }, { key: "c" }],
    action: "SERVICE_DETAILS_SUPLLY_CHAIN",
    description: "Open Road Service Details Page (Alt+S, then O)",
  },
];
