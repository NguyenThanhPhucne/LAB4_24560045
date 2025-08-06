import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoListItem from "./components/TodoItem"
import TodoStats from "./components/TodoStats"
import styles from "./TodoList.module.css"

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React fundamentals", completed: false },
    { id: 2, text: "Build a todo application", completed: false },
    { id: 3, text: "Master React hooks", completed: true },
  ])

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

  const totalCount = todos.length
  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo List</h2>
      <TodoStats totalCount={totalCount} completedCount={completedCount} />
      <TodoInput onAdd={addTodo} />
      {todos.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No todos yet. Add one above!</p>
        </div>
      ) : (
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <TodoListItem
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

export default TodoList
