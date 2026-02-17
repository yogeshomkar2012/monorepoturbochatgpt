// router-dom
import { createBrowserRouter } from 'react-router-dom';
// router-dom

// packages
// constants
import { AUTH_ROUTES } from '@repo/constants';
// constants
// packages

// layouts
import PublicLayout from '../layouts/PublicLayout';
import AuthLayout from '../layouts/AuthLayout';
import ServiceLayout from '../layouts/ServiceLayout';
// layouts

// pages
import CareerPage from '../pages/CareerPage';
import Blogpage from '../pages/Blogpage';
import BlogDetilePage from '../pages/BlogDetilePage';
import ServiceDetailesPage from '../pages/servicePages/ServiceDetailesPage';
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import LoginPages from '../pages/authpages/LoginPages';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/servicePages/Services';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
// pages

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: AUTH_ROUTES.HOME,
        element: <Home />,
      },
      {
        path: AUTH_ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: AUTH_ROUTES.TERM,
        element: <TermsPage />,
      },
      {
        path: AUTH_ROUTES.PRIVACY,
        element: <PrivacyPage />,
      },
      // Nested service routes
      {
        path: AUTH_ROUTES.SERVICE,
        element: <ServiceLayout />,
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: ':type',
            element: <ServiceDetailesPage />,
          },
        ],
      },
      // Nested blog routes
      {
        path: AUTH_ROUTES.BLOG,
        children: [
          {
            index: true,
            element: <Blogpage />,
          },
          {
            path: ':id',
            element: <BlogDetilePage />,
          },
        ],
      },
      {
        path: AUTH_ROUTES.CONTACT,
        element: <Contact />,
      },
      {
        path: AUTH_ROUTES.CAREER,
        element: <CareerPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: `${AUTH_ROUTES.LOGIN}`, element: <LoginPages /> },
      { path: `${AUTH_ROUTES.SIGNUP}`, element: <Signup /> },
    ],
  },
]);
