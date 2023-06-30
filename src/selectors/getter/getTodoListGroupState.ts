import { GetRecoilValue } from "recoil";
import { todolistAtom } from "../../atoms/todolist";
import { getInboxTodoListGroup } from "../util/getInboxTodoListGroup";
import { isThisWeek, isToday } from "../../utils/date";
import { stateAtom } from "../../atoms/state";
import { searchAtom } from "../../atoms/search";

interface IGetTodoListGroupState {
  get: GetRecoilValue;
}

export function getTodoListGroupState(params: IGetTodoListGroupState) {
  const { get } = params;
  const todolist = get(todolistAtom);
  const state = get(stateAtom);
  const search = get(searchAtom);

  const todoListGroup = getInboxTodoListGroup(todolist, search);

  switch (state) {
    case "inbox":
      return todoListGroup;
    case "today":
      return [
        {
          id: 1,
          date: new Date(),
          items: todolist.filter(
            (item) =>
              isToday(item.createdAt) &&
              (item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
                item.description
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()))
          ),
        },
      ];
    case "week":
      return [
        {
          id: 1,
          date: isThisWeek(new Date()) ? new Date() : new Date(2021, 0, 1),
          items: todolist.filter(
            (item) =>
              isThisWeek(item.createdAt) &&
              (item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
                item.description
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()))
          ),
        },
      ];
    default:
      return todoListGroup;
  }
}
