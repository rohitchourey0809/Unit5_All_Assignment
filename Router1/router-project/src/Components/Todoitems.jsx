import React from "react";

export const Todoitems = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>Todo Works</h4>
      <h3 className="text-center my-3">{todo.title}</h3>
      <p>{todo.desc}</p>
      <button
        onClick={() => {
          onDelete(todo);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};
