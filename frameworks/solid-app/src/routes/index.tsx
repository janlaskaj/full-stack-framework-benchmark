import { useRouteData, useSearchParams } from "solid-start";
import { createServerAction$, createServerData$ } from "solid-start/server";
import { TodoItem } from "~/components/TodoItem";
import { createTodo, getTodos } from "~/components/actions";

export function routeData() {
  return createServerData$(async () => {
    const [searchParams] = useSearchParams();

    const todoBenchmark =
      typeof searchParams.todoBenchmark === "string" &&
      !Number.isNaN(Number(searchParams.todoBenchmark))
        ? Number(searchParams.todoBenchmark)
        : undefined;

    const todos = await getTodos();

    return { todos, todoBenchmark };
  });
}

export default function Home() {
  const { latest } = useRouteData<typeof routeData>();

  const [enrolling, { Form }] = createServerAction$(async (form: FormData) => {
    createTodo(form);
  });

  return (
    <main>
      <Form>
        <input type="text" name="name" id="name" />
        <button type="submit" disabled={enrolling.pending}>
          Create
        </button>
      </Form>
      <ul>
        {latest?.todoBenchmark && latest?.todos
          ? Array(latest.todoBenchmark)
              .fill(latest.todos[1])
              .map((todo) => <TodoItem todo={todo} />)
          : latest?.todos.map((todo) => <TodoItem todo={todo} />)}
      </ul>
    </main>
  );
}
