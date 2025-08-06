"use client"

import { useState, useEffect } from "react"
import styles from "./Timer.module.css"
import TimerDisplay from "./components/TimeDisplay"
import TimerControls from "./components/TimerControls"

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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Timer/Stopwatch</h2>
      <TimerDisplay seconds={seconds} />
      <TimerControls
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
    </div>
  )
}

export default Timer

