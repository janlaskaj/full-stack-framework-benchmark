import { getTodos, createTodo } from "../todos/todoActions";

export const load = async () => {
  return {
    todos: getTodos(),
  };
};

export const actions = {
  createTodo: async ({ request }) => {
    const formData = await request.formData();
    await createTodo(formData);

    return { success: true };
  },
};
