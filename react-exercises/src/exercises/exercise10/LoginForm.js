"use client"

import { useState } from "react"
import styles from "./LoginForm.module.css"

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email) => {
    if (!email.includes("@")) {
      return "Email must contain @ symbol"
    }
    return ""
  }

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long"
    }
    return ""
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    let error = ""
    if (name === "email") {
      error = validateEmail(value)
    } else if (name === "password") {
      error = validatePassword(value)
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)

    if (!emailError && !passwordError) {
      setIsSubmitted(true)
    } else {
      setErrors({
        email: emailError,
        password: passwordError,
      })
    }
  }

  const isFormValid = formData.email.includes("@") && formData.password.length >= 6

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>
          <h3>Login Successful!</h3>
          <p>Welcome back, {formData.email}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            placeholder="Enter your email"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
            placeholder="Enter your password"
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`${styles.button} ${!isFormValid ? styles.buttonDisabled : ""}`}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
