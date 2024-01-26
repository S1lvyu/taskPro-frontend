import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ onClose, onColorChange }) => {
  const handleColorChange = (color) => {
    onColorChange(color);
    onClose();
  };
  return (
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.container}>
          <span
            onClick={() => handleColorChange("light")}
            className={styles.light}
          >
            Light
          </span>
          <span
            onClick={() => handleColorChange("dark")}
            className={styles.dark}
          >
            Dark
          </span>
          <span
            onClick={() => handleColorChange("violet")}
            className={styles.violet}
          >
            Violet
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
