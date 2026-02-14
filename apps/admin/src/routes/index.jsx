import { createBrowserRouter } from "react-router-dom";
import AdminDasboardLayout from "../layouts/AdminDasboardLayout";

import { ADMIN_ROUTES } from "../constants/route.constants";
import DashboardPage from "../pages/DashboardPage";

export const router = createBrowserRouter([
  {
    element: <AdminDasboardLayout />,
    children: [
      { path: "/", element: <DashboardPage/> },
      { path: "/admin", element: <DashboardPage/> },
      { path: ADMIN_ROUTES.DASHBOARD, element: <DashboardPage /> },
    ],
  },
]);
