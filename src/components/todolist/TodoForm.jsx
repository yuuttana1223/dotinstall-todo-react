import { memo } from "react";

export const TodoForm = memo(({ item, updateItem, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input type="text" value={item} onChange={updateItem} />
      <input type="submit" value="Add" />
    </form>
  );
});
