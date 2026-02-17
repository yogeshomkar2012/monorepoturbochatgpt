import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  Warehouse,
  MapPin,
  ScrollText,
} from '@repo/icons';

import { admin_route_constants } from '@repo/constants';

export const AdminSideBarNavigationSchema = [
  {
    id: 1,
    title: 'Control Tower',
    icon: LayoutDashboard,
    link: '/admin/dashboard',
  },
  {
    id: 2,
    title: 'Shipments',
    icon: Package,
    subItems: [
      { title: 'Live Tracking', link: admin_route_constants.shipments_active },
      { title: 'Order History', link: admin_route_constants.shipments_history },
      { title: 'Create Consignment', link: admin_route_constants.shipments_new },   
    ],
  },
  { id: 3, title: 'Driver Directory', icon: Users, link: admin_route_constants.drivers },
  {
    id: 4,
    title: 'Fleet Management',
    icon: Truck,
    subItems: [
      { title: 'Vehicle List', link: '/fleet/vehicles' },
      { title: 'Service Logs', link: '/fleet/maintenance' },
    ],
  },
  { id: 5, title: 'Hubs & Inventory', icon: Warehouse, link: '/warehouse' },
  { id: 6, title: 'Route Optimization', icon: MapPin, link: '/routes' },
  {
    id: 7,
    title: 'E-Way Bills / Invoices',
    icon: ScrollText,
    link: '/documents',
  },
];
