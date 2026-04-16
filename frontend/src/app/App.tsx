import { RouterProvider } from "react-router";
import { Toaster } from "@/shared/ui/sonner";
import { router } from "./providers/router";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}
