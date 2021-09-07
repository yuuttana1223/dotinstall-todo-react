import { memo } from "react";

export const TodoForm = memo(
  ({ item, updateItem, addTodo, updateTodo, isEditing }) => {
    return (
      <form onSubmit={isEditing ? updateTodo : addTodo}>
        <input type="text" value={item} onChange={updateItem} />
        <input type="submit" value={isEditing ? "更新" : "追加"} />
      </form>
    );
  }
);
