/* eslint-disable no-undef */
// import React from "react";

export const increment = (incrementcount) => {
  return {
    type: "INCREMENT",
    payload: incrementcount,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
    // payload: decrementcount,
  };
};
