import { memo } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = memo(({ todos, checkTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <li>Nothing to do!</li>
      )}
    </ul>
  );
});
