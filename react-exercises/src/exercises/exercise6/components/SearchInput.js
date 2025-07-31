"use client"

import styles from "../FilterableTodoList.module.css"

function SearchInput({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search todos..."
      className={styles.searchInput}
    />
  )
}

export default SearchInput
