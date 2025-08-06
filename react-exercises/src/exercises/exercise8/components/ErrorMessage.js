import styles from "../UserProfile.module.css"

function ErrorMessage({ error }) {
  return <div className={styles.error}>Error: {error}</div>
}

export default ErrorMessage

