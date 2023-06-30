import { atom } from "recoil";

export type ITodoItem = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  isComplete: boolean;
};

export const todolistAtom = atom<ITodoItem[]>({
  key: "todolist",
  default: [
    {
      id: 1,
      title: "Soy un item de hoy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor nulla, aliquet non tristique at, cursus vitae tortor. Vivamus rhoncus odio turpis, ac tincidunt libero vestibulum placerat. Duis sit amet purus justo. Suspendisse iaculis turpis molestie venenatis interdum. ",
      createdAt: new Date(),
      isComplete: false,
    },
  ],
});
