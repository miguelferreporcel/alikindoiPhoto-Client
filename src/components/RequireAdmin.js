import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAdmin = ({allowedRoles}) => {
  const { auth } = useAuth();
  const location = useLocation();
    const authRoles = [auth?.roles];
    console.log(
        "RequireAdmin - auth.roles:",
        auth.roles,
        "allowedRoles:",
        allowedRoles
    );

    const rolesFound = false
    if (authRoles?.find((role) => allowedRoles?.includes(role))) {
        rolesFound = true;
        console.log(rolesFound)
    }
    
    return(
        rolesFound
        ? <Outlet />
        : <Navigate to="/unauthorized" state={{ from: location }} replace />
    )
};

export default RequireAdmin;
