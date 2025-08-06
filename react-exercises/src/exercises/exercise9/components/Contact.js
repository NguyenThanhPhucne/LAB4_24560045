import styles from "../Navigation.module.css"

function Contact() {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Contact Page</h2>
      <p className={styles.pageText}>Get in touch with us! We'd love to hear from you.</p>
      <div className={`${styles.infoBox} ${styles.contactBox}`}>
        <strong className={styles.infoTitle}>Contact Information:</strong>
        <ul className={styles.infoList}>
          <li>Email: 24560045@gm.uit.edu.vn</li>
          <li>Phone: 0983218615</li>
          <li>Address: 21/6 Thới Tứ, Thới Tam Thôn, Hóc Môn, Tp Hồ Chí Minh</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
