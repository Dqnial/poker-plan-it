// import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useUserStore } from "@/entities/user/model/store";
// import { toast } from "sonner";

export const PublicRoute = () => {
  const isAuth = useUserStore((state) => state.isAuth);
  //   const user = useUserStore((state) => state.user);

  //   useEffect(() => {
  //     if (isAuth) {
  //       toast.info(`Вы уже авторизованы как ${user?.name}`);
  //     }
  //   }, [isAuth, user]);

  // Если авторизован - отправляем на дашборд
  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  // Если гость - разрешаем просмотр (LoginPage или RegisterPage)
  return <Outlet />;
};
