import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ children, isAuth }) {
  if (!isAuth) return <Navigate to="/login" replace />

  return children
}
