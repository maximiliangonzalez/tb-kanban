import React, { useState } from 'react';
import Column from './Column.jsx';

const createColumn = headline => {
  return {
    headline,
    storage: []
  }
}

const App = () => {
  const [columns, setColumns] = useState([
    createColumn('col1'),
    createColumn('col2'),
    createColumn('col3'),
    createColumn('col4')
  ]);

  const addCard = (text, columnNumber) => {
    setColumns(state => {
      const newState = [...state];
      const newColumn = {...newState[columnNumber]};
      newColumn.storage = [...newColumn.storage, text];
      newState[columnNumber] = newColumn;
      return newState;
    });
  };

  const moveCard = (index, currentColumn, leftOrRight) => {
    setColumns(state => {
      const targetColumn = leftOrRight === 'left' ? currentColumn - 1 : currentColumn + 1;
      const newState = [...state];
      const newCurrentColumn = {...newState[currentColumn]};
      const newTargetColumn = {...newState[targetColumn]};
      const text = newCurrentColumn.storage[index];
      newCurrentColumn.storage = [...newCurrentColumn.storage]
      newCurrentColumn.storage.splice(index, 1);
      newTargetColumn.storage = [...newTargetColumn.storage, text];
      newState.splice(targetColumn, 1, newTargetColumn);
      newState.splice(currentColumn, 1, newCurrentColumn);
      return newState;
    });
  };

  return (
    <div className="row">
      {columns.map(({headline, storage}, index) => (
        <Column 
          headline={headline} 
          key={headline} 
          storage={storage} 
          columnNumber={index}
          numberOfColumns={columns.length}
          addCard={addCard}
          moveCard={moveCard}
        />
      ))}
    </ div>
  );
};

export default App;
