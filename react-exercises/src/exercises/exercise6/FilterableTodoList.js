"use client"

import { useState } from "react"
import styles from "./FilterableTodoList.module.css"
import SearchInput from "./components/SearchInput"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"
import NoResults from "./components/NoResults"

function FilterableTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React fundamentals", completed: false },
    { id: 2, text: "Build a todo application", completed: false },
    { id: 3, text: "Master React hooks", completed: true },
    { id: 4, text: "Create responsive design", completed: false },
    { id: 5, text: "Deploy to production", completed: true },
  ])
  const [searchTerm, setSearchTerm] = useState("")

  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      }
      setTodos([...todos, newTodo])
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Filterable Todo List</h2>
      <SearchInput searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TodoInput onAdd={addTodo} />
      {filteredTodos.length === 0 ? (
        <NoResults searchTerm={searchTerm} />
      ) : (
        <ul className={styles.todoList}>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterableTodoList
