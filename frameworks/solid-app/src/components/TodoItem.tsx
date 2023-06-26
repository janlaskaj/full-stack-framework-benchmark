import server$ from "solid-start/server";
import { Todo, toggleTodo } from "./actions";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const toggleTodoServer = server$(async (message: string) => {
    toggleTodo(message);
  });

  return (
    <li>
      <input
        type="checkbox"
        name="todo"
        id={todo.id}
        checked={todo.completed}
        onChange={async () => {
          await toggleTodoServer(todo.id);
        }}
      />
      <label for={todo.id}>{todo.name}</label>
    </li>
  );
};
