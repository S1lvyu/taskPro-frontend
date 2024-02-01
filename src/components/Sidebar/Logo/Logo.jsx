import React from "react";
import styles from "../Logo/logo.module.css";
import svgSprite from "../../../assets/svg/symbol-defs.svg";
import { getTheme } from "../../../redux/selectors";
import { useSelector } from "react-redux";

export default function Logo() {
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
    <div className={styles.logo}>
      <svg
        width="32"
        height="32"
        style={{ fill: backgroundColor, stroke: textColor }}
      >
        <use href={svgSprite + "#icon-logo-lightning"} />
      </svg>
      <p className={styles.title} style={{ color: textColor }}>
        Task Pro
      </p>
    </div>
  );
}
