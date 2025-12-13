package com.example.ToDoList.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.ToDoList.model.Todo;
import com.example.ToDoList.repository.TodoRepository;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class TodoViewController {

    @Autowired
    private TodoRepository todoRepository;

    // Home page showing the list of todos
    @GetMapping("/")
    public String viewHomePage(Model model) {
        model.addAttribute("todos", todoRepository.findAll());
        return "index.html";
    }

    // Adding a new todo
    @PostMapping("/todos")
    public String addTodo(@RequestParam String title, 
                          @RequestParam(required = false) String description, 
                          @RequestParam(required = false) String dueDate) {
        Todo todo = new Todo();
        todo.setTitle(title);
        todo.setDescription(description);

        // Handle due date conversion if provided
        if (dueDate != null && !dueDate.isEmpty()) {
            try {
                Date date = new SimpleDateFormat("yyyy-MM-dd").parse(dueDate);
                todo.setDueDate(date);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        todo.setCompleted(false);
        todoRepository.save(todo);
        return "redirect:/"; // Redirects back to home page after adding the todo
    }

    // Deleting a todo by its ID
    @GetMapping("/todos/delete/{id}")
    public String deleteTodo(@PathVariable Long id) {
        todoRepository.deleteById(id);
        return "redirect:/"; // Redirects back to home page after deleting the todo
    }
}
