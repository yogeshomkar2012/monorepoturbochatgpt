import { createBrowserRouter } from 'react-router-dom';
import USER_ROUTES from '../constants/route.constants';
import UserDashboardLayout from '../layouts/UserDashboardLayout';

import DashboardPage from '../pages/DashboardPage';
import ProfileLayout from '../layouts/ProfileLayout';
import ProfilePage from '../pages/profile/ProfilePage';
import ProfileUpdatePage from '../pages/profile/ProfileUpdatePage';

const router = createBrowserRouter([
  {
    element: <UserDashboardLayout />,
    path: USER_ROUTES.DASHBOARD,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        element: <ProfileLayout />,
        path: 'profile',
        children: [
          { index: true, element: <ProfilePage /> },
          { path: 'update', element: <ProfileUpdatePage /> },
        ],
      },
      // {
      //   index: true,
      //   element: <DashboardPage />,
      // },

      // {
      //   path: USER_ROUTES.DASHBOARD,
      //   element: <DashboardPage />,
      // },
      // {
      //   path: USER_ROUTES.USER_DASHBOARD,
      //   element: <DashboardPage />,
      // },
    ],
  },
  // {
  //   element: <ProfileLayout />,
  //   path:USER_ROUTES.
  // }
]);
export default router;
