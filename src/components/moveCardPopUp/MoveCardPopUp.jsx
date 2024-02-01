import React from "react";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { moveCard } from "../../redux/operations";
import { getUserToken, getTheme } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import styles from "./MoveCardPopUp.module.css";
export default function MoveCardPopUp({ cardOwner, columns, cardId }) {
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
  const token = useSelector(getUserToken);
  const handleMoveCard = (columnId) => {
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
      <ul
        className={styles.container}
        style={{ backgroundColor: backgroundColor }}
      >
        {columns?.map(
          (item) =>
            cardOwner !== item._id && (
              <li
                key={item._id}
                className={styles.list__element}
                style={{ color: textColor }}
                onClick={() => {
                  handleMoveCard({ columnId: item._id, cardId });
                }}
              >
                <svg
                  width={18}
                  height={18}
                  className={styles.btn}
                  style={{ fill: backgroundColor, stroke: textColor }}
                >
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
