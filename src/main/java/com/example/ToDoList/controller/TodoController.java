package com.example.ToDoList.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.ToDoList.model.Todo;
import com.example.ToDoList.repository.TodoRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Allow React app to access these APIs
@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    // Get all todos
    @GetMapping
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    // Create or update a todo
    @PostMapping
    public Todo saveTodo(@RequestBody Todo todo) {
        // If completed is false by default, ensure it is set explicitly
        // No null check needed for primitive boolean
        // Date deserialization is handled by Jackson based on @JsonFormat in model
        return todoRepository.save(todo);
    }

    // Delete a todo by id
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoRepository.deleteById(id);
    }
}
