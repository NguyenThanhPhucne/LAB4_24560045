"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import styles from "../EcommerceApp.module.css"

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className={styles.productCard}>
      <img
        src={product.image || "/placeholder.svg?height=200&width=200"}
        alt={product.name}
        className={styles.productImage}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productCategory}>{product.category}</p>
      <p className={styles.productPrice}>${product.price}</p>
      <div className={styles.productActions}>
        <Link to={`/product/${product.id}`} className={styles.detailsBtn}>
          View Details
        </Link>
        <button onClick={() => addToCart(product)} className={styles.addToCartBtn}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
