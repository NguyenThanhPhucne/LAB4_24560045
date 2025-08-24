import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../exercise10/LoginForm";

describe("LoginForm Component", () => {
  test("renders form with empty inputs and correct labels", () => {
    render(<LoginForm />);
    expect(screen.getByText("Login Form")).toBeInTheDocument();
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("Password:")).toBeInTheDocument();
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
    const submitButton = screen.getByRole("button", { name: "Login" });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test("allows typing in email and password fields", () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  test("shows validation error for invalid email", () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    expect(screen.getByText("Email must contain @ symbol")).toBeInTheDocument();
  });

  test("shows validation error for short password", () => {
    render(<LoginForm />);
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    fireEvent.change(passwordInput, { target: { value: "123" } });
    expect(screen.getByText("Password must be at least 6 characters long")).toBeInTheDocument();
  });

  test("submit button is disabled when form is invalid", () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: "Login" });
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });
    expect(submitButton).toBeDisabled();
  });

  test("submit button is enabled when form is valid", () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: "Login" });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(submitButton).not.toBeDisabled();
  });

  test("shows success message after successful submission", () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: "Login" });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    expect(screen.getByText("Login Successful!")).toBeInTheDocument();
    expect(screen.getByText("Welcome back, test@example.com")).toBeInTheDocument();
  });

  test("clears validation errors when input becomes valid", () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    expect(screen.getByText("Email must contain @ symbol")).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: "valid@email.com" } });
    expect(screen.queryByText("Email must contain @ symbol")).not.toBeInTheDocument();
  });
});