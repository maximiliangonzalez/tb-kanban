import React from 'react';
import Card from './Card.jsx';

const Column = ({headline, addCard, columnNumber, storage}) => {
  return (
    <div className="column">
      <h1>{headline}</h1>
      {storage.map(text => <Card text={text} key={text}/>)}
      <button onClick={() => {
        const text = window.prompt();
        addCard(text, columnNumber)
      }}>
        +
      </button>
    </div>
  );
};

export default Column;