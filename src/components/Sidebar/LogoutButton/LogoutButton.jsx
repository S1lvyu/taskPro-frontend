import React from "react";
import { Navigate } from "react-router-dom";
import { getUserToken } from "../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/operations";
import styles from "../LogoutButton/logoutbutton.module.css";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

//*ButtonLogout component*
export default function LogoutButton() {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const handleLogout = (event) => {
    event.preventDefault();
    try {
      dispatch(
        logoutUser(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbHZpYW4ucmFuZXRlc2N1QGdtYWlsLmNvbSIsImlhdCI6MTcwNjI5OTM4MiwiZXhwIjoxNzA2MzAyOTgyfQ.pTgaOG3vyqhDvLrFHCOZfF8lOvEFIxQcFYCF_mjILD0"
        )
      );
      <Navigate to="/" />;
    } catch (error) {
      console.log(error);
    }
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
