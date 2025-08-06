"use client"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import styles from "./Navigation.module.css"

function Home() {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Home Page</h2>
      <p className={styles.pageText}>
        Welcome to the home page! This is a simple React Router demonstration showing how to navigate between different
        pages without full page reloads.
      </p>
      <div className={styles.infoBox}>
        <strong className={styles.infoTitle}>Features:</strong>
        <ul className={styles.infoList}>
          <li>Single Page Application (SPA)</li>
          <li>Client-side routing</li>
          <li>No page reloads</li>
        </ul>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>About Page</h2>
      <p className={styles.pageText}>
        This is the about page. Here you can learn more about our application and the technologies we use.
      </p>
      <div className={`${styles.infoBox} ${styles.aboutBox}`}>
        <strong className={styles.infoTitle}>Technologies Used:</strong>
        <ul className={styles.infoList}>
          <li>React 18</li>
          <li>React Router v6</li>
          <li>Modern JavaScript (ES6+)</li>
        </ul>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Contact Page</h2>
      <p className={styles.pageText}>Get in touch with us! We'd love to hear from you.</p>
      <div className={`${styles.infoBox} ${styles.contactBox}`}>
        <strong className={styles.infoTitle}>Contact Information:</strong>
        <ul className={styles.infoList}>
          <li>Email: 24560045@gm.uit.edu.vn</li>
          <li>Phone: 0983218615</li>
          <li>Address: 21/6 Thới Tứ, Thới Tam Thôn, Hóc Môn, Tp Hồ Chí Minh</li>
        </ul>
      </div>
    </div>
  )
}

function Navigation() {
  return (
    <Router>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
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
