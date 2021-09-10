import { memo } from "react";

export const TodoItem = memo(({ todo, checkTodo, deleteTodo, editTodo }) => {
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
      <span className="cmd" onClick={() => deleteTodo(todo)}>
        [削除]
      </span>
      <span className="cmd" onClick={() => editTodo(todo)}>
        [編集]
      </span>
    </li>
  );
});
