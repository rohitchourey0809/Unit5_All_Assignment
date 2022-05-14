/* eslint-disable no-unused-vars */
//For Add Item TO Cart

import React from "react";

export const addCart = (product) => {
  return {
    type: "ADDCART",
    payload: product,
  };

};

export const delCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
