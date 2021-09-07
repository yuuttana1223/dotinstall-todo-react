import { memo } from "react";

export const TodoHeader = memo(({ todos, purge }) => {
  const incompleteTodos = todos.filter((todo) => !todo.isDone);

  return (
    <h1>
      My Todos
      <span>
        ({incompleteTodos.length}/{todos.length})
      </span>
      <button onClick={purge}>Purge</button>
    </h1>
  );
});
