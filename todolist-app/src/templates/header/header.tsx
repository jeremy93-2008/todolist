import { Search } from "./components/search";
import { Profile } from "./components/profile";

export function Header() {
  return (
    <header className="flex items-center justify-between w-screen p-2 h-16 bg-red-400">
      <h1 className="font-lilita text-white text-xl px-3">ToDo List</h1>
      <div>
        <Search />
      </div>
      <div>
        <Profile />
      </div>
    </header>
  );
}
