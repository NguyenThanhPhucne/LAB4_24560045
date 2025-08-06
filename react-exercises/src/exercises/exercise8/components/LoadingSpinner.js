import styles from "../UserProfile.module.css"

function LoadingSpinner() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      Loading user data...
    </div>
  )
}

export default LoadingSpinner

