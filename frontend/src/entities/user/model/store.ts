import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "./types";

interface UserState {
  user: User | null;
  isAuth: boolean;
  setAuth: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuth: false,
      setAuth: (user) => set({ user, isAuth: true }),
      logout: () => {
        set({ user: null, isAuth: false });
        localStorage.removeItem("user-storage");
      },
    }),
    {
      name: "user-storage",
    },
  ),
);
