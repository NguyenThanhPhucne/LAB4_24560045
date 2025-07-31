import styles from "./GreetingCard.module.css"

function GreetingCard({ name }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>{name.charAt(0).toUpperCase()}</div>
      <h3 className={styles.greeting}>Hello, {name}!</h3>
      <p className={styles.message}>Welcome to React.</p>
    </div>
  )
}

export default GreetingCard
