import { useState } from "react"
import styles from "../FilterableTodoList.module.css"

function TodoInput({ onAdd }) {
    const [inputValue, setInputValue] = useState("")

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            onAdd(inputValue.trim())
            setInputValue("")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAdd()
        }
    }

    return (
    <div className={styles.inputSection}>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            className={styles.input}
        />
        <button onClick={handleAdd} className={styles.addButton}>
            Add
        </button>
    </div>
    )
}

export default TodoInput

