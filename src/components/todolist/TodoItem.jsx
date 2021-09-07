import { memo } from "react";

export const TodoItem = memo(({ todo, checkTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => checkTodo(todo)}
        />
        <span className={todo.isDone ? "done" : ""}>{todo.title}</span>
      </label>
      <span className="cmd" onClick={deleteTodo}>
        [x]
      </span>
    </li>
  );
});
