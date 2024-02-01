import React from "react";
import styles from "./Dashboard.module.css";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import AddColumn from "../AddColumn/AddColumn";
import { openModal } from "../../redux/modalSlice";
import {
  getModalType,
  selectModal,
  getModalID,
  getModalOwner,
  getTheme,
  getFilterColor,
} from "../../redux/selectors";
import NewBoard from "../NewBoard/NewBoard";
import Column from "../Column/Column";
import AddCard from "../AddCard/AddCard";
import MoveCardPopUp from "../moveCardPopUp/MoveCardPopUp";
import FilterModal from "../FilterModal/FilterModal";
export default function Dashboard({ board }) {
  const modalId = useSelector(getModalID);
  const modal = useSelector(selectModal);
  const modalType = useSelector(getModalType);
  const owner = useSelector(getModalOwner);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal({ data: "column" }));
  };
  const filterColor = useSelector(getFilterColor);
  const showIndicator = filterColor === "green" ? false : true;
  const handleOpenFilterModal = () => {
    dispatch(openModal({ data: "filter" }));
  };
  const theme = useSelector(getTheme);

  const backgroundColor =
    theme === "Light"
      ? "#FDFDFD"
      : theme === "Violet"
      ? "rgba(214, 216, 255, 1)"
      : "#232323";
  const textColor =
    theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
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
          <svg
            width={18}
            height={18}
            className={styles.svg}
            onClick={handleOpenFilterModal}
          >
            <use href={svgSprite + "#icon-filter"} />
          </svg>
          {showIndicator && <div className={styles.indicator}></div>}
          Filter
        </p>
      </div>
      <div className={styles.columns__container}>
        {board?.columns.map((item) => {
          return (
            <Column
              key={item._id}
              columns={item}
              cards={item.cards}
              moveCardColumns={board.columns}
            />
          );
        })}
        <div>
          <ButtonPrimary
            style={{
              width: "334px",
              background: "#121212",

              marginLeft: "24px",
              backgroundColor: backgroundColor,
              color: textColor,
              fill: backgroundColor,
              stroke: textColor,
            }}
            onClick={handleOpenModal}
          >
            Add another column
          </ButtonPrimary>
        </div>
      </div>
      {modal && modalType === "column" && (
        <AddColumn title="Add Column" textButton="Add" />
      )}
      {modal && modalType === "editColumn" && (
        <AddColumn title="Edit Column" textButton="Edit" columnId={modalId} />
      )}
      {modal && modalType === "addCard" && (
        <AddCard title="Add Card" textButton="Add" columnId={modalId} />
      )}
      {modal && modalType === "card" && (
        <AddCard title="Edit Card" textButton="Edit" cardId={modalId} />
      )}
      {modal && modalType === "editBoard" && (
        <NewBoard
          componentTitle="Edit Board"
          textButton="Edit"
          boardId={modalId}
        />
      )}
      {modal && modalType === "popup" && (
        <MoveCardPopUp
          cardOwner={owner}
          columns={board.columns}
          cardId={modalId}
        />
      )}
      {modal && modalType === "filter" && <FilterModal />}
    </div>
  );
}
