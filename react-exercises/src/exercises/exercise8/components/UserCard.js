import styles from "../UserProfile.module.css"

function UserCard({ user }) {
  return (
    <div className={styles.userCard}>
      <div className={styles.avatar}>{user.name.charAt(0)}</div>
      <h3 className={styles.userName}>{user.name}</h3>
      <div className={styles.userInfo}>
        <div className={styles.infoItem}>
          <strong>Email:</strong> {user.email}
        </div>
        <div className={styles.infoItem}>
          <strong>Website:</strong> {user.website}
        </div>
        <div className={styles.infoItem}>
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className={styles.infoItem}>
          <strong>Company:</strong> {user.company.name}
        </div>
      </div>
    </div>
  )
}

export default UserCard

