import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";

export function Profile() {
  const { data } = useSWR("https://randomuser.me/api/", fetcher);

  if (!data) return <div>Cargando...</div>;

  const user = data.results[0];

  return (
    <div className="flex items-center px-4">
      <img
        className="w-[42px] h-[42px] rounded-full"
        src={user.picture.thumbnail}
        alt="profile"
      />
      <span className="text-white text-sm pl-3">{user.login.username}</span>
    </div>
  );
}
