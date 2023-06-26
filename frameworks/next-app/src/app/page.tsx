import { TodoItem } from "@/components/TodoItem";
import { getTodos, createTodo } from "@/components/actions";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const todos = await getTodos();

  const todoBenchmark =
    typeof searchParams.todoBenchmark === "string" &&
    !Number.isNaN(Number(searchParams.todoBenchmark))
      ? Number(searchParams.todoBenchmark)
      : undefined;

  return (
    <main>
      <form action={createTodo}>
        <input type="text" name="name" />
        <button type="submit">Create</button>
      </form>
      <ul>
        {todoBenchmark
          ? Array(todoBenchmark)
              .fill(todos[1])
              .map((todo, index) => <TodoItem key={index} {...todo} />)
          : todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </main>
  );
}
