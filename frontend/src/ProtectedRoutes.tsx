import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const authUser = localStorage.getItem("authUser");

  return authUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
