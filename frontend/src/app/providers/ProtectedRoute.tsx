import { Navigate, Outlet } from "react-router";
import { useUserStore } from "@/entities/user/model/store";

export const ProtectedRoute = () => {
  const isAuth = useUserStore((state) => state.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
