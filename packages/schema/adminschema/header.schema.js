export const admindashboardHeaderSchema = {
  // 1. Profile Dropdown Menu Items
  profileMenu: [
    { 
      id: "profile", 
      label: "My Profile", 
      icon: "UserCircle", 
      link: "/profile",
      color: "text-gray-700" 
    },
    { 
      id: "settings", 
      label: "Account Settings", 
      icon: "Settings", 
      link: "/settings",
      color: "text-gray-700",
      requiredPermission: { resource: "settings", action: "read" } // Only shows if permitted
    },
    { 
      id: "logout", 
      label: "Logout", 
      icon: "LogOut", 
      link: "/logout", 
      color: "text-red-600",
      isDivider: true // Adds a border-top
    }
  ],

  // 2. Notification Settings
  notifications: {
    enabled: true,
    maxDisplay: 5,
    refreshInterval: 60000, // 1 minute in ms
    viewAllLink: "/notifications"
  },

  // 3. Search Configuration
  search: {
    placeholder: "Search shipments, vehicles, or drivers...",
    enabled: true,
    minChars: 3
  }
};
