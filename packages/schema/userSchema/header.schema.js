import {
  Package,
  MessageSquare,
  AlertCircle,
  Users,
  Binoculars,
  Files,
  Contact,Home
} from '@repo/icons';

export const userHeaderSchema = {
  userNavLink: [
    { id: 1, label: 'Home', icon: Home, path: '/' },
    { id: 2, label: 'Track', icon: Binoculars, path: '/track' },
    {
      id: 3,
      label: 'reports',
      icon: Files,
      path: '/reports',
    },
    { id: 4, label: 'Booking', icon: Users, path: '/booking' },
    {
      id: 5,
      label: 'Enquery',
      icon: Contact,
      path: '/contact',
    },
    { id: 6, label: 'chat', icon: MessageSquare, path: '/message' },
  ],
  usernotificationsSchema: [
    {
      id: 1,
      title: 'New Order',
      desc: 'Order #5421 was placed',
      time: '2m ago',
      icon: Package,
      bg: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'New Message',
      desc: 'Support ticket updated',
      time: '1h ago',
      icon: MessageSquare,
      bg: 'bg-green-100',
    },
    {
      id: 3,
      title: 'System Alert',
      desc: 'Server load is high',
      time: '5h ago',
      icon: AlertCircle,
      bg: 'bg-red-100',
    },
  ],
};
