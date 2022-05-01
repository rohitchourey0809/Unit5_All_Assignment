const ADD_COUNT = "ADD_COUNT";
const ADD_TODO = "ADD_TODO";

const addtodo = (title) => {
  return {
    type: ADD_TODO,

    payload: {
      title: title,
      status: false,
    },
  };
};
