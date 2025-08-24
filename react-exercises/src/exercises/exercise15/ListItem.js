import React, { memo } from "react"
import styles from "./OptimizedList.module.css"

const ListItem = memo(({ item, onDelete, onToggle }) => {
  console.log(`ListItem ${item.id} re-rendered`)
  
  return (
    <div className={`${styles.listItem} ${item.completed ? styles.completed : ""}`}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
        className={styles.checkbox}
      />
      <span className={styles.itemText}>{item.text}</span>
      <button
        onClick={() => onDelete(item.id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  )
})

export default ListItem
