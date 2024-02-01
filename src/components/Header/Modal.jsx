import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { selectTheme } from "../../redux/modalSlice";
import { useDispatch } from "react-redux";

const Modal = ({ onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  const modalContainer = document.createElement("div");
  const dispatch = useDispatch();
  const handleSelectTheme = (event) => {
    dispatch(selectTheme(event.target.textContent));
    onClose();
  };
  React.useEffect(() => {
    modalRoot.appendChild(modalContainer);
    return () => {
      modalRoot.removeChild(modalContainer);
    };
  }, [modalContainer, modalRoot]);

  return ReactDOM.createPortal(
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.container}>
          <span onClick={handleSelectTheme} className={styles.light}>
            Light
          </span>
          <span onClick={handleSelectTheme} className={styles.dark}>
            Dark
          </span>
          <span onClick={handleSelectTheme} className={styles.violet}>
            Violet
          </span>
        </div>
      </div>
    </div>,
    modalContainer
  );
};

export default Modal;
