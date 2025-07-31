"use client"

import { useState, useEffect } from "react"
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorMessage from "./components/ErrorMessage"
import UserCard from "./components/UserCard"
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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Profile</h2>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage error={error} />}
      {user && !loading && !error && <UserCard user={user} />}
    </div>
  )
}

export default UserProfile
