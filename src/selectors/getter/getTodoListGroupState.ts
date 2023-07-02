import { GetRecoilValue } from "recoil";
import { todolistAtom } from "../../atoms/todolist";
import { getInboxTodoListGroup } from "../util/getInboxTodoListGroup";
import { isThisWeek, isToday } from "../../utils/date";
import { stateAtom } from "../../atoms/state";
import { searchAtom } from "../../atoms/search";
import { badgeAtom } from "../../atoms/badge";

interface IGetTodoListGroupState {
  get: GetRecoilValue;
}

export function getTodoListGroupState(params: IGetTodoListGroupState) {
  const { get } = params;
  const todolist = get(todolistAtom);
  const state = get(stateAtom);
  const search = get(searchAtom);
  const badge = get(badgeAtom);

  const todoListGroup = getInboxTodoListGroup(todolist, search, badge);

  switch (state) {
    case "inbox":
      return todoListGroup;
    case "today":
      return todoListGroup.filter((item) => isToday(item.date));
    case "week":
      return todoListGroup.filter((item) => isThisWeek(item.date));
    default:
      return todoListGroup;
  }
}
