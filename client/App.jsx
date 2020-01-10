import React, { useState } from 'react';
import Column from './Column.jsx';

const App = () => {
  const [columns, setColumns] = useState([{headline: 'col1', storage: []}, {headline: 'col2', storage: []}, {headline: 'col3', storage: []}, {headline: 'col4', storage: []}]);

  const addCard = (text, columnNumber) => {
    setColumns(state => {
      const newState = [...state];
      const newColumn = {...newState[columnNumber]};
      newColumn.storage = [...newColumn.storage, text];
      newState[columnNumber] = newColumn;
      return newState;
    });
  }

  return (
    <div className="row">
      {columns.map(({headline, storage}, index) => (
        <Column 
          headline={headline} 
          key={headline} 
          storage={storage} 
          columnNumber={index}
          addCard={addCard}
        />
      ))}
    </ div>
  )
};

export default App;
