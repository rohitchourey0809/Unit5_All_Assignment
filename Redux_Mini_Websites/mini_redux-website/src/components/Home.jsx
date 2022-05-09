import React from "react";
import { Product } from "./Product";

export const Home = () => {
  return (
    <>
      <div className="hero">
        <div class="card bg-dark text-white">
          <img
            src="https://th.bing.com/th/id/OIP.0lQ8QwcPwduICLcCqlQd1wHaDr?pid=ImgDetrs=1"
            class="card-img"
            alt="Background"
            height="550px"
          />
          <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 class="card-title display-3 fw-bolder mb-0">New Session Arrival</h5>
              <p class="card-tex lead fs-2">
               Checkout All the Trends
              </p>
            </div>
          </div>
        </div>
        <div className="productcontainer">
            <Product/>
        </div>
      </div>
    </>
  );
};
