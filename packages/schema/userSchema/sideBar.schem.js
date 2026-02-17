import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  Warehouse,
  MapPin,
  ScrollText,
} from '@repo/icons';
export const userSideBarSchema = [
  { id: 1, title: 'Track', icon: LayoutDashboard, link: '/dashboard' },
  {
    id: 2,
    title: 'reports',
    icon: Package,
  },
  { id: 3, title: 'Booking', icon: Users, link: '/drivers' },
  {
    id: 4,
    title: 'Enquery',
    icon: Truck,
  },
  { id: 5, title: 'chat', icon: Warehouse, link: '/warehouse' },
];
