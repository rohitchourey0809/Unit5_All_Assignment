/* eslint-disable no-unused-vars */

// import React from "react";

// import {increment,decrement} from '../actions/counteraction'



const initialState = 0;


export const counterreducer = (state = initialState,action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};
