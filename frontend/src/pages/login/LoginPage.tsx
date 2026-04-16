import { Spade, LayoutDashboard, Users2 } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import LoginForm from "@/features/auth/login/ui/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex bg-slate-50">
      {/* Левая часть */}
      <div className="hidden lg:flex w-1/2 bg-indigo-600 items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Spade className="absolute -top-20 -left-20 w-96 h-96 rotate-12" />
          <Spade className="absolute -bottom-20 -right-20 w-80 h-80 -rotate-12" />
        </div>

        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-black mb-6 tracking-tight">
            Poker Plan-It
          </h1>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-500 p-2 rounded-lg">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl">Оценивайте задачи</p>
                <p className="text-indigo-100">
                  Удобный интерфейс для быстрого планирования спринтов.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-500 p-2 rounded-lg">
                <Users2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl">Командная работа</p>
                <p className="text-indigo-100">
                  Создавайте комнаты и приглашайте коллег в один клик.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Правая часть */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md border-none shadow-2xl lg:shadow-none bg-transparent lg:bg-white">
          <CardHeader className="space-y-1 text-center lg:text-left">
            <CardTitle className="text-3xl font-bold tracking-tight">
              С возвращением!
            </CardTitle>
            <CardDescription className="text-base">
              Войдите, чтобы продолжить работу
            </CardDescription>
          </CardHeader>

          {/* Форма логина */}
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}
