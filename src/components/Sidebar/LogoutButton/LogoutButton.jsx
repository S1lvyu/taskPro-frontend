import React from "react";
import styles from "../LogoutButton/logoutbutton.module.css";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

//*ButtonLogout component*
export default function LogoutButton() {
  // const handleLogout = async () => {
  //   const response = await fetch("/logout", { method: "GET" });
  //   if (response.ok) {
  //     console.log("Logged out");

  //   } else {
  //     console.error("Logout failed");
  //   }
  // };

  return (
    <button className={styles.logoutbutton}>
      <svg width="32" height="32" fill="#BEDBB0">
        <use href={svgSprite + "#icon-logout"} />
      </svg>
      Log out
    </button>
  );
}
