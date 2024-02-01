import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Header.module.css";
import { UserInfo } from "./UserInfo/UserInfo";
import { getTheme } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const theme = useSelector(getTheme);

  const backgroundColor =
    theme === "Light"
      ? "#FDFDFD"
      : theme === "Violet"
      ? "rgba(214, 216, 255, 1)"
      : "#232323";
  const textColor =
    theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div
        className={`${styles.buttons_container}`}
        style={{ backgroundColor: backgroundColor }}
      >
        {/* mobile button modal */}
        <div className={styles.modal_mobile}>
          <button className={styles.button_toggle} onClick={openModal}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ stroke: textColor }}
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
            className={`${styles.modalTrigger} `}
            onClick={openModal}
            style={{ color: textColor }}
          >
            Theme
          </button>
          {isModalOpen && <Modal onClose={closeModal} />}
        </div>
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
