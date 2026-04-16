import { CardContent, CardFooter } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { useLogin } from "../model/useLogin";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const { email, setEmail, password, setPassword, isLoading, handleLogin } =
    useLogin();

  return (
    <form onSubmit={handleLogin}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <Input
            id="password"
            type="password"
            placeholder="Минимум 8 символов"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12"
            required
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button
          type="submit"
          className="w-full h-12 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Подождите...
            </>
          ) : (
            "Войти"
          )}
        </Button>
        <p className="text-sm text-center text-slate-500">
          Нет аккаунта?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:underline font-bold"
          >
            Зарегистрироваться
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}
