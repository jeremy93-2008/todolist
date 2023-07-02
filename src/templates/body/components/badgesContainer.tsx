import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Badge } from "../../../components/badge/badge";
import { badgeAtom } from "../../../atoms/badge";

export function BadgesContainer() {
  const [badgeSelected, setBadgeSelected] = useRecoilState(badgeAtom);

  const handleClick = useCallback(
    (badgeSelected: "all" | "uncompleted" | "completed") => () => {
      setBadgeSelected(badgeSelected);
    },
    []
  );

  return (
    <section className="flex gap-2 mt-2 mb-3">
      <Badge
        text="All"
        selected={badgeSelected === "all"}
        onClick={handleClick("all")}
      />
      <Badge
        text="Completed"
        selected={badgeSelected === "completed"}
        onClick={handleClick("completed")}
      />
      <Badge
        text="Not Completed"
        selected={badgeSelected === "uncompleted"}
        onClick={handleClick("uncompleted")}
      />
    </section>
  );
}
