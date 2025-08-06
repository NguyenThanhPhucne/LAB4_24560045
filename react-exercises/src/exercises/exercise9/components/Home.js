import styles from "../Navigation.module.css"

function Home() {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Home Page</h2>
      <p className={styles.pageText}>
        Welcome to the home page! This is a simple React Router demonstration showing how to navigate between different
        pages without full page reloads.
      </p>
      <div className={styles.infoBox}>
        <strong className={styles.infoTitle}>Features:</strong>
        <ul className={styles.infoList}>
          <li>Single Page Application (SPA)</li>
          <li>Client-side routing</li>
          <li>No page reloads</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
