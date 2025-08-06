"use client"

import { useState, useEffect } from "react"
import styles from "./UserProfile.module.css"
import ProfileTitle from "./components/ProfileTitle"
import UserCard from "./components/UserCard"
import ErrorMessage from "./components/ErrorMessage"
import LoadingSpinner from "./components/LoadingSpinner"

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
        <ProfileTitle />
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <ProfileTitle />
        <ErrorMessage error={error} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <ProfileTitle />
      <UserCard user={user} />
    </div>
  )
}

export default UserProfile

