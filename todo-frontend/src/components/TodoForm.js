import '../index.css';
import "../assets/style.css";
import React, { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", description: "", dueDate: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.title.trim()) {
      onAdd(form);
      setForm({ title: "", description: "", dueDate: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Task title" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Task description" />
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}
