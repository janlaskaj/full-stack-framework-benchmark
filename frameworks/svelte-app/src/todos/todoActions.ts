import { fail } from "@sveltejs/kit";
import { promises as fs } from "fs";

const TODOS_FILE_PATH = process.cwd() + "/todos.json";
const TODOS_ENCODING = "utf8";

export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

const wait = () => new Promise((resolve) => setTimeout(resolve, 200));

export const getTodos = async () => {
  await wait();

  const fileContents = await fs.readFile(TODOS_FILE_PATH, TODOS_ENCODING);
  const todos: Todo[] = JSON.parse(fileContents).todos;

  return todos;
};

export const saveTodos = async (todos: Todo[]) => {
  await fs.writeFile(
    TODOS_FILE_PATH,
    JSON.stringify({ todos }),
    TODOS_ENCODING
  );
};

export const createTodo = async (data: FormData) => {
  const name = data.get("name")?.valueOf();
  if (typeof name !== "string" || name.length === 0) {
    return fail(400, { name, missing: true });
  }

  const todos = await getTodos();

  todos.push({
    id: (todos.length + 1).toString(),
    name,
    completed: false,
  });

  await saveTodos(todos);
};

export const toggleTodo = async (id: string) => {
  const todos = await getTodos();

  const updatedTodos: Todo[] = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  await saveTodos(updatedTodos);
};
