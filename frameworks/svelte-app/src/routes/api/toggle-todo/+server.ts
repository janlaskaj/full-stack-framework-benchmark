import { toggleTodo } from "../../../todos/todoActions";

export async function POST({ request }) {
  const { todoId }: { todoId: string } = await request.json();

  await toggleTodo(todoId);

  return new Response();
}
