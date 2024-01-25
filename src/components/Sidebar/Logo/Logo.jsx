import React from "react";
import styles from "../Logo/logo.module.css";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <svg width="32" height="32" fill="#FFFFFF">
        <use href={svgSprite + "#icon-logo-lightning"} />
      </svg>
      <p className={styles.title}>Task Pro</p>
    </div>
  );
}
