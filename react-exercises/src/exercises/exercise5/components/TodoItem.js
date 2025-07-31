"use client"

import styles from "../TodoList.module.css"

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}>
      <div className={styles.todoContent}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
        />
        <span className={styles.todoText}>{todo.text}</span>
      </div>
      <button onClick={() => onDelete(todo.id)} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
