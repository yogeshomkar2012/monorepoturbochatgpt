import { createBrowserRouter } from 'react-router-dom';
import USER_ROUTES from '../constants/route.constants';
import UserDashboardLayout from '../layouts/UserDashboardLayout';

import DashboardPage from '../pages/DashboardPage';
const router = createBrowserRouter([
  {
    element: <UserDashboardLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: USER_ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: USER_ROUTES.USER_DASHBOARD,
        element: <DashboardPage />,
      },
    ],
  },
]);
export default router;
