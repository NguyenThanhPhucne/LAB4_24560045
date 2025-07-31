"use client"

import { useState, useEffect } from "react"
import TimeDisplay from "./components/TimeDisplay"
import TimerControls from "./components/TimerControls"
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

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Timer/Stopwatch</h2>
      <TimeDisplay seconds={seconds} />
      <TimerControls isRunning={isRunning} onStart={handleStart} onPause={handlePause} onReset={handleReset} />
    </div>
  )
}

export default Timer
