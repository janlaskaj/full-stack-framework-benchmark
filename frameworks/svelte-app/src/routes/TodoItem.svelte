<script lang="ts">
  import { invalidateAll } from "$app/navigation";

  import type { Todo } from "../todos/todoActions";

  export let todo: Todo;

  async function toggleTodo(todoId: string) {
    await fetch("/api/toggle-todo", {
      method: "POST",
      body: JSON.stringify({ todoId }),
      headers: {
        "content-type": "application/json",
      },
    });

    invalidateAll();
  }
</script>

<li>
  <input
    type="checkbox"
    name={todo.name}
    id={todo.id}
    checked={todo.completed}
    on:change={() => toggleTodo(todo.id)}
  />
  <label for={todo.id}>{todo.name}</label>
</li>
