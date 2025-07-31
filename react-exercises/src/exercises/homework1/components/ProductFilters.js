"use client"

import styles from "../EcommerceApp.module.css"

function ProductFilters({ categoryFilter, priceFilter, categories, onCategoryChange, onPriceChange }) {
  return (
    <div className={styles.filters}>
      <select value={categoryFilter} onChange={(e) => onCategoryChange(e.target.value)} className={styles.filter}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select value={priceFilter} onChange={(e) => onPriceChange(e.target.value)} className={styles.filter}>
        <option value="All">All Prices</option>
        <option value="Under $100">Under $100</option>
        <option value="$100-$500">$100-$500</option>
        <option value="Over $500">Over $500</option>
      </select>
    </div>
  )
}

export default ProductFilters
