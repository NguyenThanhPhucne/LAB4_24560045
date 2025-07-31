"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import styles from "../EcommerceApp.module.css"

function Header() {
  const { getTotalItems } = useContext(CartContext)

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          E-Commerce Store
        </Link>
        <nav className={styles.headerNav}>
          <Link to="/" className={styles.headerLink}>
            Products
          </Link>
          <Link to="/cart" className={styles.headerLink}>
            Cart
            {getTotalItems() > 0 && <span className={styles.cartBadge}>{getTotalItems()}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
