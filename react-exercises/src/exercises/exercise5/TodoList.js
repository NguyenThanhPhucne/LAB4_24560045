"use client"

import { useState } from "react"
import styles from "./TodoList.module.css"

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React fundamentals", completed: false },
    { id: 2, text: "Build a todo application", completed: false },
    { id: 3, text: "Master React hooks", completed: true },
  ])
  const [inputValue, setInputValue] = useState("")

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      }
      setTodos([...todos, newTodo])
      setInputValue("")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo()
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo List</h2>
      <div className={styles.inputSection}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          className={styles.input}
        />
        <button onClick={addTodo} className={styles.addButton}>
          Add
        </button>
      </div>
      {todos.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No todos yet. Add one above!</p>
        </div>
      ) : (
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}>
              <div className={styles.todoContent}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className={styles.checkbox}
                />
                <span className={styles.todoText}>{todo.text}</span>
              </div>
              <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
