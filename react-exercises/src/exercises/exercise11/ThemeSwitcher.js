"use client"

import { createContext, useContext, useState } from "react"
import styles from "./ThemeSwitcher.module.css"

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme} className={styles.toggleButton}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  )
}

function ThemedComponent() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <h2 className={styles.title}>Theme Switcher Example</h2>
      <p className={styles.subtitle}>
        Current theme: <strong>{theme}</strong>
      </p>
      <div className={styles.content}>
        <p className={styles.contentText}>
          This content changes appearance based on the selected theme. The Context API allows us to share theme state
          across all components without prop drilling.
        </p>
      </div>
      <ThemeToggle />
    </div>
  )
}

function ThemeSwitcher() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  )
}

export default ThemeSwitcher
