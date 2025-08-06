import styles from "../FilterableTodoList.module.css"

function NoResults({ searchTerm }) {
  return (
    <div className={styles.noResults}>
      {searchTerm ? `No todos match "${searchTerm}"` : "No todos yet. Add one above!"}
    </div>
  )
}

export default NoResults
