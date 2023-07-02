import { atom } from "recoil";

export const badgeAtom = atom<"all" | "uncompleted" | "completed">({
  key: "badge",
  default: "all",
});
