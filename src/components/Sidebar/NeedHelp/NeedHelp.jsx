import React from "react";

import styles from "../NeedHelp/needhelp.module.css";
import img from "../../../assets/img/plantImg/plant.png";
import svgSprite from "../.././../assets/svg/symbol-defs.svg";

// *NeedHelp component*
export default function NeedHelp() {
  return (
    <div className={styles.helpcontainer}>
      <img className={styles.imageplant} src={img} alt="HelpPlant" />
      <p className={styles.helptext}>
        If you need help with <span className={styles.highlight}>TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button className={styles.helpbutton}>
        <svg width="20" height="20" fill="#FFFFFF">
          <use href={svgSprite + "#icon-help-circle"} />
        </svg>
        Need help?
      </button>
    </div>
  );
}
