// TODO: Реализовать карточку комнаты
// Должна отображать: Название, количество участников, систему оценки

export const RoomCard = ({
  name,
  participantsCount,
}: {
  name: string;
  participantsCount: number;
}) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm">Участников: {participantsCount}</p>
    </div>
  );
};
