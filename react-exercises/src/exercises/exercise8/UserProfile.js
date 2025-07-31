"use client"

import { useState, useEffect } from "react"
import styles from "./UserProfile.module.css"

function UserProfile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if (!response.ok) {
          throw new Error("Failed to fetch user data")
        }
        const userData = await response.json()
        setUser(userData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>User Profile</h2>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          Loading user data...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>User Profile</h2>
        <div className={styles.error}>Error: {error}</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Profile</h2>
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
    </div>
  )
}

export default UserProfile
