import { Button } from "@/shared/ui/button";
import { CardContent, CardFooter } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Loader2 } from "lucide-react";
import { Link } from "react-router";
import { useRegister } from "../model/useRegister";

export default function RegisterForm() {
  const {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    isLoading,
    handleRegister,
  } = useRegister();

  return (
    <form onSubmit={handleRegister}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            placeholder="Как вас называть?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
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
          className="w-full h-12 text-lg font-semibold bg-emerald-700 hover:bg-emerald-800"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Подождите...
            </>
          ) : (
            "Зарегистрироваться"
          )}
        </Button>
        <p className="text-sm text-center text-slate-500">
          Уже есть аккаунт?{" "}
          <Link
            to="/login"
            className="text-emerald-700 hover:underline font-bold"
          >
            Войти
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}
