import { useState, useEffect, useMemo } from "react"
import ProductCard from "../components/ProductCard"
import ProductFilters from "../components/ProductFilters"
import { mockProducts } from "../data/mockData" // Giữ lại import
import styles from "../EcommerceApp.module.css"

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [priceFilter, setPriceFilter] = useState("All")

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) throw new Error("Failed to fetch products")
        const data = await response.json()
        setProducts(
          data.map((item) => ({
            id: item.id,
            name: item.title,
            price: item.price,
            category: item.category,
            image: item.image,
          }))
        )
        setLoading(false)
      } catch (err) {
        console.warn("API fetch failed, falling back to mock data")
        setProducts(mockProducts) // Sử dụng mockProducts làm fallback
        setError("Failed to load from API, using mock data")
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const categories = useMemo(() => ["All", ...new Set(products.map((p) => p.category))], [products])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = categoryFilter === "All" || product.category === categoryFilter
      const priceMatch =
        priceFilter === "All" ||
        (priceFilter === "Under $100" && product.price < 100) ||
        (priceFilter === "$100-$500" && product.price >= 100 && product.price <= 500) ||
        (priceFilter === "Over $500" && product.price > 500)
      return categoryMatch && priceMatch
    })
  }, [products, categoryFilter, priceFilter])

  if (loading) return <div className={styles.loading}>Loading products...</div>
  if (error && products.length === 0) return <div className={styles.error}>Error: {error}</div>

  return (
    <div>
      <h2 className={styles.pageTitle}>Product Catalog</h2>
      {error && <div className={styles.warning}>Warning: {error}</div>}
      <ProductFilters
        categoryFilter={categoryFilter}
        priceFilter={priceFilter}
        categories={categories}
        onCategoryChange={setCategoryFilter}
        onPriceChange={setPriceFilter}
      />
      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className={styles.noProducts}>No products match your filters.</div>
        )}
      </div>
    </div>
  )
}

export default ProductList