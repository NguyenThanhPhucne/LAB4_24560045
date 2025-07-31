import styles from "./GreetingCard.module.css"

function GreetingCard({ name }) {
  return (
    <div className={styles.card}>
      <div className={styles.topBorder}></div>
      <div className={styles.avatar}>{name.charAt(0).toUpperCase()}</div>
      <h3 className={styles.greeting}>Hello, {name}!</h3>
      <p className={styles.message}>Welcome to React.</p>
      <div className={styles.sparkles}>
        <div className={styles.sparkle}></div>
        <div className={styles.sparkle}></div>
        <div className={styles.sparkle}></div>
      </div>
    </div>
  )
}

export default GreetingCard
