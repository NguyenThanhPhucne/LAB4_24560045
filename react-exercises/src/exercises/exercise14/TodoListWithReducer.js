import { useReducer, useState, useEffect } from "react"
import { todoReducer } from "./TodoReducer"
import styles from "./TodoListWithReducer.module.css"

function TodoListWithReducer() {
  const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]")
  const [todos, dispatch] = useReducer(todoReducer, savedTodos)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TODO", payload: inputValue.trim() })
      setInputValue("")
    }
  }

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id })
  }

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id })
  }

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo List with useReducer</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo..."
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          Add Todo
        </button>
      </form>

      <div className={styles.stats}>
        <span>Total: {totalCount}</span>
        <span>Completed: {completedCount}</span>
        <span>Pending: {totalCount - completedCount}</span>
      </div>

      {todos.length > 0 && (
        <div className={styles.actions}>
          <button
            onClick={handleClearCompleted}
            className={styles.clearButton}
            disabled={completedCount === 0}
          >
            Clear Completed
          </button>
        </div>
      )}

      <div className={styles.todoList}>
        {todos.length === 0 ? (
          <p className={styles.emptyMessage}>No todos yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                className={styles.checkbox}
              />
              <span className={styles.todoText}>{todo.text}</span>
              <button
                onClick={() => handleRemove(todo.id)}
                className={styles.removeButton}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TodoListWithReducer
