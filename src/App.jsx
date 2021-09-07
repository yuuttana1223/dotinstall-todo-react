/* eslint-disable no-restricted-globals */
import { useCallback, useEffect, useState } from "react";
import { TodoForm } from "./components/todolist/TodoForm";
import { TodoHeader } from "./components/todolist/TodoHeader";
import { TodoList } from "./components/todolist/TodoList";

export const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [item, setItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState("");

  const getUniqueId = () => {
    // toString(基数) 36進数
    return `${new Date().getTime().toString(36)}-${Math.random().toString(36)}`;
  };

  // 達成したタスクを一気に消す
  const purge = useCallback(() => {
    if (!confirm("Are you sure?")) return;

    const newTodos = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
  }, [todos]);

  const addTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (item.trim() === "") return;

      const newItem = {
        id: getUniqueId(),
        title: item,
        isDone: false,
      };

      const newTodos = [...todos, newItem];
      setTodos(newTodos);
      setItem("");
    },
    [item, todos]
  );

  const checkTodo = useCallback(
    (todo) => {
      // pos(position)は位置
      // idだけの配列を作り何番目かを特定
      const pos = todos.map((todo) => todo.id).indexOf(todo.id);
      const newTodos = [...todos];
      newTodos[pos].isDone = !newTodos[pos].isDone;
      setTodos(newTodos);
    },
    [todos]
  );

  const deleteTodo = useCallback(
    (todo) => {
      if (!confirm("Are you sure?")) return;

      const newTodos = [...todos];
      const pos = todos.indexOf(todo);
      newTodos.splice(pos, 1);
      setTodos(newTodos);
    },
    [todos]
  );

  const editTodo = useCallback(
    (todo) => {
      setIsEditing(true);
      setItem(todo.title);
      setTodo(todo);
    },
    [setIsEditing, setItem]
  );

  const updateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (item.trim() === "") return;

      const newTodos = [...todos];
      const pos = todos.indexOf(todo);
      newTodos[pos].title = item;
      setTodos(newTodos);
      setItem("");
      setIsEditing(false);
    },
    [todos, todo, item]
  );

  const updateItem = useCallback(
    (e) => {
      setItem(e.target.value);
    },
    [setItem]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <TodoHeader todos={todos} purge={purge} />
      <TodoList
        todos={todos}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      <TodoForm
        item={item}
        updateItem={updateItem}
        addTodo={addTodo}
        updateTodo={updateTodo}
        isEditing={isEditing}
      />
    </div>
  );
};
