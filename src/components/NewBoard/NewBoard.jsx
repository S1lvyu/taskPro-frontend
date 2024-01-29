import React, { useState } from "react";
import style from "./NewBoard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { addBoard } from "../../redux/operations";
import { getUserToken } from "../../redux/selectors";
import sprite from "../../assets/svg/symbol-defs.svg";
import data from "../../assets/img/backgroundlmg/radiobutton/backgroundIcon/data";
import { closeModal } from "../../redux/modalSlice";

export default function NewBoard({ componentTitle, textButton }) {
  const [title, setTitle] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedBackgroundId, setSelectedBackgroundId] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const handleCloseModal = () => {
    try {
      dispatch(closeModal());
    } catch (error) {
      console.error(error);
    }
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value.toString());
  };

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    console.log(icon);
  };

  const handleBackgroundSelect = (backgroundId) => {
    setSelectedBackgroundId(backgroundId);
    console.log(backgroundId);
  };

  const handleCreateBoard = (event) => {
    event.preventDefault();

    dispatch(
      addBoard({
        token,
        boardName: title,
        icon: selectedIcon,
        background: selectedBackgroundId,
      })
    );
    handleCloseModal();
  };

  const renderIcons = () => {
    const icons = [
      "icon-project",
      "icon-star",
      "icon-loading",
      "icon-pazzle",
      "icon-container",
      "icon-lightning",
      "icon-colors",
      "icon-hex",
    ];

    return icons.map((icon) => (
      <svg
        width={18}
        height={18}
        key={icon}
        selected={selectedIcon === icon}
        onClick={() => handleIconSelect(icon)}
        className={style.icon__svg}
        tabIndex="0"
      >
        <use href={`${sprite}#${icon}`} />
      </svg>
    ));
  };

  const renderBackgrounds = () => {
    return data.map((item) => (
      <div key={item.id} onClick={() => handleBackgroundSelect(item.imgLink)}>
        <img
          className={style.background_icon}
          src={item.image}
          alt="Background"
          tabIndex="0"
        />
      </div>
    ));
  };

  return (
    <div className={style.overlay}>
      <div className={style.board_container}>
        <div className={style.board_header}>
          <h2>{componentTitle}</h2>
          <button className={style.closeButton} onClick={handleCloseModal}>
            x
          </button>
        </div>
        <input
          className={style.title_input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          style={style.input}
        />
        <h3>Icons</h3>
        <div className={style.icons_container}>{renderIcons()}</div>

        <h3>Background</h3>
        <div className={style.background_container}>{renderBackgrounds()}</div>

        <ButtonPrimary onClick={handleCreateBoard}>{textButton}</ButtonPrimary>
      </div>
    </div>
  );
}
