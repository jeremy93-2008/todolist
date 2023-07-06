import { ITodoListItem } from "../../selectors/todolistGroup";
import { TodoItem } from "../todoItem/todoItem";
import { isThisWeek, isToday } from "../../utils/date";
import { useRecoilValue } from "recoil";
import { stateAtom } from "../../atoms/state";
import { ITodoItem } from "../../atoms/todolist";

interface TodoItemListProps {
  item: ITodoListItem;
  onEdit: (initialValue?: ITodoItem) => void;
}

export function TodoListItem(props: TodoItemListProps) {
  const { item: todoListItem, onEdit } = props;
  const state = useRecoilValue(stateAtom);

  const isTodayAndStateToday =
    isToday(todoListItem.date) && (state === "today" || state === "inbox");

  return (
    <section>
      {
        <h1 className="text-red-900 font-bold">
          {isTodayAndStateToday ? "Hoy - " : ""}
          {!isTodayAndStateToday && isThisWeek(todoListItem.date)
            ? "Esta semana - "
            : ""}
          {todoListItem.date.toLocaleDateString()}
        </h1>
      }
      <section className="mt-3">
        {todoListItem.items.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} onEdit={onEdit} />
        ))}
      </section>
    </section>
  );
}
