import { createBrowserRouter } from "react-router";
import OnboardingPage from "../../pages/onboarding/OnboardingPage";
import LoginPage from "../../pages/login/LoginPage";
import RegisterPage from "../../pages/register/RegisterPage";
import DashboardPage from "../../pages/dashboard/DashboardPage";
import RoomPage from "../../pages/room/RoomPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: OnboardingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/room/:id",
    Component: RoomPage,
  },
]);
