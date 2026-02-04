export const rolePermissionsSchema = [
  {
    role: "super_admin",
    description: "Full system access and infrastructure management",
    permissions: [{ resource: "all", actions: ["manage"] }],
    restrictedFields: [] // No restrictions
  },
  {
    role: "admin",
    description: "Branch management and user oversight",
    permissions: [
      { resource: "shipments", actions: ["create", "read", "update", "delete"] },
      { resource: "fleet", actions: ["create", "read", "update", "delete"] },
      { resource: "users", actions: ["create", "read", "update"] },
      { resource: "settings", actions: ["manage"] }
    ],
    restrictedFields: ["system_config_keys"]
  },
  {
    role: "dispatcher",
    description: "Route optimization and driver assignments",
    permissions: [
      { resource: "shipments", actions: ["read", "update"] },
      { resource: "fleet", actions: ["read"] },
      { resource: "routes", actions: ["create", "read", "update"] },
      { resource: "tracking", actions: ["read"] }
    ],
    restrictedFields: ["billing_amount", "profit_margin", "driver_salary"]
  },
  {
    role: "warehouse_manager",
    description: "Inventory control and hub operations",
    permissions: [
      { resource: "inventory", actions: ["create", "read", "update", "delete"] },
      { resource: "warehouse", actions: ["manage"] },
      { resource: "shipments", actions: ["read", "update"] }
    ],
    restrictedFields: ["total_revenue", "customer_billing_rates"]
  },
  {
    role: "customer_support",
    description: "Client queries and status updates",
    permissions: [
      { resource: "shipments", actions: ["read"] },
      { resource: "tracking", actions: ["read"] },
      { resource: "tickets", actions: ["create", "read", "update"] }
    ],
    restrictedFields: ["driver_personal_phone", "fleet_maintenance_costs"]
  },
  {
    role: "auditor",
    description: "Compliance and financial review",
    permissions: [
      { resource: "shipments", actions: ["read"] },
      { resource: "fleet", actions: ["read"] },
      { resource: "documents", actions: ["read"] },
      { resource: "financials", actions: ["read"] },
      { resource: "logs", actions: ["read"] }
    ],
    restrictedFields: ["user_passwords", "live_gps_raw_data"]
  },
  {
    role: "user",
    description: "Standard staff access",
    permissions: [
      { resource: "shipments", actions: ["read", "update"] },
      { resource: "documents", actions: ["read"] }
    ],
    restrictedFields: ["financial_summaries", "admin_settings"]
  },
  {
    role: "driver",
    description: "Field operations and delivery",
    permissions: [
      { resource: "shipments", actions: ["read"] },
      { resource: "delivery_status", actions: ["update"] },
      { resource: "routes", actions: ["read"] }
    ],
    // Drivers should not see what the client is paying for the shipment
    restrictedFields: [
      "shipment_cost", 
      "billing_amount", 
      "tax_details", 
      "customer_contact_email"
    ]
  },
  {
    role: "viewer",
    description: "Read-only access for guests",
    permissions: [
      { resource: "shipments", actions: ["read"] },
      { resource: "tracking", actions: ["read"] }
    ],
    restrictedFields: ["internal_notes", "pricing", "vendor_details"]
  }
];
