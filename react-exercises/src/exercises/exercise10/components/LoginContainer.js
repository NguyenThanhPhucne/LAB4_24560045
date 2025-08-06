import styles from "../LoginForm.module.css"

function LoginFormContainer({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default LoginFormContainer
