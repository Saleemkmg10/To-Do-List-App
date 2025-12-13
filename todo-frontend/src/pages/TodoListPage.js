import React, { useEffect, useState } from "react";
import { fetchTodos, addTodo, deleteTodo } from "../services/todoService";
import TodoItem from "../components/TodoItem";
import '../index.css';
import "../assets/style.css";

export default function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", dueDate: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }
    try {
      await addTodo({ ...form, completed: false });
      setForm({ title: "", description: "", dueDate: "" });
      loadTodos();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      loadTodos();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Title:</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter task description"
          ></textarea>
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>

      <h2>Your Tasks</h2>
      {loading && <p>Loading todos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!loading && todos.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No tasks available
              </td>
            </tr>
          )}
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
