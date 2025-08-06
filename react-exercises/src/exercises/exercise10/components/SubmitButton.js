import styles from "../LoginForm.module.css"

function SubmitButton({ isValid, onClick }) {
  return (
    <button
      type="submit"
      disabled={!isValid}
      onClick={onClick}
      className={`${styles.button} ${!isValid ? styles.buttonDisabled : ""}`}
    >
      Login
    </button>
  )
}

export default SubmitButton
