import React, { useReducer } from 'react';
import Column from './Column.jsx';
import { reducer, initialState } from './reducer.js';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCard = index => {
    const text = window.prompt(`enter text for new card in column ${index + 1}`);
    dispatch({type: 'addCard', index, text});
  };

  const columns = [
    <Column index={0} cards={state[0]} dispatch={dispatch} addCard={addCard}/>,
    <Column index={1} cards={state[1]} dispatch={dispatch} addCard={addCard}/>,
    <Column index={2} cards={state[2]} dispatch={dispatch} addCard={addCard}/>,
    <Column index={3} cards={state[3]} dispatch={dispatch} addCard={addCard}/>
  ];

  return (
    <div className="row">
      {columns}
    </div>
  );
};

export default App;
