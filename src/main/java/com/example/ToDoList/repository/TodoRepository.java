package com.example.ToDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ToDoList.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    // Inherits methods like save(), findById(), findAll(), deleteById(), etc.
}
