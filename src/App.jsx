import { useState } from "react";
import { TodoList } from "./components/todolist/TodoList";
import { todosArray } from "./data/todos";

export const App = () => {
  const [todos, setTodos] = useState(todosArray);

  const checkTodo = (todo) => {
    const newTodos = [...todos];
    newTodos[todo.id].isDone = !newTodos[todo.id].isDone;
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      const newTodos = [...todos];
      newTodos.splice(todo.id, 1);
      setTodos(newTodos);
    }
  };

  return (
    <div className="container">
      <h1>My Todos</h1>
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
};
