import { useContext } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { CartContext } from "../context/CartContext"
import styles from "../EcommerceApp.module.css"

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext)

  const handleRemove = (productId, productName) => {
    if (window.confirm(`Are you sure you want to remove ${productName} from the cart?`)) {
      removeFromCart(productId)
      toast.success(`${productName} removed from cart!`)
    }
  }

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
              src={item.image || "https://placehold.co/80x80"}
              alt={item.name}
              className={styles.cartItemImage}
              onError={(e) => (e.target.src = "https://placehold.co/80x80")}
            />
            <div className={styles.cartItemInfo}>
              <h4 className={styles.cartItemName}>{item.name}</h4>
              <p className={styles.cartItemPrice}>${item.price.toFixed(2)}</p>
            </div>
            <div className={styles.cartItemControls}>
              <div className={styles.quantityControls}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className={styles.quantityBtn}
                >
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => {
                    updateQuantity(item.id, item.quantity + 1)
                    toast.success(`Added one more ${item.name} to cart!`)
                  }}
                  className={styles.quantityBtn}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemove(item.id, item.name)}
                className={styles.removeBtn}
              >
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