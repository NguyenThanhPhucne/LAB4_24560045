"use client"

import { useState } from "react"
import styles from "./Counter.module.css"

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Counter Application</h2>
      <div className={styles.display}>
        <div className={styles.countDisplay}>
          <span className={styles.count}>{count}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleIncrement} className={`${styles.button} ${styles.incrementBtn}`}>
          Increment
        </button>
        <button onClick={handleDecrement} className={`${styles.button} ${styles.decrementBtn}`}>
          Decrement
        </button>
        <button onClick={handleReset} className={`${styles.button} ${styles.resetBtn}`}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
