import React from 'react';

const Card = ({text, index, columnNumber, numberOfColumns, moveCard}) => {
  return (
    <div className="row">
      {columnNumber !== 0 && <button onClick={() => moveCard(index, columnNumber, 'left')}>{'<'}</button>}
      {text}
      {columnNumber !== numberOfColumns - 1 && <button onClick={() => moveCard(index, columnNumber, 'right')}>{'>'}</button>}
    </div>
  );
};

export default Card;