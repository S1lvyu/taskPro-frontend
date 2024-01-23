import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "../NeedHelp/needhelp.module.css";
import plantImg from ".././../assets/img/plantImg/plant.png";

// *NeedHelp component*
export const NeedHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <img src={plantImg} alt="HelpPlant" />
      <p>If you need help with TaskPro, check out our support resources or reach out to our customer support team.</p>
      <button onClick={handleOpen}>
        <svg width="20" height="20" fill="#FFFFFF">
          <use href="../../assets/svg/symbol-defs.svg#icon-question" />
        </svg>
        Need help?
      </button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {/* Replace here with our HelpModal */}
        {/* <form>
          <input type="text" placeholder="Your question" />
          <button type="submit">Submit</button>
        </form> */}
      </Modal>
    </div>
  );
};
