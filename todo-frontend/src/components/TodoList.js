import '../index.css';
import "../assets/style.css";
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
  if (!todos.length) return <p>No tasks available.</p>;

  return (
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
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />)}
      </tbody>
    </table>
  );
}
