import { useRecoilState } from "recoil";
import { ITodoItem, todolistAtom } from "../../atoms/todolist";
import { useCallback } from "react";
import { FaCheck, FaPen } from "react-icons/fa";
import { Button } from "../button/button";

interface TodoItemProps {
  item: ITodoItem;
  onEdit: (initialValue?: ITodoItem) => void;
}

export function TodoItem(props: TodoItemProps) {
  const { item: todo, onEdit } = props;

  const [todoList, setTodoList] = useRecoilState(todolistAtom);

  const handleCompleteClick = useCallback(() => {
    const newTodoList = todoList.map((todoListItem) => {
      if (todoListItem.id !== todo.id) return todoListItem;
      return { ...todoListItem, isComplete: !todoListItem.isComplete };
    });
    setTodoList(newTodoList);
  }, [todoList, setTodoList]);

  const handleModalEditClick = useCallback(
    (evt: React.MouseEvent<Element, MouseEvent>) => {
      evt.stopPropagation();
      onEdit(todo);
    },
    []
  );

  return (
    <article
      onClick={handleCompleteClick}
      className="relative flex bg-red-100 p-4 pb-0 rounded-xl select-none cursor-pointer border-2 border-transparent hover:border-red-500"
    >
      <div
        className={`flex justify-center items-center bg-red-300 rounded-full w-10 h-10 ${
          todo.isComplete ? "animate-[bounce_0.3s_ease-in-out_0.3]" : ""
        }`}
      >
        {todo.isComplete && <FaCheck className="text-red-700 text-xl" />}
      </div>
      <section className="flex flex-col w-full">
        <section className="flex flex-col mt-2 ml-2">
          <h1
            className={`text-xl font-medium text-red-600 ${
              todo.isComplete ? "line-through" : ""
            }`}
          >
            {todo.title}
          </h1>
          <p
            className={`text-sm text-red-500 ${
              todo.isComplete ? "line-through" : ""
            }`}
          >
            {todo.description}
          </p>
        </section>
        <span
          className={`self-end pt-3 text-red-500 ${
            todo.isComplete ? "line-through" : ""
          }`}
        >
          {todo.createdAt.toLocaleDateString()}
        </span>
      </section>
      <Button
        className="absolute top-2 right-2 border-transparent"
        title="Editar esta tarea"
        onClick={handleModalEditClick}
        variant="secondary"
        centerIcon={<FaPen />}
      />
    </article>
  );
}
