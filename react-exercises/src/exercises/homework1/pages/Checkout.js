import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";
import styles from "../EcommerceApp.module.css";

function Checkout() {
  const { cartItems, getTotalPrice, setCartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    toast.success("Order placed successfully!");
    setFormData({ name: "", email: "", address: "" });
    setCartItems([]);
    localStorage.removeItem("cart");
  };

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
      <div className={styles.checkoutForm}>
        <h3 className={styles.summaryTitle}>Shipping Information</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.formInput}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.formInput}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={styles.formInput}
            />
            {errors.address && <p className={styles.error}>{errors.address}</p>}
          </div>
          <button type="submit" className={styles.checkoutBtn}>
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;