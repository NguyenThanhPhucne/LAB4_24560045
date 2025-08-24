import React, { useState } from "react"
import Modal from "./Modal"
import styles from "./Modal.module.css"

function ModalDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState("info")

  const openModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const renderModalContent = () => {
    switch (modalType) {
      case "info":
        return (
          <div className={styles.modalBody}>
            <h2>Welcome to the Portal Modal!</h2>
            <p>This content is rendered using a React Portal, meaning it lives in a different part of the DOM tree than its parent component.</p>
            <p>This is useful for things like modals, tooltips, and popovers to avoid layout issues.</p>
            <div className={styles.modalActions}>
              <button onClick={closeModal} className={styles.modalButton}>
                Close Modal
              </button>
            </div>
          </div>
        )
      case "form":
        return (
          <div className={styles.modalBody}>
            <h2>Contact Form</h2>
            <form className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Enter your message" rows="4"></textarea>
              </div>
              <div className={styles.modalActions}>
                <button type="button" onClick={closeModal} className={styles.modalButton}>
                  Cancel
                </button>
                <button type="submit" className={`${styles.modalButton} ${styles.primary}`}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        )
      case "gallery":
        return (
          <div className={styles.modalBody}>
            <h2>Image Gallery</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>🖼️</div>
              <div className={styles.galleryItem}>📷</div>
              <div className={styles.galleryItem}>🎨</div>
              <div className={styles.galleryItem}>🖼️</div>
            </div>
            <p>This modal demonstrates different content types that can be rendered using portals.</p>
            <div className={styles.modalActions}>
              <button onClick={closeModal} className={styles.modalButton}>
                Close Gallery
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Modal with Portals Demo</h2>
      
      <div className={styles.info}>
        <p>Click the buttons below to open different types of modals rendered using React Portals.</p>
        <p>Portals allow content to be rendered outside the normal DOM hierarchy.</p>
      </div>

      <div className={styles.buttonGroup}>
        <button
          onClick={() => openModal("info")}
          className={`${styles.demoButton} ${styles.infoButton}`}
        >
          Info Modal
        </button>
        <button
          onClick={() => openModal("form")}
          className={`${styles.demoButton} ${styles.formButton}`}
        >
          Form Modal
        </button>
        <button
          onClick={() => openModal("gallery")}
          className={`${styles.demoButton} ${styles.galleryButton}`}
        >
          Gallery Modal
        </button>
      </div>

      <div className={styles.explanation}>
        <h3>How Portals Work:</h3>
        <ul>
          <li>Portals render content into a different DOM node than the parent component</li>
          <li>They're useful for modals, tooltips, and other overlay elements</li>
          <li>Event bubbling still works normally through the React component tree</li>
          <li>They help avoid z-index and overflow issues from parent containers</li>
        </ul>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  )
}

export default ModalDemo
