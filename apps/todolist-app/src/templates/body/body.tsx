import { useRecoilValue } from "recoil";
import { FaPlus, FaFrown } from "react-icons/fa";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { Button } from "../../components/button/button";
import { TodoListItem } from "../../components/todoListItem/todoListItem";
import { BadgesContainer } from "./components/badgesContainer";
import { searchAtom } from "../../atoms/search";
import { todolistGroupState } from "../../selectors/todolistGroup";
import {
  ITaskFormModalDefaultValues,
  TaskFormModal,
} from "./components/taskFormModal";
import { useState } from "react";
import { ITodoItem } from "../../atoms/todolist";

export function Body() {
  const todoList = useRecoilValue(todolistGroupState);
  const search = useRecoilValue(searchAtom);

  const [isOpen, setIsOpen] = useState(false);
  const [defaultValues, setDefaultValues] =
    useState<ITaskFormModalDefaultValues | null>(null);

  const onOpen = (todo?: ITodoItem) => {
    setIsOpen(true);
    if (!todo) return setDefaultValues(null);
    setDefaultValues({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      date: todo.createdAt.toLocaleDateString(),
    });
  };
  const onClose = () => setIsOpen(false);

  return (
    <section className="flex flex-col flex-1 px-5 py-3">
      <section className="flex flex-col flex-1 mx-4 overflow-y-auto">
        <BadgesContainer />
        <section className="flex flex-col gap-3 mt-3">
          {todoList.map((todoListItem) => (
            <TodoListItem item={todoListItem} onEdit={onOpen} />
          ))}
          {todoList.length === 0 && search === "" && (
            <div className="flex flex-col flex-1 justify-center items-center mt-4">
              <BsHandThumbsUpFill className="text-3xl text-red-900 font-bold" />
              <h1 className="mt-2 text-red-900 font-bold">
                Has realizado todas las tareas
              </h1>
              <h1 className="text-red-900 font-bold">¡Enhorabuena!</h1>
            </div>
          )}
          {todoList.length === 0 && search !== "" && (
            <div className="flex flex-col flex-1 justify-center items-center mt-4">
              <FaFrown className="text-3xl text-red-900 font-bold" />
              <h1 className="mt-2 text-red-900 font-bold">
                No se ha encontrado ninguna tarea
              </h1>
            </div>
          )}
        </section>
      </section>
      <Button
        className="flex-grow-0 basis-2"
        centerIcon={<FaPlus />}
        title="Añadir nueva tarea"
        onClick={() => onOpen()}
      />
      <TaskFormModal
        initialValues={defaultValues}
        isOpen={isOpen}
        onClose={onClose}
      />
    </section>
  );
}
