import { selector } from "recoil";
import { getTodoListGroupState } from "./getter/getTodoListGroupState";
import { ITodoItem } from "../atoms/todolist";

export type ITodoListItem = {
  id: number;
  date: Date;
  items: ITodoItem[];
};

export const todolistGroupState = selector<ITodoListItem[]>({
  key: "todolistGroup",
  get: getTodoListGroupState,
});
