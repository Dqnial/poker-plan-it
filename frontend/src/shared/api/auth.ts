import { api } from "./api";

export const authApi = {
  register: (email: string, name: string, password: string) =>
    api.post("/auth/register", { name, email, password }),
  login: (email: string, password: string) =>
    api.post("/auth/login", { email, password }),
  logout: () => api.post("/auth/logout"),
  refresh: () => api.get("/auth/refresh"),
};
