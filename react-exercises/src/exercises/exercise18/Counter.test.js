import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import LoginForm from "../exercise10/LoginForm"

describe("LoginForm Component", () => {
  test("renders form with initial empty inputs", () => {
    render(<LoginForm />)
    const emailInput = screen.getByLabelText("Email:")
    const passwordInput = screen.getByLabelText("Password:")
    expect(emailInput).toHaveValue("")
    expect(passwordInput).toHaveValue("")
  })

  test("simulates typing into the email and password fields", () => {
    render(<LoginForm />)
    const emailInput = screen.getByLabelText("Email:")
    const passwordInput = screen.getByLabelText("Password:")
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })
    fireEvent.change(passwordInput, { target: { value: "password123" } })
    expect(emailInput).toHaveValue("test@example.com")
    expect(passwordInput).toHaveValue("password123")
  })

  test("asserts that validation error messages appear when inputs are invalid", () => {
    render(<LoginForm />)
    const emailInput = screen.getByLabelText("Email:")
    const passwordInput = screen.getByLabelText("Password:")
    fireEvent.change(emailInput, { target: { value: "invalid" } })
    fireEvent.change(passwordInput, { target: { value: "12345" } })
    expect(screen.getByText("Email must contain @ symbol")).toBeInTheDocument()
    expect(screen.getByText("Password must be at least 6 characters long")).toBeInTheDocument()
  })

  test("asserts that the submit button is disabled when the form is invalid", () => {
    render(<LoginForm />)
    const submitButton = screen.getByRole("button", { name: "Login" })
    expect(submitButton).toBeDisabled()
  })

  test("simulates a successful form submission and asserts that a success message is displayed", () => {
    render(<LoginForm />)
    const emailInput = screen.getByLabelText("Email:")
    const passwordInput = screen.getByLabelText("Password:")
    const submitButton = screen.getByRole("button", { name: "Login" })
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })
    fireEvent.change(passwordInput, { target: { value: "password123" } })
    fireEvent.click(submitButton)
    expect(screen.getByText("Login Successful!")).toBeInTheDocument()
    expect(screen.getByText("Welcome back, test@example.com")).toBeInTheDocument()
  })
})