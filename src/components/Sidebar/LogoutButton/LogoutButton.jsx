import React from "react";
import styles from "../LogoutButton/logoutbutton.module.css";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

//*ButtonLogout component*
export default function LogoutButton() {
  const handleLogout = () => {
    // ! Add here our logout logic from backend
  };

  return (
    <button className={styles.logoutbutton} onClick={handleLogout}>
      <svg width="32" height="32" fill="#BEDBB0">
        <use href={svgSprite + "#icon-logout"} />
      </svg>
      Log out
    </button>
  );
}
