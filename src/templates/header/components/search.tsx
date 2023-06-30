import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { searchAtom } from "../../../atoms/search";

export function Search() {
  const [search, setSearch] = useRecoilState(searchAtom);
  return (
    <div>
      <div className="flex items-center bg-red-200 w-[28vw] pl-4 py-2 text-md rounded-md">
        <FaSearch className="text-red-400 text-md" />
        <input
          className="flex-1 pl-4 bg-red-200 outline-none text-red-900"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </div>
  );
}
