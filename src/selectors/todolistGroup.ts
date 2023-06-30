import { selector } from "recoil";
import { getTodoListGroupState } from "./getter/getTodoListGroupState";

export type ITodoItem = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  isComplete: boolean;
};

export type ITodoListItem = {
  id: number;
  date: Date;
  items: ITodoItem[];
};

export const todolistGroupState = selector<ITodoListItem[]>({
  key: "todolistGroup",
  get: getTodoListGroupState,
});
