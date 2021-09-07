import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, checkTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} />
      ))}
    </ul>
  );
};
