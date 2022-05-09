/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav clasName="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div clasName="container">
          <a clasName="navbar-brand fw-bold fs-4" href="#">
            Navbar
          </a>
          <button
            clasName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span clasName="navbar-toggler-icon"></span>
          </button>
          <div clasName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul clasName="navbar-nav mx-auto mb-2 mb-lg-0">
              <li clasName="nav-item">
                <a clasName="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li clasName="nav-item">
                <a clasName="nav-link" href="#">
                  Product
                </a>
              </li>
              <li clasName="nav-item">
                <a clasName="nav-link" href="#">
                  About
                </a>
              </li>
              <li clasName="nav-item">
                <a clasName="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <button className="btn">
                <a href="" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>Login
                </a>
                <a href="" className="btn btn-outline-dark ms-3">
                  <i className="fa fa-user-plus me-1"></i>Register
                </a>
                <a href="" className="btn btn-outline-dark ms-3">
                  <i className="fa fa-shopping-cart me-1"></i>Crat (0)
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
