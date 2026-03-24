import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
