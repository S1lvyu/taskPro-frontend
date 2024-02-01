import React from "react";

import styles from "../NeedHelp/needhelp.module.css";
import img from "../../../assets/img/plantImg/plant.png";
import svgSprite from "../.././../assets/svg/symbol-defs.svg";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

// *NeedHelp component*
export default function NeedHelp() {
  const theme = useSelector(getTheme);

  const backgroundColor =
    theme === "Light"
      ? "#FDFDFD"
      : theme === "Violet"
      ? "rgba(214, 216, 255, 1)"
      : "#232323";
  const textColor =
    theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
  return (
    <div
      className={styles.helpcontainer}
      style={{
        backgroundColor: backgroundColor,
        border: `1px solid ${textColor}`,
      }}
    >
      <img className={styles.imageplant} src={img} alt="HelpPlant" />
      <p className={styles.helptext} style={{ color: textColor }}>
        If you need help with <span className={styles.highlight}>TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button className={styles.helpbutton} style={{ color: textColor }}>
        <svg
          width="20"
          height="20"
          style={{ fill: backgroundColor, stroke: textColor }}
        >
          <use href={svgSprite + "#icon-help-circle"} />
        </svg>
        Need help?
      </button>
    </div>
  );
}
