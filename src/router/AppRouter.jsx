import { Routes, Route, Outlet } from 'react-router-dom'

import { ROUTES } from '../routes/routes.js'

import { removeLeadingSlash } from '../utils/utils.js'

import { ProtectedRoute } from '../components/ProtectedRoute.jsx'

import PhonePage from '../pages/auth/PhonePage'
import CodePage from '../pages/auth/CodePage'
import Home from '../pages/Home.jsx'
import { useSelector } from 'react-redux'
import { PublicRoute } from '../components/PublicRoute.jsx'
import CheckoutPage from '../pages/CheckoutPage.jsx'
import { CheckoutSuccessPage } from '../pages/CheckoutSuccessPage.jsx'
import AccountLayout from '../pages/account/AccountLayout/AccountLayout.jsx'
import FavoritesPage from '../pages/account/FavoritesPage/FavoritesPage.jsx'
import OrderHistoryPage from '../pages/account/OrderHistoryPage/OrderHistoryPage.jsx'

const protectedRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.CHECKOUT, element: <CheckoutPage /> },
  { path: ROUTES.CHECKOUT_SUCCESS, element: <CheckoutSuccessPage /> },
]

export default function AppRouter() {
  const isAuth = useSelector((state) => state.user.isAuth)

  return (
    <Routes>
      <Route
        path={ROUTES.LOGIN}
        element={
          <PublicRoute isAuth={isAuth}>
            <PhonePage />
          </PublicRoute>
        }
      />
      <Route
        path={ROUTES.VERIFY}
        element={
          <PublicRoute isAuth={isAuth}>
            <CodePage />
          </PublicRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Outlet />
          </ProtectedRoute>
        }
      >
        {protectedRoutes.map((route) => (
          <Route key={route.path} path={removeLeadingSlash(route.path)} element={route.element} />
        ))}
      </Route>

      <Route path={removeLeadingSlash(ROUTES.ACCOUNT)} element={<AccountLayout />}>
        <Route index element={<OrderHistoryPage />} />
        <Route path={ROUTES.ACCOUNT_FAVORITES} element={<FavoritesPage />} />
      </Route>

      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  )
}
