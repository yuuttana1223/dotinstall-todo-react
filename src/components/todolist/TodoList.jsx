import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, checkTodo, deleteTodo }) => {
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
};
