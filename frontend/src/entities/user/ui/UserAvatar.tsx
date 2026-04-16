// TODO: Сделать компонент аватарки с инициалами или картинкой
// Должен принимать объект User и размер (sm, md, lg)

export const UserAvatar = ({ username }: { username: string }) => {
  return (
    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
      {username.charAt(0).toUpperCase()}
    </div>
  );
};
