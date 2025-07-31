"use client"

import { useState, useEffect } from "react"
import styles from "./Timer.module.css"

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1)
      }, 1000)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning])

  const start = () => {
    setIsRunning(true)
  }

  const pause = () => {
    setIsRunning(false)
  }

  const reset = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Timer/Stopwatch</h2>
      <div className={styles.display}>{formatTime(seconds)}</div>
      <div className={styles.controls}>
        <button onClick={start} disabled={isRunning} className={`${styles.button} ${styles.startBtn}`}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning} className={`${styles.button} ${styles.pauseBtn}`}>
          Pause
        </button>
        <button onClick={reset} className={`${styles.button} ${styles.resetBtn}`}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
