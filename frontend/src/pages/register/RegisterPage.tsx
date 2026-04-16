import { Club, Zap, ShieldCheck } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import RegisterForm from "@/features/auth/register/ui/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full flex bg-slate-50">
      {/* Левая часть */}
      <div className="hidden lg:flex w-1/2 bg-emerald-700 items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <Club className="absolute top-10 right-10 w-64 h-64 rotate-45" />
          <Club className="absolute bottom-20 left-10 w-48 h-48 -rotate-12" />
        </div>

        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-black mb-6 tracking-tight">
            Присоединяйтесь
          </h1>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl">Мгновенный старт</p>
                <p className="text-emerald-100">
                  Создание комнаты занимает меньше 10 секунд.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl">Приватность</p>
                <p className="text-emerald-100">
                  Ваши оценки и обсуждения доступны только вашей команде.
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
              Регистрация
            </CardTitle>
            <CardDescription className="text-base">
              Создайте профиль для доступа к комнатам
            </CardDescription>
          </CardHeader>

          {/* Форма регистрации */}
          <RegisterForm />
        </Card>
      </div>
    </div>
  );
}
