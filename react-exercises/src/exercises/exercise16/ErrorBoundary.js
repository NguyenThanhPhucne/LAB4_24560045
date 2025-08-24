import React from "react"
import styles from "./ErrorBoundary.module.css"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo)
    this.setState({
      errorInfo: errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <h2 className={styles.errorTitle}>Something went wrong</h2>
            <div className={styles.errorDetails}>
              <details className={styles.errorStack}>
                <summary>Error Details</summary>
                <div className={styles.errorText}>
                  {this.state.error && this.state.error.toString()}
                </div>
                <div className={styles.componentStack}>
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </div>
              </details>
            </div>
            <div className={styles.errorActions}>
                          <button className={styles.tryAgainButton} onClick={this.handleReset}>Try again</button>
              <button
                onClick={() => window.location.reload()}
                className={styles.refreshButton}
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
