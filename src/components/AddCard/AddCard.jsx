import React, { useState } from "react";
import styles from "./AddCard.module.css";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { closeModal } from "../../redux/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { addCard, updateCard } from "../../redux/operations";
import { getUserToken, getTheme } from "../../redux/selectors";

export default function AddCard({ title, textButton, cardId, columnId }) {
  const initialInput = {
    title: "",
    description: "",
    labelColor: "",
  };
  const token = useSelector(getUserToken);
  const theme = useSelector(getTheme);

  const backgroundColor =
    theme === "Light"
      ? "#FDFDFD"
      : theme === "Violet"
      ? "rgba(214, 216, 255, 1)"
      : "#232323";
  const textColor =
    theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [userInput, setUserInput] = useState(initialInput);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChangeUserInput = (event) => {
    const { name, value, type, checked } = event.target;

    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: type === "radio" ? (checked ? value : "") : value,
    }));
  };

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    try {
      dispatch(
        addCard({
          token,
          columnId,
          title: userInput.title,
          description: userInput.description,
          labelColor: userInput.labelColor,
          deadline: selectedDate,
        })
      );
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    try {
      dispatch(
        updateCard({
          token,
          cardId,
          title: userInput.title,
          description: userInput.description,
          labelColor: userInput.labelColor,
          deadline: selectedDate,
        })
      );
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };
  const handleFormSubmit =
    title === "Add Card" ? handleSubmit : handleEditSubmit;
  return (
    <div className={styles.overlay}>
      <div
        className={styles.container}
        style={{ backgroundColor: backgroundColor }}
      >
        <h1 className={styles.title} style={{ color: textColor }}>
          {title}
        </h1>
        <svg
          width={18}
          height={18}
          className={styles.svg}
          onClick={handleCloseModal}
          style={{ fill: textColor }}
        >
          <use href={svgSprite + "#icon-cancel-close"} />
        </svg>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <input
            placeholder="Title"
            name="title"
            className={styles.input}
            value={userInput.title}
            onChange={handleChangeUserInput}
            style={{ color: textColor }}
          />
          <textarea
            placeholder="Description"
            name="description"
            className={`${styles.input} ${styles.input__modifier}`}
            value={userInput.description}
            onChange={handleChangeUserInput}
            style={{ color: textColor }}
          />
          <p className={styles.text} style={{ color: textColor }}>
            {" "}
            LabelColor
          </p>
          <label>
            <input
              type="radio"
              value="#8FA1D0"
              name="labelColor"
              checked={userInput.labelColor === "#8FA1D0"}
              onChange={handleChangeUserInput}
              className={styles.radioInput}
            />
            <input
              type="radio"
              value="#E09CB5"
              name="labelColor"
              checked={userInput.labelColor === "#E09CB5"}
              onChange={handleChangeUserInput}
              className={`${styles.radioInput} ${styles.radioInput__modifier__pink}`}
            />
            <input
              type="radio"
              value="#BEDBB0"
              name="labelColor"
              checked={userInput.labelColor === "#BEDBB0"}
              onChange={handleChangeUserInput}
              className={`${styles.radioInput} ${styles.radioInput__modifier__green}`}
            />
            <input
              type="radio"
              value="rgba(255, 255, 255, 0.30)"
              name="labelColor"
              checked={userInput.labelColor === "rgba(255, 255, 255, 0.30)"}
              onChange={handleChangeUserInput}
              className={`${styles.radioInput} ${styles.radioInput__modifier__gray}`}
            />
          </label>
          <p className={styles.text} style={{ color: textColor }}>
            Deadline
          </p>

          <DatePicker
            selected={selectedDate}
            name="deadline"
            onChange={handleDateChange}
            dateFormat="dd/MMMM/yyyy"
            placeholderText="Select a date"
            className={styles.calendar}
          />
          <ButtonPrimary style={{ width: "302px" }}>{textButton}</ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
