import React, { useState, useCallback } from "react"
import ListItem from "./ListItem"
import styles from "./OptimizedList.module.css"

function OptimizedList() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React Hooks", completed: false },
    { id: 2, text: "Master useCallback", completed: false },
    { id: 3, text: "Understand React.memo", completed: false },
    { id: 4, text: "Practice Performance Optimization", completed: false }
  ])
  const [counter, setCounter] = useState(0)

  const handleDeleteItem = useCallback((id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }, [])

  const handleToggleItem = useCallback((id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }, [])

  const handleAddItem = useCallback(() => {
    const newItem = {
      id: Date.now(),
      text: `New Item ${items.length + 1}`,
      completed: false
    }
    setItems(prevItems => [...prevItems, newItem])
  }, [items.length])

  const handleIncrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Performance Optimization Demo</h2>
      
      <div className={styles.controls}>
        <button onClick={handleAddItem} className={styles.addButton}>
          Add New Item
        </button>
        <button onClick={handleIncrementCounter} className={styles.counterButton}>
          Increment Counter: {counter}
        </button>
      </div>

      <div className={styles.info}>
        <p>This counter update will cause parent re-render but ListItems won't re-render unnecessarily.</p>
        <p>Check console to see which ListItems re-render.</p>
      </div>

      <div className={styles.listContainer}>
        <h3>Optimized List Items:</h3>
        {items.length === 0 ? (
          <p className={styles.emptyMessage}>No items in the list.</p>
        ) : (
          items.map(item => (
            <ListItem
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
              onToggle={handleToggleItem}
            />
          ))
        )}
      </div>

      <div className={styles.stats}>
        <p>Total Items: {items.length}</p>
        <p>Completed Items: {items.filter(item => item.completed).length}</p>
        <p>Counter Value: {counter}</p>
      </div>
    </div>
  )
}

export default OptimizedList
