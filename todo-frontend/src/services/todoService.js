import '../index.css';
import "../assets/style.css";
const API_URL = "http://localhost:8080/api/todos";

export async function fetchTodos() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch todos");
  return await response.json();
}

export async function addTodo(todo) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("Failed to add todo");
  return await response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete todo");
}
