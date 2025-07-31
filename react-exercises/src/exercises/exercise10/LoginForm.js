"use client"

import { useState } from "react"
import FormInput from "./components/FormInput"
import SuccessMessage from "./components/SuccessMessage"
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
        <SuccessMessage email={formData.email} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          placeholder="Enter your email"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          placeholder="Enter your password"
        />
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
