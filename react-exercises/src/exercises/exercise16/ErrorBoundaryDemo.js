import React from "react"
import ErrorBoundary from "./ErrorBoundary"
import BuggyComponent from "./BuggyComponent"
import styles from "./ErrorBoundary.module.css"

function ErrorBoundaryDemo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Error Boundary Demo</h2>
      
      <div className={styles.info}>
        <p>This demo shows how Error Boundaries catch JavaScript errors in React components.</p>
        <p>Try clicking the counter button multiple times or enable the crash toggle.</p>
      </div>

      <div className={styles.components}>
        <div className={styles.componentSection}>
          <h3>Component 1 (Protected by Error Boundary)</h3>
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </div>

        <div className={styles.componentSection}>
          <h3>Component 2 (Also Protected)</h3>
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </div>
      </div>

      <div className={styles.explanation}>
        <h3>How Error Boundaries Work:</h3>
        <ul>
          <li>Error Boundaries catch errors in their child component tree</li>
          <li>They display a fallback UI instead of crashing the entire app</li>
          <li>Each Error Boundary is independent - one crashing doesn't affect others</li>
          <li>They only catch errors during rendering, not in event handlers</li>
        </ul>
      </div>
    </div>
  )
}

export default ErrorBoundaryDemo
