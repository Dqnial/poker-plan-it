import { createBrowserRouter } from "react-router";
import OnboardingPage from "@/pages/onboarding/OnboardingPage";
import LoginPage from "@/pages/login/LoginPage";
import RegisterPage from "@/pages/register/RegisterPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import RoomPage from "@/pages/room/RoomPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: OnboardingPage,
  },

  // --- Только для ГОСТЕЙ ---
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
    ],
  },

  // --- Только для АВТОРИЗОВАННЫХ ---
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        Component: DashboardPage,
      },
      {
        path: "/room/:id",
        Component: RoomPage,
      },
    ],
  },
]);
