import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import EmptyLayout from '../layouts/EmptyLayout.jsx'
import { PublicRoute } from '../components/PublicRoute.jsx'
import PhonePage from '../pages/auth/PhonePage.jsx'
import CodePage from '../pages/auth/CodePage.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import { ProtectedRoute } from '../components/ProtectedRoute.jsx'
import AccountLayout from '../pages/account/AccountLayout/AccountLayout.jsx'
import OrderHistoryPage from '../pages/account/OrderHistoryPage/OrderHistoryPage.jsx'
import FavoritesPage from '../pages/account/FavoritesPage/FavoritesPage.jsx'
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx'
import HomePage from '../pages/Home.jsx'

const createAppRouter = (isAuth) =>
  createBrowserRouter([
    {
      element: <EmptyLayout />,
      children: [
        {
          path: '/login',
          element: (
            <PublicRoute isAuth={isAuth}>
              <PhonePage />
            </PublicRoute>
          ),
        },
        {
          path: '/verify',
          element: (
            <PublicRoute isAuth={isAuth}>
              <CodePage />
            </PublicRoute>
          ),
        },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        {
          element: (
            <ProtectedRoute isAuth={isAuth}>
              <Outlet />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <HomePage /> },
            { path: 'catalog', element: <CatalogPage /> },
            {
              path: 'account',
              element: <AccountLayout />,
              children: [
                { index: true, element: <OrderHistoryPage /> },
                { path: 'favorites', element: <FavoritesPage /> },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <h2>Page not found</h2>,
    },
  ])

export default function AppRouter({ isAuth }) {
  const router = createAppRouter(isAuth)

  return <RouterProvider router={router} />
}
