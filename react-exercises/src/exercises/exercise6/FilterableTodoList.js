"use client"

import { useState } from "react"
import SearchInput from "./components/SearchInput"
import TodoInput from "../exercise5/components/TodoInput"
import TodoStats from "../exercise5/components/TodoStats"
import TodoItem from "../exercise5/components/TodoItem"
import styles from "./FilterableTodoList.module.css"

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
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))

  const completedCount = filteredTodos.filter((todo) => todo.completed).length
  const totalCount = filteredTodos.length

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Filterable Todo List</h2>
      <SearchInput searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TodoStats totalCount={totalCount} completedCount={completedCount} />
      <TodoInput onAdd={addTodo} />
      {filteredTodos.length === 0 ? (
        <div className={styles.noResults}>
          {searchTerm ? `No todos match "${searchTerm}"` : "No todos yet. Add one above!"}
        </div>
      ) : (
        <ul className={styles.todoList}>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilterableTodoList
