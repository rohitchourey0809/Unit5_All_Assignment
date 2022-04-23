import React from "react";
import { Todoitems } from "./Todoitems";

export const Todos = (props) => {
  return (
    <div>
      <h3>Todolist</h3>
      {props.todos.length === 0
        ? "No Todos display"
        : props.todos.map((todo) => {
            return <Todoitems todo={todo} onDelete={props.onDelete} />;
          })}
    </div>
  );
};
