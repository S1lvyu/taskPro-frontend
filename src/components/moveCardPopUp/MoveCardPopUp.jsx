import React from "react";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { moveCard } from "../../redux/operations";
import { getUserToken } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import styles from "./MoveCardPopUp.module.css";
export default function MoveCardPopUp({ cardOwner, columns, cardId }) {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const handleMoveCard = (columnId) => {
    console.log(token);
    try {
      dispatch(
        moveCard({
          token,
          cardId: columnId.cardId,
          columnId: columnId.columnId,
        })
      );

      dispatch(closeModal());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.overlay}>
      <ul className={styles.container}>
        {columns.map(
          (item) =>
            cardOwner !== item._id && (
              <li
                key={item._id}
                className={styles.list__element}
                onClick={() => {
                  handleMoveCard({ columnId: item._id, cardId });
                }}
              >
                <svg width={18} height={18} className={styles.btn}>
                  <use href={svgSprite + "#icon-arrow-circle-broken-right"} />
                </svg>
                {item.name}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
