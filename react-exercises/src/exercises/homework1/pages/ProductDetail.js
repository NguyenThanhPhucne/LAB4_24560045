import { useContext, useState, useEffect } from "react"
   import { useParams } from "react-router-dom"
   import { toast } from "react-toastify" // Thêm import này
   import { CartContext } from "../context/CartContext"
   import { mockProducts } from "../data/mockData"
   import styles from "../EcommerceApp.module.css"

   function ProductDetail() {
     const { id } = useParams()
     const { addToCart } = useContext(CartContext)
     const [product, setProduct] = useState(null)
     const [loading, setLoading] = useState(true)
     const [error, setError] = useState(null)

     useEffect(() => {
       async function fetchProduct() {
         try {
           const response = await fetch(`https://fakestoreapi.com/products/${id}`)
           if (!response.ok) throw new Error("Failed to fetch product")
           const data = await response.json()
           setProduct({
             id: data.id,
             name: data.title,
             price: data.price,
             category: data.category,
             image: data.image,
             description: data.description,
           })
           setLoading(false)
         } catch (err) {
           console.warn("API fetch failed, checking mock data")
           const mockProduct = mockProducts.find((p) => p.id === Number.parseInt(id))
           if (mockProduct) {
             setProduct(mockProduct)
             setError("Failed to load from API, using mock data")
           } else {
             setError("Product not found")
           }
           setLoading(false)
         }
       }
       fetchProduct()
     }, [id])

     if (loading) return <div className={styles.loading}>Loading product...</div>
     if (error && !product) return <div className={styles.error}>Error: {error}</div>
     if (!product) return <div className={styles.notFound}>Product not found</div>

     return (
       <div className={styles.productDetail}>
         {error && <div className={styles.warning}>Warning: {error}</div>}
         <div className={styles.productDetailGrid}>
           <img
             src={product.image || "https://placehold.co/400x400"}
             alt={product.name}
             className={styles.detailImage}
             onError={(e) => (e.target.src = "https://placehold.co/400x400")}
           />
           <div className={styles.detailInfo}>
             <h1 className={styles.detailTitle}>{product.name}</h1>
             <p className={styles.detailCategory}>Category: {product.category}</p>
             <p className={styles.detailPrice}>${product.price.toFixed(2)}</p>
             <p className={styles.detailDescription}>{product.description || "No description available."}</p>
             <button
               onClick={() => {
                 addToCart(product)
                 toast.success(`${product.name} added to cart!`) // Sử dụng toast đã import
               }}
               className={styles.detailAddBtn}
             >
               Add to Cart
             </button>
           </div>
         </div>
       </div>
     )
   }

   export default ProductDetail