// TODO: Реализовать хук для автоматического обновления токена
// TODO: Интегрировать с TanStack Query или Axios Interceptors
// TODO: Если refresh вернул 401 — редирект на /login

import { authApi } from "@/shared/api/auth";

export const useRefresh = () => {
  const handleRefresh = async () => {
    try {
      await authApi.refresh();
      console.log("Сессия обновлена");
    } catch (error) {
      console.error("Не удалось обновить сессию");
    }
  };

  return { handleRefresh };
};
