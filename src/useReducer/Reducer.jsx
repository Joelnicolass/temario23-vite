import React, { useState, useReducer } from "react";

/* 
    action = {
        type: string;
        payload?: any;
    }
*/

// const reducer = (state, action) => state;

export const counterInitialState = {
  count: 0,
};

export const COUNTER_INCREMENT = "COUNTER_INCREMENT";

export const counterReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const increment = () => {
    dispatch({
      type: COUNTER_INCREMENT,
    });
  };

  const decrement = () => {};

  const incrementBy = () => {};

  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Reducer;
