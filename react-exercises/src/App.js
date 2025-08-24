import HelloWorld from "./exercises/exercise1/HelloWorld"
import GreetingCard from "./exercises/exercise2/GreetingCard"
import Counter from "./exercises/exercise3/Counter"
import ToggleVisibility from "./exercises/exercise4/ToggleVisibility"
import TodoList from "./exercises/exercise5/TodoList"
import FilterableTodoList from "./exercises/exercise6/FilterableTodoList"
import Timer from "./exercises/exercise7/Timer"
import UserProfile from "./exercises/exercise8/UserProfile"
import Navigation from "./exercises/exercise9/Navigation"
import LoginForm from "./exercises/exercise10/LoginForm"
import ThemeSwitcher from "./exercises/exercise11/ThemeSwitcher"
import DataDisplay from "./exercises/exercise13/DataDisplay"
import TodoListWithReducer from "./exercises/exercise14/TodoListWithReducer"
import OptimizedList from "./exercises/exercise15/OptimizedList"
import ErrorBoundaryDemo from "./exercises/exercise16/ErrorBoundaryDemo"
import ModalDemo from "./exercises/exercise17/ModalDemo"
import EcommerceApp from "./exercises/homework1/EcommerceApp"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <header className="app-header">
          <h1 className="app-title">React Lab Exercises</h1>
          <p className="app-subtitle">BCU2025 - Introduction to React</p>
        </header>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 1: Hello World Component</h2>
          <HelloWorld />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 2: Greeting Card Component</h2>
          <div className="greeting-cards">
            <GreetingCard name="Alice" />
            <GreetingCard name="Bob" />
            <GreetingCard name="Charlie" />
          </div>
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 3: Counter Application</h2>
          <Counter />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 4: Toggle Visibility Component</h2>
          <ToggleVisibility />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 5: Basic Todo List</h2>
          <TodoList />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 6: Dynamic List Filtering</h2>
          <FilterableTodoList />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 7: Timer/Stopwatch Component</h2>
          <Timer />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 8: Data Fetching Component</h2>
          <UserProfile />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 9: Simple Navigation with React Router</h2>
          <Navigation />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 10: Login Form with Validation</h2>
          <LoginForm />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 11: Theme Switcher with Context API</h2>
          <ThemeSwitcher />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 13: Render Props for Data Fetching</h2>
          <DataDisplay />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 14: Complex State Management with useReducer</h2>
          <TodoListWithReducer />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 15: Optimizing a List with React.memo and useCallback</h2>
          <OptimizedList />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 16: Implementing an Error Boundary</h2>
          <ErrorBoundaryDemo />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Exercise 17: Modal with Portals</h2>
          <ModalDemo />
        </section>
        <section className="exercise-section">
          <h2 className="exercise-title">Homework 1: Simple E-commerce Product Listing</h2>
          <EcommerceApp />
        </section>
      </div>
    </div>
  )
}

export default App

