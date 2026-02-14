import { createBrowserRouter } from 'react-router-dom';
import DashBoardLyout from '../layouts/DashBoardLyout';
import DashboardPage from '../pages/DashboardPage';
import SUPER_ADMIN_ROUTES from '../constants/route.constants';

const router = createBrowserRouter([
  {
    element: <DashBoardLyout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: SUPER_ADMIN_ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: SUPER_ADMIN_ROUTES.SUPER_ADMIN_DASHBOARD,
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
