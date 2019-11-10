import React from 'react';

const Column = ({cards, addCard, index}) => {
  return (
    <div className="column">
      {cards}
      <button onClick={() => addCard(index)}>+</button>
    </div>
  );
};

export default Column;