<script lang="ts">
  import { enhance } from "$app/forms";

  import { page } from "$app/stores";
  import TodoItem from "./TodoItem.svelte";

  export let data;
  $: todos = data.todos;

  const todoBenchmark =
    $page.url.searchParams.has("todoBenchmark") &&
    !isNaN(Number($page.url.searchParams.get("todoBenchmark")))
      ? Number($page.url.searchParams.get("todoBenchmark"))
      : undefined;
</script>

<form method="post" action="?/createTodo" use:enhance>
  <input type="text" name="name" id="name" />
  <button type="submit">Create</button>
</form>
<ul>
  {#if todoBenchmark}
    {#each Array(todoBenchmark).fill(todos[1]) as todo}
      <TodoItem {todo} />
    {/each}
  {:else}
    {#each todos as todo}
      <TodoItem {todo} />
    {/each}
  {/if}
</ul>
