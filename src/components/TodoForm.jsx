import React, { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [newTitle, setNewTitle] = useState("");
  const onAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newTitle,
        completed: false,
        createdAt: new Date(),
      },
    ]);
    setNewTitle("");
  };
  return (
    <form onSubmit={(e) => onAdd(e)}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
