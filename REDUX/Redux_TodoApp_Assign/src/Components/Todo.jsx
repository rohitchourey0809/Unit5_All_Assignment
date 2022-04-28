import { useDispatch } from "react-redux";
import { Addtodo, Deletetodo, Removetodo } from "../actions/action1";
import React, { useState } from "react";
import "./Todo.css";

// <-------------------------------------------------------->
export const Todo = () => {
  const [inputdata, setInputData] = useState("");

  //?---------------->
  const dispatch = useDispatch();
  return (
    <div className="TodoContainer">
      <div className="main-div">
        <div className="child-div">
          <figure>
            {" "}
            <figcaption>Add Your List Her</figcaption>
          </figure>
          <div className="additems">
            <input
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
              type="text"
              placeholder="Enter item"
            />
            <button class="input-group-addon">
              ADD ITEM
              <i
                onClick={() => dispatch(Addtodo(inputdata))}
                class="bi bi-align-middle"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
