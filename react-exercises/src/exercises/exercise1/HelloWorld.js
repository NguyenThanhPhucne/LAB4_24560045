import styles from "./HelloWorld.module.css"

function HelloWorld() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello, React World!</h1>
    </div>
  )
}

export default HelloWorld

