import React, { useState } from "react";
// import Modal from "../Modal/Modal";
import styles from "../NeedHelp/needhelp.module.css";
import img from "../../../assets/img/plantImg/plant.png";
import svgSprite from "../.././../assets/svg/symbol-defs.svg";

// *NeedHelp component*
export default function NeedHelp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.helpcontainer}>
      <img className={styles.imageplant} src={img} alt="HelpPlant" />
      <p className={styles.helptext}>
        If you need help with <span className={styles.highlight}>TaskPro</span>, check out our support resources or
        reach out to our customer support team.
      </p>
      <button className={styles.helpbutton} onClick={handleOpen}>
        <svg width="20" height="20" fill="#FFFFFF">
          <use href={svgSprite + "#icon-help-circle"} />
        </svg>
        Need help?
      </button>
      {/* <Modal isOpen={isOpen} onClose={handleClose}>
        Replace here with our HelpModal
        <form>
          <input type="text" placeholder="Your question" />
          <button type="submit">Submit</button>
        </form>
      </Modal> */}
    </div>
  );
}
