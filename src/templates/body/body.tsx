import { useRecoilValue } from "recoil";
import { FaPlus } from "react-icons/fa";
import { Button } from "../../components/button/button";
import { TodoListItem } from "../../components/todoListItem/todoListItem";
import { todolistGroupState } from "../../selectors/todolistGroup";

export function Body() {
  const todoList = useRecoilValue(todolistGroupState);
  return (
    <section className="flex flex-col flex-1 px-5 py-3">
      <section className="flex flex-col flex-1 mt-4 mx-4 overflow-y-auto">
        {todoList.map((todoListItem) => (
          <TodoListItem item={todoListItem} />
        ))}
      </section>
      <Button
        className="flex-grow-0 basis-2"
        centerIcon={<FaPlus />}
        title="Añadir nueva tarea"
        onClick={() => {}}
      />
    </section>
  );
}
