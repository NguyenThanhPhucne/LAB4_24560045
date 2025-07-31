"use client"

import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import styles from "../EcommerceApp.module.css"

function Checkout() {
  const { cartItems, getTotalPrice } = useContext(CartContext)

  return (
    <div className={styles.checkout}>
      <h2 className={styles.checkoutTitle}>Checkout</h2>
      <div className={styles.orderSummary}>
        <h3 className={styles.summaryTitle}>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.summaryItem}>
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className={styles.summaryTotal}>
          <span>Total:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>
      <div className={styles.checkoutSuccess}>
        <p className={styles.successMessage}>Thank you for your order! This is a demo checkout page.</p>
      </div>
    </div>
  )
}

export default Checkout
