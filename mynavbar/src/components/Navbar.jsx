import React from "react";

export const Navbar = () => {
  return (
    <>
      rohitPractice
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div className="container">
          {/* <!-- Brand --> */}
          <div>
            {" "}
            <a class="navbar-brand" href="#">
              LogoBakery
            </a>
          </div>
          {/* <!-- Links --> */}
          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Abouts
                </a>
              </li>

              {/* <!-- Dropdown --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Project
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Link 1
                  </a>
                  <a class="dropdown-item" href="#">
                    Link 2
                  </a>
                  <a class="dropdown-item" href="#">
                    Link 3
                  </a>
                </div>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="btn btn-outline-secondary border-5em bg-green border">
            <button>Contact</button>
          </div>
        </div>
      </nav>
    </>
  );
};
