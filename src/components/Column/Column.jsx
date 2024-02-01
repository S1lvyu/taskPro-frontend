import React from "react";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import styles from "./Column.module.css";
import Card from "../Card/Card";
import { openModal } from "../../redux/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeColumn } from "../../redux/operations";
import { getUserToken, getTheme, getFilterColor } from "../../redux/selectors";
export default function Column({ columns, cards, moveCardColumns }) {
  const token = useSelector(getUserToken);
  const theme = useSelector(getTheme);
  const filterColor = useSelector(getFilterColor);

  const backgroundColor = theme === "Light" ? "#FDFDFD" : theme === "Violet" ? "rgba(214, 216, 255, 1)" : "#232323";
  const textColor = theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
  const dispatch = useDispatch();
  const handleOpenAddCardModal = () => {
    try {
      dispatch(openModal({ data: "addCard", id: columns._id }));
    } catch (error) {
      console.error(error);
    }
  };
  const handleOpenEditColumnModal = () => {
    try {
      dispatch(openModal({ data: "editColumn", id: columns._id }));
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteColumn = () => {
    try {
      dispatch(removeColumn({ token, columnId: columns._id }));
    } catch (error) {}
  };
  const filteredCards =
    filterColor === "green"
      ? cards
      : cards.filter((card) => card.labelColor === filterColor);
  return (
    <div className={styles.column}>
      <div className={styles.header} style={{ backgroundColor: backgroundColor }}>
        <h1 className={styles.title} style={{ color: textColor }}>
          {columns?.name}
        </h1>
        <div className={styles.btn__container}>
          <svg
            width={18}
            height={18}
            className={styles.icon}
            onClick={handleOpenEditColumnModal}
            style={{ stroke: textColor, fill: backgroundColor }}
          >
            <use href={svgSprite + "#icon-pencil-01"} />
          </svg>
          <svg
            width={18}
            height={18}
            className={styles.icon}
            onClick={handleDeleteColumn}
            style={{ stroke: textColor, fill: backgroundColor }}
          >
            <use href={svgSprite + "#icon-trash-06"} />
          </svg>
        </div>
      </div>
      <div className={styles.cards__container}>
        {filteredCards?.map((item) => {
          return <Card key={item._id} card={item} />;
        })}
      </div>
      <ButtonPrimary className={styles.cards_button} onClick={handleOpenAddCardModal}>
        Add another card
      </ButtonPrimary>
    </div>
  );
}
