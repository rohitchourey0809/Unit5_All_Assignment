
import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from "../actions/counteraction";


export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>CounterComponent</h2>

        <div className>
          <button
            onClick={() => dispatch(increment(`5`))}
            type="button"
            class="btn btn-dark"
          >
            Increment
          </button>
          <h2>Counter : {counter} </h2>
          <button
            onClick={() => dispatch(decrement(`5`))}
            type="button"
            class="btn btn-dark"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};
