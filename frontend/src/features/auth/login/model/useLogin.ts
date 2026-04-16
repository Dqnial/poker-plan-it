import { useUserStore } from "@/entities/user/model/store";
import { authApi } from "@/shared/api/auth";
import { getErrorMessage } from "@/shared/lib/utils";
import React from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const setAuth = useUserStore((state) => state.setAuth);
  const navigate = useNavigate();

  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await authApi.login(email, password);

      setAuth(response.data.user);

      const user = response.data.user;

      toast.success(`С возвращением, ${user.name}!`);

      navigate("/");
    } catch (error: any) {
      const message = getErrorMessage(error);

      toast.error(message);

      console.error("Full error object:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { email, setEmail, password, setPassword, isLoading, handleLogin };
};
