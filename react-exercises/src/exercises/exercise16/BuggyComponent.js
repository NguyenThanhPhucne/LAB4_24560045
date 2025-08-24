import React, { useState } from "react"
import styles from "./ErrorBoundary.module.css"

function BuggyComponent() {
  const [counter, setCounter] = useState(0)
  const [shouldCrash, setShouldCrash] = useState(false)

  const handleClick = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  const handleCrashToggle = () => {
    setShouldCrash(!shouldCrash)
  }

  if (shouldCrash) {
    throw new Error("This component intentionally crashed!")
  }

  if (counter === 5) {
    throw new Error("Counter reached 5 - intentional crash!")
  }

  return (
    <div className={styles.buggyContainer}>
      <h3 className={styles.buggyTitle}>Buggy Component</h3>
      <div className={styles.counterDisplay}>
        <p>Click count: {counter}</p>
        <button onClick={handleClick} className={styles.counterButton}>
          Increment Counter
        </button>
      </div>
      
      <div className={styles.crashControls}>
        <p>This component will crash when counter reaches 5</p>
        <button
          onClick={handleCrashToggle}
          className={styles.crashButton}
        >
          {shouldCrash ? "Disable Crash" : "Enable Crash"}
        </button>
      </div>

      <div className={styles.warning}>
        <p>⚠️ Warning: This component is designed to crash for testing purposes!</p>
      </div>
    </div>
  )
}

export default BuggyComponent
