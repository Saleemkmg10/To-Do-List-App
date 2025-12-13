import React, { useState, useEffect } from "react";
import { fetchTodos, addTodo, deleteTodo } from "./services/todoService";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async (todo) => {
    try {
      await addTodo(todo);
      loadTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      loadTodos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
