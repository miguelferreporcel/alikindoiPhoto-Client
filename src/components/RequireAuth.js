

import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth()
    const location = useLocation()
    console.log('Desde RequireAuth -> auth: ', auth, 'auth.email: ', auth.email)
    return (
        auth?.email
          ? <Outlet />
          : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth;

/**
 * import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireAuth = ({allowedRoles}) => {
    const { auth } = useAuth()
    const location = useLocation()
    const authEmail = auth?.email
    const authRoles = [auth?.roles]
    console.log('AUTH.EMAIL: ' + authEmail)
    console.log('AUTH.ROLES: ' + authRoles);
    return (
        authRoles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : authEmail
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth
 */

/* import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("auth: ", auth);
  console.log("auth.email: ", auth.email);

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth; */
