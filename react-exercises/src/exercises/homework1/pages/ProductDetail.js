"use client"

import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { mockProducts } from "../data/mockData"
import styles from "../EcommerceApp.module.css"

function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const product = mockProducts.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return <div className={styles.notFound}>Product not found</div>
  }

  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetailGrid}>
        <img src={product.image || "/placeholder.svg"} alt={product.name} className={styles.detailImage} />
        <div className={styles.detailInfo}>
          <h1 className={styles.detailTitle}>{product.name}</h1>
          <p className={styles.detailCategory}>Category: {product.category}</p>
          <p className={styles.detailPrice}>${product.price}</p>
          <p className={styles.detailDescription}>
            This is a high-quality {product.name.toLowerCase()} that offers excellent value for money. Perfect for
            everyday use with modern design and reliable performance.
          </p>
          <button onClick={() => addToCart(product)} className={styles.detailAddBtn}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
