import styles from "../Timer.module.css"

function TimeDisplay({ seconds }) {
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return <div className={styles.display}>{formatTime(seconds)}</div>
}

export default TimeDisplay
