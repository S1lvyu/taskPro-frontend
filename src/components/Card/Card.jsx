import React from "react";
import MoveCardPopUp from "../moveCardPopUp/MoveCardPopUp";
import { useSelector, useDispatch } from "react-redux";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import styles from "./Card.module.css";
import {
  selectModal,
  getBoardsData,
  getModalType,
  getUserToken,
} from "../../redux/selectors";
import { removeCard } from "../../redux/operations";
import { openModal } from "../../redux/modalSlice";
import AddCard from "../AddCard/AddCard";
export default function Card() {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const modal = useSelector(selectModal);
  const modalType = useSelector(getModalType);
  const boards = useSelector(getBoardsData);
  // de modificat urmatoarele linii de cod cu o varianta care contine toate datele
  const cardData = boards[0]?.columns[1]?.cards[5];
  const columns = boards[0]?.columns;
  const formatedData = new Date(cardData?.deadline).toLocaleDateString();
  const text =
    cardData?.labelColor === "#8FA1D0"
      ? "Low"
      : cardData?.labelColor === "#E09CB5"
      ? "Medium"
      : cardData?.labelColor === "#BEDBB0"
      ? "High"
      : "Without";
  const cardId = boards[0]?.columns[1]?.cards[5]?._id;
  console.log(cardId);
  const handleOpenEditModal = (event) => {
    console.log(event.target);
    try {
      dispatch(openModal({ data: "card" }));
    } catch (error) {
      console.error(error);
    }
  };
  const handleOpenMoveCardModal = () => {
    try {
      dispatch(openModal({ data: "popup" }));
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteCard = () => {
    try {
      dispatch(removeCard({ token, cardId: cardData._id }));
    } catch (error) {}
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.card__color}
        style={{ background: `${cardData?.labelColor}` }}
      ></div>
      <div>
        <h1 className={styles.title}>{cardData?.title}</h1>
        <p className={styles.text}>{cardData?.description}</p>
        <div className={styles.line}></div>
        <div className={styles.card__info}>
          <div className={styles.data}>
            Priority{" "}
            <div className={styles.deadline}>
              <div
                className={styles.circle}
                style={{ background: `${cardData?.labelColor}` }}
              ></div>
              {text}
            </div>
          </div>
          <div className={styles.data}>
            Deadline
            <div className={styles.deadline}>{formatedData}</div>
          </div>
          <div className={styles.btn__container}>
            <svg
              width={18}
              height={18}
              className={styles.btn}
              onClick={handleOpenMoveCardModal}
            >
              <use href={svgSprite + "#icon-arrow-circle-broken-right"} />
            </svg>
            <svg
              width={18}
              height={18}
              className={styles.btn}
              onClick={handleOpenEditModal}
            >
              <use href={svgSprite + "#icon-pencil-01"} />
            </svg>
            <svg
              width={18}
              height={18}
              className={styles.btn}
              onClick={handleDeleteCard}
            >
              <use href={svgSprite + "#icon-trash-06"} />
            </svg>
          </div>
        </div>
      </div>
      {modal && modalType === "card" && (
        <AddCard
          title="Edit Card"
          textButton="Edit"
          // de modificat cu o valore reala
          cardId="65b5480c0add5dc60f21fdcf"
        />
      )}
      {modal && modalType === "popup" && (
        <MoveCardPopUp
          // de modificat  cu o valoare reala
          cardOwner="65b4c957c5e64e41f3c4b707"
          columns={columns}
          cardId={cardId}
        />
      )}
    </div>
  );
}
