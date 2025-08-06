import styles from "../LoginForm.module.css"

function SuccessMessage({ email }) {
  return (
    <div className={styles.success}>
      <div className={styles.successIcon}>✓</div>
      <h3>Login Successful!</h3>
      <p>Welcome back, {email}</p>
    </div>
  )
}

export default SuccessMessage