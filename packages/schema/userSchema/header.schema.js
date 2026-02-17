import { Package, MessageSquare, AlertCircle } from '@repo/icons';

export const userHeaderSchema = {
  userNavLink: [
    { label: 'track', path: '/' },
    { label: 'reports', path: '/reports' },
    { label: 'booking', path: '/booking' },
    { label: 'enquire', path: '/enquire' },
    { label: 'chat', path: '/chat' },
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
