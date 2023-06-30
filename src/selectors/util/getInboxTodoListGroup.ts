import { ITodoItem, ITodoListItem } from "../todolistGroup";

export function getInboxTodoListGroup(todolist: ITodoItem[], search: string) {
  return todolist.reduce((acc, item) => {
    const date = item.createdAt;
    const dateKey = date.toDateString();
    const index = acc.findIndex((item) => item.date.toDateString() === dateKey);
    if (
      search &&
      !item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
      !item.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return acc;
    }
    if (index === -1) {
      acc.push({
        id: acc.length + 1,
        date,
        items: [item],
      });
    } else {
      acc[index].items.push(item);
    }
    return acc;
  }, [] as ITodoListItem[]);
}
