import { atom } from "recoil";

export const stateAtom = atom<"inbox" | "today" | "week">({
  key: "state",
  default: "inbox",
});
