import React, { useState, useReducer } from "react";

/* 
    action = {
        type: string;
        payload?: any;
    }
*/

// const reducer = (state, action) => state;

const counterInitialState = {
  count: 0,
};

export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";
export const COUNTER_INCREMENT_BY = "COUNTER_INCREMENT_BY";

const counterReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case COUNTER_INCREMENT_BY:
      return {
        ...state,
        count: state.count + action.payload,
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

  const decrement = () => {
    dispatch({
      type: COUNTER_DECREMENT,
    });
  };

  const incrementBy = () => {
    dispatch({
      type: COUNTER_INCREMENT_BY,
      payload: 5,
    });
  };

  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <button
        onClick={() => {
          incrementBy(5);
        }}
      >
        O
      </button>
    </div>
  );
};

export default Reducer;
