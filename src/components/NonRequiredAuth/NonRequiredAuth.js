import { useSelector } from 'react-redux'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

export const NonRequiredAuth = () => {
  const location = useLocation()
  const { isLoggedIn } = useSelector((state) => state.auth)

  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to='/home' state={{ from: location }} replace />
  )
}
