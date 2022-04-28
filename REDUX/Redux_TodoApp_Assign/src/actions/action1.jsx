// import React from "react";

export const Addtodo = () => {
  return {
    type: "TODO_ADD",
    payload: {
      id: new Data().getTime().toString(),
      data: data,
    },
  };
};

export const Deletetodo = () => {
  return {
    type: "TODO_DELETE",
  };
};

export const Removetodo = () => {
  return {
    type: "TODO_REMOVE",
  };
};
