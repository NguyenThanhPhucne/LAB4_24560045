"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from "./Navigation.module.css"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function Navigation() {
  return (
    <Router>
      <div className={styles.container}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Navigation

