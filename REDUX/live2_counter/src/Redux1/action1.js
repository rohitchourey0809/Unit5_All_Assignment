import { uuid } from "uuid";

export const addtodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      title: data,
      date: date,
      id: uuid,
    },
  };
};

export const deletetodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: {
      id: id,
    },
  };
};
