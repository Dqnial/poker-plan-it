import { api } from "./api";

export const roomsApi = {
  createRoom: (roomId: string, name: string, ownerId: string) =>
    api.post("/rooms", { roomId, name, ownerId }),
  getRooms: () => api.get("/rooms").then((res) => res.data),
  getRoomById: (id: string) => api.get(`/rooms/${id}`).then((res) => res.data),

  joinRoom: (roomId: string) => api.post(`/rooms/${roomId}/join`),
  vote: (roomId: string, value: string | number) =>
    api.post(`/rooms/${roomId}/vote`, { value }),
};
