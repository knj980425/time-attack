import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ setTodos, todos }) => {
  return (
    <ul>
      <h2>할일 목록</h2>
      {todos.map(
        (todo) =>
          !todo.completed && (
            <TodoItem setTodos={setTodos} todo={todo} key={todo.id} />
          ),
      )}
      <h2>완료 목록</h2>
      {todos.map(
        (todo) =>
          todo.completed && (
            <TodoItem setTodos={setTodos} todo={todo} key={todo.id} />
          ),
      )}
    </ul>
  );
};

export default TodoList;
