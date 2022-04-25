import React from "react";

export const Signin = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <form class="d-flex">
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
  );
};
