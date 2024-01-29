import React from "react";
import styles from "./Dashboard.module.css";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import AddColumn from "../AddColumn/AddColumn";
import { openModal } from "../../redux/modalSlice";
import { getModalType, selectModal } from "../../redux/selectors";
import NewBoard from "../NewBoard/NewBoard";
import Column from "../Column/Column";
import AddCard from "../AddCard/AddCard";

export default function Dashboard({ children, board }) {
  const modal = useSelector(selectModal);
  const modalType = useSelector(getModalType);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal({ data: "column" }));
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
      <div className={styles.columns__container}>
        {board?.columns.map((item) => {
          return <Column key={item._id} columns={item} cards={item.cards} />;
        })}
        <div>
          <ButtonPrimary
            style={{
              width: "334px",
              background: "#121212",
              color: "white",
              marginLeft: "24px",
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
        <AddColumn title="Edit Column" textButton="Edit" />
      )}
      {modal && modalType === "addCard" && (
        <AddCard title="Add Card" textButton="Add" />
      )}
      {modal && modalType === "board" && (
        <NewBoard componentTitle="Add Board" textButton="Add" />
      )}
    </div>
  );
}
