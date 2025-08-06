import { useState } from "react"
import styles from "./ToggleVisibility.module.css"

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Toggle Visibility Demo</h2>
      <button onClick={toggleVisibility} className={styles.button}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>
      {isVisible && (
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>Welcome to React!</h3>
          <p className={styles.contentText}>
            This is a sample paragraph that demonstrates conditional rendering in React. When you click the toggle
            button, this content appears and disappears based on the component's state.
          </p>
          <p className={styles.contentText}>
            React makes it easy to show and hide content dynamically using JavaScript expressions and the component's
            state management capabilities.
          </p>
        </div>
      )}
    </div>
  )
}

export default ToggleVisibility

