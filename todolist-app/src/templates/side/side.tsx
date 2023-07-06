import { useRecoilState } from "recoil";
import { BsInboxFill } from "react-icons/bs";
import { FaCalendarDay, FaCalendarWeek } from "react-icons/fa";
import { stateAtom } from "../../atoms/state";
import { Button } from "../../components/button/button";

export function Side() {
  const [state, setState] = useRecoilState(stateAtom);

  const handleChangeState = (newState: "inbox" | "today" | "week") => () => {
    setState(newState);
  };

  return (
    <aside className="flex flex-col items-center bg-red-100 w-[248px]">
      <h1 className="text-red-900 text-md font-bold px-4 pt-4">
        Filtros & Etiquetas
      </h1>
      <section className="flex flex-col gap-3 w-full px-3 pt-3">
        <Button
          selected={state === "inbox"}
          leftIcon={
            <BsInboxFill
              className={`${
                state !== "inbox" ? "text-violet-700" : "text-white"
              } text-lg`}
            />
          }
          onClick={handleChangeState("inbox")}
        >
          Bandeja de entrada
        </Button>
        <Button
          selected={state === "today"}
          leftIcon={
            <FaCalendarDay
              className={`${
                state !== "today" ? "text-sky-700" : "text-white"
              }  text-lg`}
            />
          }
          onClick={handleChangeState("today")}
        >
          Tareas para hoy
        </Button>
        <Button
          selected={state === "week"}
          leftIcon={
            <FaCalendarWeek
              className={`${
                state !== "week" ? "text-green-700" : "text-white"
              }  text-lg`}
            />
          }
          onClick={handleChangeState("week")}
        >
          Tareas para esta semana
        </Button>
      </section>
    </aside>
  );
}
