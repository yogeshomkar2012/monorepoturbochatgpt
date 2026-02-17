import { createBrowserRouter } from 'react-router-dom';
import DashBoardLyout from '../layouts/DashboardLayout';
import ADMIN_ROUTES from '../constants/route.constants';
import AdminDashboardPage from '../pages/AdminDashboardPage';

const router = createBrowserRouter([
  {
    element: <DashBoardLyout />,
    children: [{ path: '/', element: <AdminDashboardPage /> }],
  },
  {
    element: <DashBoardLyout />,
    children: [
      { path: ADMIN_ROUTES.DASHBOARD, element: <AdminDashboardPage /> },
    ],
  },
  {
    element: <DashBoardLyout />,
    children: [
      { path: ADMIN_ROUTES.ADMIN_DASHBOARD, element: <AdminDashboardPage /> },
    ],
  },
]);
export default router;
