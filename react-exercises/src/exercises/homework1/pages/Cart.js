"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import styles from "../EcommerceApp.module.css"

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext)

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2 className={styles.emptyTitle}>Your Cart is Empty</h2>
        <p className={styles.emptyText}>Add some products to get started!</p>
        <Link to="/" className={styles.continueBtn}>
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.cart}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img
              src={item.image || "/placeholder.svg?height=80&width=80"}
              alt={item.name}
              className={styles.cartItemImage}
            />
            <div className={styles.cartItemInfo}>
              <h4 className={styles.cartItemName}>{item.name}</h4>
              <p className={styles.cartItemPrice}>${item.price}</p>
            </div>
            <div className={styles.cartItemControls}>
              <div className={styles.quantityControls}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className={styles.quantityBtn}>
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={styles.quantityBtn}>
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartSummary}>
        <h3 className={styles.totalPrice}>Total: ${getTotalPrice().toFixed(2)}</h3>
        <Link to="/checkout" className={styles.checkoutBtn}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart
