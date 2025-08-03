import React from "react"
import ReactDOM from "react-dom/client"
import EcommerceApp from "./EcommerceApp"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <EcommerceApp />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
  </React.StrictMode>
)