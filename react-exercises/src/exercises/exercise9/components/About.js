import styles from "../Navigation.module.css"

function About() {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>About Page</h2>
      <p className={styles.pageText}>
        This is the about page. Here you can learn more about our application and the technologies we use.
      </p>
      <div className={`${styles.infoBox} ${styles.aboutBox}`}>
        <strong className={styles.infoTitle}>Technologies Used:</strong>
        <ul className={styles.infoList}>
          <li>React 18</li>
          <li>React Router v6</li>
          <li>Modern JavaScript (ES6+)</li>
        </ul>
      </div>
    </div>
  )
}

export default About
