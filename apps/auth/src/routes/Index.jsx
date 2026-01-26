import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/servicePages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { AUTH_ROUTES } from "../constants/routes.constants";
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import CareerPage from "../pages/CareerPage";
import Blogpage from "../pages/Blogpage";
import BlogDetilePage from "../pages/BlogDetilePage";
import ServiceDetailesPage from "../pages/servicePages/ServiceDetailesPage";
export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { index: `${AUTH_ROUTES.HOME}`, element: <Home /> },
      { path: `${AUTH_ROUTES.ABOUT}`, element: <About /> },
      { path: `${AUTH_ROUTES.SERVICE}`, element: <Services /> },
      { path: `${AUTH_ROUTES.CONTACT}`, element: <Contact /> },
      { path: `${AUTH_ROUTES.CAREER}`, element: <CareerPage /> },
      { path: `${AUTH_ROUTES.BLOG}`, element: <Blogpage /> },
      { path: `${AUTH_ROUTES.BLOG}/:id`, element: <BlogDetilePage /> },
      {
        path: `${AUTH_ROUTES.SERVICE}/:type`,
        element: <ServiceDetailesPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: `${AUTH_ROUTES.LOGIN}`, element: <Login /> },
      { path: `${AUTH_ROUTES.SIGNUP}`, element: <Signup /> },
    ],
  },
]);
