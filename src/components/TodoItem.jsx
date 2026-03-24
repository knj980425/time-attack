import React from "react";
import style from "../App.module.css";

const TodoItem = ({ todo, setTodos }) => {
  const onToggle = () => {
    setTodos((prev) =>
      prev.map((p) =>
        p.id === todo.id ? { ...p, completed: !p.completed } : p,
      ),
    );
  };
  const onDelete = () => {
    setTodos((prev) => prev.filter((p) => p.id !== todo.id));
  };
  return (
    <li className={style.container}>
      <p className={todo.completed ? style.completed : ""}>{todo.title}</p>
      <p>{todo.createdAt.toLocaleString()}</p>
      <button onClick={() => onToggle()}>
        {todo.completed ? "완료" : "취소"}
      </button>
      <button onClick={() => onDelete()}>삭제</button>
    </li>
  );
};

export default TodoItem;
