export const TodoItem = ({ todo, checkTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => checkTodo(todo)}
        />
      </label>
      <span className={todo.isDone ? "done" : ""}>{todo.title}</span>
    </li>
  );
};
