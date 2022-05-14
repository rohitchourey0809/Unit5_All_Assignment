/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */

export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num
  
  };
};

export const decNumber = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
