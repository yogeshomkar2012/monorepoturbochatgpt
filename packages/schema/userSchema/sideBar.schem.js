import {
  Users,
  MessageSquare,
  Binoculars,
  Files,
  Contact,
} from '@repo/icons';
export const userSideBarSchema = [
  { id: 1, title: 'Track', icon: Binoculars, link: '/track' },
  {
    id: 2,
    title: 'reports',
    icon: Files,
    link: '/reports',
  },
  { id: 3, title: 'Booking', icon: Users, link: '/booking' },
  {
    id: 4,
    title: 'Enquery',
    icon: Contact,
    link: '/contact',
  },
  { id: 5, title: 'chat', icon: MessageSquare, link: '/message' },
];
