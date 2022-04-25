import React from "react";

export const Signout = () => {
  return (
    <div>
      {" "}
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="text"
              placeholder="Enter User Name"
              aria-label="Search"
            />
            <input
              class="form-control me-2"
              type="email"
              placeholder="Enter Mail"
              aria-label="Search"
            />
            <input
              class="form-control me-2"
              type="password"
              placeholder="Enter Password"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              LoginSubMit
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
