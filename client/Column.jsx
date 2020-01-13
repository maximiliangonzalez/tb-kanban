import React from 'react';
import Card from './Card.jsx';

const Column = ({headline, addCard, columnNumber, numberOfColumns, storage, moveCard}) => {
  const onClick = () => {
    const text = window.prompt();
    addCard(text, columnNumber)
  };

  return (
    <div className="column">
      <h1>{headline}</h1>
      {storage.map((text, index) => (
        <Card 
          text={text} 
          key={`${text}${index}`}
          columnNumber={columnNumber}
          numberOfColumns={numberOfColumns}
          moveCard={moveCard}
          index={index}
        />
      ))}
      <button onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default Column;