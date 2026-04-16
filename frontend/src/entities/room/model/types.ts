export type VotingSystem = "fibonacci" | "t-shirts" | "powers-of-2";

export interface Room {
  id: string;
  name: string;
  ownerId: string;
  votingSystem: VotingSystem;
  participants: string[];
  currentIssue?: string;
  isVotingStarted: boolean;
}

// TODO: Добавить интерфейс для истории голосований (HistoryItem)
// TODO: Добавить типы для статусов комнаты (ожидание, голосование, финал)
