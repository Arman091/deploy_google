import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css"; // Import the CSS module

const Modal = ({ handleCloseModal, onEditForm, onAnswerForm }) => {
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleCloseModal}>
      <div className={styles.modal}>
        <h2>Choose an option</h2>
        <button onClick={onEditForm}>Edit Form</button>
        <button onClick={onAnswerForm}>Answer Form</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
