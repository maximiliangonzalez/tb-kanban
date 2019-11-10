import React from 'react';
import Card from './Card.jsx';

export const initialState = [
  [
    <Card index={0} text="default"/>,
    <Card index={1} text="default"/>
  ],
  [
    <Card index={0} text="default"/>,
    <Card index={1} text="default"/>
  ],
  [
    <Card index={0} text="default"/>,
    <Card index={1} text="default"/>
  ],
  [
    <Card index={0} text="default"/>,
    <Card index={1} text="default"/>
  ]
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'addCard':
      const newState = [...state];
      newState[action.index] = [...state[action.index], <Card text={action.text} index={state[action.index].length}/>];
      return newState;
    default:
      return state;
  }
};