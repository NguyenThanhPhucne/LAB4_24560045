"use client"

import { useState } from "react"
import ProductCard from "../components/ProductCard"
import ProductFilters from "../components/ProductFilters"
import { mockProducts } from "../data/mockData"
import styles from "../EcommerceApp.module.css"

function ProductList() {
  const [products] = useState(mockProducts)
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [priceFilter, setPriceFilter] = useState("All")

  const categories = ["All", ...new Set(products.map((p) => p.category))]

  const filteredProducts = products.filter((product) => {
    const categoryMatch = categoryFilter === "All" || product.category === categoryFilter
    const priceMatch =
      priceFilter === "All" ||
      (priceFilter === "Under $100" && product.price < 100) ||
      (priceFilter === "$100-$500" && product.price >= 100 && product.price <= 500) ||
      (priceFilter === "Over $500" && product.price > 500)
    return categoryMatch && priceMatch
  })

  return (
    <div>
      <h2 className={styles.pageTitle}>Product Catalog</h2>
      <ProductFilters
        categoryFilter={categoryFilter}
        priceFilter={priceFilter}
        categories={categories}
        onCategoryChange={setCategoryFilter}
        onPriceChange={setPriceFilter}
      />
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
