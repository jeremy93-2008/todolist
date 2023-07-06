import { FaSave } from "react-icons/fa";
import { Button } from "../../../components/button/button";
import { Modal } from "../../../components/modal/modal";
import { Formik } from "formik";

export interface ITaskFormModalDefaultValues {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface ITaskFormModalProps {
  isOpen: boolean;
  initialValues: ITaskFormModalDefaultValues | null;
  onClose: () => void;
}

export function TaskFormModal(props: ITaskFormModalProps) {
  const { isOpen, initialValues, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      title={initialValues ? "Editar Tarea" : "Añadir Tarea"}
      height="400px"
      onClose={onClose}
    >
      <Formik
        initialValues={
          initialValues ?? {
            title: "",
            description: "",
            date: new Date().toLocaleDateString(),
          }
        }
        onSubmit={() => {}}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form
            className="flex flex-col flex-1 justify-between"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <section className="flex flex-1 flex-col mb-3">
                <label className="mb-1" htmlFor="title">
                  Titulo
                </label>
                <input
                  className="px-3 py-2 rounded-md border-[1px] border-red-200 outline-none hover:border-red-600 focus:border-red-600"
                  type="text"
                  id="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              </section>
              <section className="flex flex-1 flex-col mb-3">
                <label className="mb-1" htmlFor="description">
                  Descripción
                </label>
                <input
                  className="px-3 py-2 rounded-md border-[1px] border-red-200 outline-none hover:border-red-600 focus:border-red-600"
                  type="text"
                  id="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </section>
              <section className="flex flex-1 flex-col mb-3">
                <label className="mb-1" htmlFor="date">
                  Fecha
                </label>
                <input
                  className="px-3 py-2 rounded-md border-[1px] border-red-200 outline-none hover:border-red-600 focus:border-red-600"
                  type="date"
                  id="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                />
              </section>
            </div>
            <Button
              className="flex-grow-0"
              leftIcon={<FaSave />}
              onClick={() => {}}
            >
              Guardar Tarea
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  );
}
