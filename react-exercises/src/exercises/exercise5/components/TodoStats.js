import styles from "../TodoList.module.css"

function TodoStats({ totalCount, completedCount }) {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>Total: {totalCount}</div>
      <div className={styles.stat}>Completed: {completedCount}</div>
      <div className={styles.stat}>Remaining: {totalCount - completedCount}</div>
    </div>
  )
}

export default TodoStats

