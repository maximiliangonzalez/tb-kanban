import React from 'react';

const Card = ({text}) => {
  return (
    <div>
      <button>{'<'}</button>
        {text}
      <button>{'>'}</button>
    </div>
  );
};

export default Card;