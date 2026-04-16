export interface User {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  avatar_color: string;
}

// TODO: Добавить интерфейс для состояния игрока в процессе сессии (выбранная карта)
// interface PlayerState extends User { cardValue?: string; hasVoted: boolean; }
