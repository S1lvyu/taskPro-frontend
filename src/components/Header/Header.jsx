import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Header.module.css";
import svgSprite from "../../assets/svg/symbol-defs.svg";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleColorChange = (color) => {
    setCurrentColor(color);
    closeModal();
  };

  return (
    <header>
      <div className={`${styles.buttons_container} ${styles[currentColor]}`}>
        {/* mobile button modal */}
        <div className={styles.modal_mobile}>
          <button className={styles.button_toggle} onClick={openModal}>
            <svg width="24" height="24" className={styles.svg}>
              <use href={svgSprite + "#icon-menu"} />
            </svg>
          </button>
        </div>

        {/* user menu */}

        <div className={styles.profile}>
          {!isModalOpen && (
            <button className={styles.modalTrigger} onClick={openModal}>
              Theme
            </button>
          )}

          {isModalOpen && (
            <Modal onClose={closeModal} onColorChange={handleColorChange} />
          )}
          <div className={styles.profileData}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
