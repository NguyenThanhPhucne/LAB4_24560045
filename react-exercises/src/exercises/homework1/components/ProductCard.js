import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";
import styles from "../EcommerceApp.module.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className={styles.productCard}>
      <img
        src={product.image || "https://placehold.co/200x200"}
        alt={product.name}
        className={styles.productImage}
        onError={(e) => (e.target.src = "https://placehold.co/200x200")}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productCategory}>{product.category}</p>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      <div className={styles.productActions}>
        <Link to={`/product/${product.id}`} className={styles.detailsBtn}>
          View Details
        </Link>
        <button onClick={handleAddToCart} className={styles.addToCartBtn}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

