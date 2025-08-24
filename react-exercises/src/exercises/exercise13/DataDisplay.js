import DataLoader from "./DataLoader"
import styles from "./DataLoader.module.css"

function DataDisplay() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Data Fetching with Render Props</h2>
      <DataLoader
        render={({ data, loading, error }) => {
          if (loading) {
            return (
              <div className={`${styles.loading} ${styles.fadeIn}`}>
                <div className={styles.spinner}></div>
                <p>Loading data...</p>
              </div>
            )
          }

          if (error) {
            return (
              <div className={`${styles.error} ${styles.fadeIn}`}>
                <h3>Error occurred:</h3>
                <p>{error}</p>
                <button
                  className={styles.retryButton}
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            )
          }

          if (data) {
            return (
              <div className={`${styles.data} ${styles.fadeIn}`}>
                <h3>Fetched Data:</h3>
                <div className={styles.post}>
                  <h4>{data.title}</h4>
                  <p>{data.body}</p>
                  <p className={styles.id}>Post ID: {data.id}</p>
                </div>
              </div>
            )
          }

          return null
        }}
      />
    </div>
  )
}

export default DataDisplay
