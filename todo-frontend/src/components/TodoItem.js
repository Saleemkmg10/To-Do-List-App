import '../index.css';
import "../assets/style.css";
import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.dueDate || "—"}</td>
      <td>{todo.completed ? "Completed" : "Incomplete"}</td>
      <td>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}
