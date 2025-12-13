-- Create the database
CREATE DATABASE IF NOT EXISTS todolist_db;
USE todolist_db;

-- Create the tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    completed BOOLEAN DEFAULT FALSE
);

-- Optional: Insert a sample task
INSERT INTO tasks (title, description, due_date, completed)
VALUES ('Sample Task', 'This is a sample to-do item.', '2025-05-06', FALSE);
