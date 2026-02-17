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
  Link,
  StickyNote,
  ChevronsUp,
} from '@repo/icons';
import { AUTH_ROUTES } from '../../../constants/auth_routes';

export const navigationSchema = [
  { label: 'home', path: '/', icon: Home },
  { label: 'about', path: `${AUTH_ROUTES.ABOUT}`, icon: Info },
  {
    label: 'services',
    icon: Building,
    path: `${AUTH_ROUTES.SERVICE}`,
    children: [
      { label: 'Road Transport', path: `${AUTH_ROUTES.ROAD}`, icon: Truck },
      { label: 'Ocean Freight', path: `${AUTH_ROUTES.ROAD}`, icon: Ship },
      { label: 'Air Freight', path: `${AUTH_ROUTES.AIR}`, icon: Plane },
      { label: 'Warehouse', path: `${AUTH_ROUTES.WAREHOUSE}`, icon: Warehouse },
      {
        label: 'Express Delivery',
        path: `${AUTH_ROUTES.EXPRESS}`,
        icon: ChevronsUp,
      },
      { label: 'Supply Chain', path: `${AUTH_ROUTES.SUPLYCHAIN}`, icon: Link },
    ],
  },
  { label: 'career', path: `${AUTH_ROUTES.CAREER}`, icon: StickyNote },
  { label: 'contact', path: `${AUTH_ROUTES.CONTACT}`, icon: Contact },
  { label: 'Login', path: `${AUTH_ROUTES.LOGIN}`, icon: LogIn },
];
