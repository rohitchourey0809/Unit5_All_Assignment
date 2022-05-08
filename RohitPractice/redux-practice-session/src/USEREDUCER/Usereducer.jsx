import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  console.log(state, action);
  return state;
};

export const Usereducer = () => {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div classNameName="container">
      <div className="d-flex flex-wrap">
        <div className="row">
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <p className="col-sm border-outline">{state}</p>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
