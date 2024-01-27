import React from "react";
import styles from "./Dashboard.module.css";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { useDispatch } from "react-redux";

import { openModal } from "../../redux/modalSlice";

export default function Dashboard({ children, board }) {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${board?.background})`,
      }}
    >
      {" "}
      <div className={styles.header__container}>
        <h1 className={styles.title}>{board.name}</h1>
        <p className={styles.filter}>
          <svg width={18} height={18} className={styles.svg}>
            <use href={svgSprite + "#icon-filter"} />
          </svg>
          Filter
        </p>
      </div>
      {children}
      <ButtonPrimary
        style={{
          width: "334px",
          background: "#121212",
          color: "white",
          marginLeft: "24px",
          marginTop: "10px",
        }}
        onClick={handleOpenModal}
      >
        Add another column
      </ButtonPrimary>
    </div>
  );
}
