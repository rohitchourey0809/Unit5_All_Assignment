//a

///Action types
const ADD_COUNT = "ADD_COUNT";

//Action Creaters
export const addcount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};
addcount();
export default ADD_COUNT;

