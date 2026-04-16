import { useUserStore } from "@/entities/user/model/store";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router";
import { toast } from "sonner";

export default function OnboardingPage() {
  const { logout } = useUserStore();

  return (
    <>
      <div>OnboardingPage</div>
      <div className="flex flex-col items-start p-3 gap-4">
        <Button asChild variant="default">
          <Link to="/login">Войти</Link>
        </Button>

        <Button asChild variant="secondary">
          <Link to="/register">Зарегистрироваться</Link>
        </Button>

        <Button
          variant="destructive"
          className="cursor-pointer"
          onClick={() => {
            logout();
            toast.success("Вы успешно вышли из аккаунта");
          }}
        >
          Выйти
        </Button>
      </div>
    </>
  );
}
