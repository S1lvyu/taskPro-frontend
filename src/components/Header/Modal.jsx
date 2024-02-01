import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ onClose, onColorChange }) => {
  const modalRoot = document.getElementById("modal-root");
  const modalContainer = document.createElement("div");

  React.useEffect(() => {
    modalRoot.appendChild(modalContainer);
    return () => {
      modalRoot.removeChild(modalContainer);
    };
  }, [modalContainer, modalRoot]);

  const handleColorChange = (color) => {
    onColorChange(color);
    onClose();
  };

  return ReactDOM.createPortal(
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.container}>
          <span
            onClick={() => handleColorChange("light")}
            className={styles.light}
          >
            Lumină
          </span>
          <span
            onClick={() => handleColorChange("dark")}
            className={styles.dark}
          >
            Întuneric
          </span>
          <span
            onClick={() => handleColorChange("violet")}
            className={styles.violet}
          >
            Violet
          </span>
        </div>
      </div>
    </div>,
    modalContainer
  );
};

export default Modal;
