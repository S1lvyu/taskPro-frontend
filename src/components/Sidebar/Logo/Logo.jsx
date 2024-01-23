import React from "react";
import styles from "../Logo/logo.module.css";

export const Logo = () => {
  return (
    <div>
      <svg width="24" height="24" fill="#FFFFFF">
        <use href="../../assets/svg/symbol-defs.svg#icon-logo-lightning" />
      </svg>
    </div>
  );
};
