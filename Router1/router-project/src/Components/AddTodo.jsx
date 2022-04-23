import React, { useState } from "react";

export default function AddTodo(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Tile or desc Must be filled");
    }
    props.addtodo(title, desc);
  };
  return (
    <div className="Container">
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Add Title
          </label>
          <input
            onChange={(e) => {
              settitle(e.target.value);
            }}
            type="text"
            value={title}
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Todo Description
          </label>
          <input
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            type="text"
            value={desc}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
