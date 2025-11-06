import { Navigate, Outlet } from "react-router";

export const PublicRoutes = () => {
  const isLogged = localStorage.getItem("isLogged") === "true";
  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};
