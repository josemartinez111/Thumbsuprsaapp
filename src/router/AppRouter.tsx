// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                ROUTER > APP_ROUTER.TSX
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import { RootLayout } from '../app/pages/(site)/RootLayout.tsx';
import { Fragment, lazy, Suspense } from 'react';
import { FallbackComponent } from '../components';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Lazy load the pages
const HomePage = lazy(() => import('../app/pages/(site)/home/home.page'));
// const ContactUsPage = lazy(() => import('../app/pages/(site)/contact-us/contact-us.page'));
// const PricingPage = lazy(() => import('../app/pages/(site)/pricing/pricing.page'));
const HealthCheckPage = lazy(() => import('../app/pages/health-check.page'));
const NotFoundPage = lazy(() => import('../app/pages/not-found/not-found.page'));
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const routes: Array<RouteObject> = [
  {
    element: (
      <Fragment>
        <ScrollRestoration />
        <RootLayout />
      </Fragment>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
        handle: { title: 'Home', withLayout: true },
      },
      // {
      //   path: '/contact',
      //   element: <ContactUsPage />,
      //   handle: { title: 'Contact & Volunteer', withLayout: true },
      // },
      // {
      //   path: '/pricing',
      //   element: <PricingPage />,
      //   handle: { title: 'Pricing', withLayout: true },
      // },
      {
        path: '/health-check',
        element: <HealthCheckPage />,
        handle: { title: 'HealthCheck', withLayout: false },
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
    handle: { title: 'Not Found', withLayout: false },
  },
];
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const router = createBrowserRouter(routes);
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// In AppRouter.tsx
export function AppRouter() {
  return (
    <div className='animate-fadeIn dark:animate-none'>
      <Suspense fallback={<FallbackComponent />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
