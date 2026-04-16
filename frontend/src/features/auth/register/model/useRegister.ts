import { useUserStore } from "@/entities/user/model/store";
import { authApi } from "@/shared/api/auth";
import React from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useRegister = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { setAuth } = useUserStore();
  const navigate = useNavigate();

  const handleRegister = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await authApi.register(email, name, password);

      const user = response.data.user;

      setAuth(user);

      toast.success(`Добро пожаловать, ${user.name}!`);
      navigate("/");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.detail || "Произошла непредвиденная ошибка";

      toast.error(`Ошибка при регистрации: ${errorMessage}`);

      console.error("Full error object:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    isLoading,
    handleRegister,
  };
};
