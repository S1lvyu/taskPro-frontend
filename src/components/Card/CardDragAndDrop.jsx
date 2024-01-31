import React, { useState } from "react";
import Draggable from "react-draggable";
import Card from "./Card";

const CardDragAndDrop = ({ card, cardOwner, columns }) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleCardDragStart = (event) => {
    const position = event.nativeEvent.clientX;
    const offset = position - event.target.getBoundingClientRect().left;

    event.dataTransfer.setData("cardPosition", JSON.stringify({ offset }));

    setPosition({
      x: offset,
      y: 0,
    });
  };

  const handleCardDragEnd = (event) => {
    const { offset } = JSON.parse(event.dataTransfer.getData("cardPosition"));
    const newPosition = {
      x: offset,
      y: 0,
    };

    setPosition(newPosition);
  };

  const handleCardDrop = (cardId, newPosition) => {
    // Implementeaza actiunile pe care vrei sa le faci la drop
    console.log(`Card with id ${cardId} dropped at position:`, newPosition);
    // Aici poti implementa logica pentru mutarea cardului intre coloane sau orice altceva
  };

  return (
    <Draggable
      handle=".card"
      draggableId={card._id}
      onDragStart={handleCardDragStart}
      onDragEnd={handleCardDragEnd}
    >
      <Card
        {...{ card, cardOwner, columns, position }}
        onCardDrop={(newPosition) => handleCardDrop(card._id, newPosition)}
      />
    </Draggable>
  );
};

export default CardDragAndDrop;
