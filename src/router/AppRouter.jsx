import { Routes, Route, Outlet } from 'react-router-dom'

import { ROUTES } from '../routes/routes.js'

import { removeLeadingSlash } from '../utils/utils.js'

import { ProtectedRoute } from '../components/ProtectedRoute.jsx'

import PhonePage from '../pages/auth/PhonePage'
import CodePage from '../pages/auth/CodePage'
import Home from '../pages/Home.jsx'
import Profile from '../pages/Profile.jsx'
import { useSelector } from 'react-redux'
import { PublicRoute } from '../components/PublicRoute.jsx'
import CheckoutPage from '../pages/CheckoutPage.jsx'
import { CheckoutSuccessPage } from '../pages/CheckoutSuccessPage.jsx'

const protectedRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.PROFILE, element: <Profile /> },
  { path: ROUTES.CHECKOUT, element: <CheckoutPage /> },
  { path: ROUTES.CHECKOUT_SUCCESS, element: <CheckoutSuccessPage /> },
]

export default function AppRouter() {
  const isAuthenticated = useSelector((state) => state.user.isAuth)

  return (
    <Routes>
      <Route
        path={ROUTES.LOGIN}
        element={
          <PublicRoute isAuth={isAuthenticated}>
            <PhonePage />
          </PublicRoute>
        }
      />
      <Route
        path={ROUTES.VERIFY}
        element={
          <PublicRoute isAuth={isAuthenticated}>
            <CodePage />
          </PublicRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuthenticated}>
            <Outlet />
          </ProtectedRoute>
        }
      >
        {protectedRoutes.map((route) => (
          <Route key={route.path} path={removeLeadingSlash(route.path)} element={route.element} />
        ))}
      </Route>

      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  )
}
