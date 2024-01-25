import React from "react";
import styles from "../LogoutButton/logoutbutton.module.css";

//*ButtonLogout component*
export default function LogoutButton() {
  const handleLogout = () => {
    // ! Add here our logout logic from backend
  };

  return (
    <button onClick={handleLogout}>
      <svg width="20" height="20" fill="#BEDBB0">
        <use href="../../assets/svg/symbol-defs.svg#icon-arrow-circle-broken-right" />
      </svg>
      Log out
    </button>
  );
}
