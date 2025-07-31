"use client"

import styles from "../Timer.module.css"

function TimerControls({ isRunning, onStart, onPause, onReset }) {
  return (
    <div className={styles.controls}>
      <button onClick={onStart} disabled={isRunning} className={`${styles.button} ${styles.startBtn}`}>
        Start
      </button>
      <button onClick={onPause} disabled={!isRunning} className={`${styles.button} ${styles.pauseBtn}`}>
        Pause
      </button>
      <button onClick={onReset} className={`${styles.button} ${styles.resetBtn}`}>
        Reset
      </button>
    </div>
  )
}

export default TimerControls
