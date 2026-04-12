import { api } from "./api";

export const authApi = {
  register: (username: string, email: string, password: string) =>
    api.post("/auth/register", { username, email, password }),
  login: (email: string, password: string) =>
    api.post("/auth/login", { email, password }),
  logout: () => api.post("/auth/logout"),
  refresh: () => api.get("/auth/refresh"),
};
