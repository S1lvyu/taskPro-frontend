import React, { useState } from "react";
import styles from "./FilterModal.module.css";
import { closeModal, selectFilterColor } from "../../redux/modalSlice";
import { useDispatch } from "react-redux";

export default function FilterModal() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(null);
  const handleChangeUserInput = (event) => {
    const selectedColor = event.target.value;
    setUserInput(selectedColor);

    dispatch(selectFilterColor({ selectedColor }));
    dispatch(closeModal());
  };
  return (
    <div className={styles.overlay}>
      <form className={styles.form}>
        <label className={styles.label}>
          <input
            type="radio"
            value="#8FA1D0"
            name="labelColor"
            checked={userInput === "#8FA1D0"}
            onChange={handleChangeUserInput}
            className={styles.radioInput}
          />
          <input
            type="radio"
            value="#E09CB5"
            name="labelColor"
            checked={userInput === "#E09CB5"}
            onChange={handleChangeUserInput}
            className={`${styles.radioInput} ${styles.radioInput__modifier__pink}`}
          />
          <input
            type="radio"
            value="#BEDBB0"
            name="labelColor"
            checked={userInput === "#BEDBB0"}
            onChange={handleChangeUserInput}
            className={`${styles.radioInput} ${styles.radioInput__modifier__green}`}
          />
          <input
            type="radio"
            value="rgba(255, 255, 255, 0.30)"
            name="labelColor"
            checked={userInput === "rgba(255, 255, 255, 0.30)"}
            onChange={handleChangeUserInput}
            className={`${styles.radioInput} ${styles.radioInput__modifier__gray}`}
          />
          <div className={styles.all}>
            <input
              type="radio"
              value="green"
              name="labelColor"
              checked={userInput === "green"}
              onChange={handleChangeUserInput}
              className={`${styles.radioInput} ${styles.radioInput__modifier__all}`}
            />
            All
          </div>
        </label>
      </form>
    </div>
  );
}
