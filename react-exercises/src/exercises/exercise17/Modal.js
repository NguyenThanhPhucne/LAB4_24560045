import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import styles from "./Modal.module.css"

function Modal({ children, isOpen, onClose }) {
  const [el] = useState(() => document.createElement("div"))
  
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      const modalRoot = document.getElementById("modal-root")
      modalRoot.appendChild(el)
    } else {
      const modalRoot = document.getElementById("modal-root")
      if (modalRoot && modalRoot.contains(el)) {
        modalRoot.removeChild(el)
      }
    }

    return () => {
      const modalRoot = document.getElementById("modal-root")
      if (modalRoot && modalRoot.contains(el)) {
        modalRoot.removeChild(el)
      }
    }
  }, [isOpen, el])

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className={`${styles.modalOverlay} ${isOpen ? styles.fadeIn : ""}`} onClick={onClose}>
      <div 
        className={`${styles.modalContent} ${isOpen ? styles.slideIn : ""}`} 
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    el
  )
}

export default Modal
