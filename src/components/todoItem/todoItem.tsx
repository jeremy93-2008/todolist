import { ITodoItem } from "../../atoms/todolist";

interface TodoItemProps {
  item: ITodoItem;
}

export function TodoItem(props: TodoItemProps) {
  const { item: todo } = props;
  return (
    <article className="flex bg-red-100 p-4 pb-0 rounded-xl select-none">
      <div className="bg-red-300 rounded-full w-10 h-10 cursor-pointer" />
      <section className="flex flex-col w-full">
        <section className="flex flex-col mt-2 ml-2">
          <h1 className="text-xl font-medium text-red-600">{todo.title}</h1>
          <p className="text-sm text-red-500">{todo.description}</p>
        </section>
        <span className="self-end pt-3 text-red-500">
          {todo.createdAt.toLocaleDateString()}
        </span>
      </section>
    </article>
  );
}
