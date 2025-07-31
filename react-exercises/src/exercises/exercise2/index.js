import React from "react"
import ReactDOM from "react-dom/client"
import GreetingCard from "./GreetingCard"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <GreetingCard name="Alice" />
    <GreetingCard name="Bob" />
    <GreetingCard name="Charlie" />
  </React.StrictMode>,
)
