import React from "react"
import ReactDOM from "react-dom/client"
import FilterableTodoList from "./FilterableTodoList"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <FilterableTodoList />
  </React.StrictMode>,
)
