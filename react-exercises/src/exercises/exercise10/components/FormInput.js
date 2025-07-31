"use client"

import styles from "../LoginForm.module.css"

function FormInput({ label, type, name, value, onChange, error, placeholder }) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default FormInput
