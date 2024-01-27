import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Header.module.css";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff");
  const svgColorClass =
    currentColor === "dark" ? styles.whiteColor : styles.blackColor;

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
            <svg
              className={`${svgColorClass}`}
              width="32"
              height="32"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* user menu */}

        <div className={styles.theme}>
          <button
            className={`${styles.modalTrigger} ${styles[currentColor]}`}
            onClick={openModal}
          >
            Theme
          </button>
          {isModalOpen && (
            <Modal
              onClose={closeModal}
              onColorChange={handleColorChange}
              themeColor={currentColor}
            />
          )}
          <div className={`${styles.profileData} ${styles[currentColor]}`}>
            <div className={styles.userName}>Ivetta</div>
            <div className={styles.userAvatar}>
              <img src="profileImageUrl" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
