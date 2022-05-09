/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import Skeleton from "react-loading-skeleton";
import React, { useState, useEffect } from "react";

export const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);

  let componentMounted = true;

  const getProducts = async () => {
    try {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log("filter", filter);
      }
      return () => {
        componentMounted = false;
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <Skeleton height={350} />.
      </>
    );
  };

  const filterProduct = (cartItem) => {
    // const [filter, setfilter] = useState(data);
    console.log(cartItem, "cardiem");
    console.log(data, "data");

    const Updatedlist = data.filter((currdata) => {
      console.log(currdata, "currdata");
      return currdata.category === cartItem;
    });
    console.log("x");
    console.log(Updatedlist, "Updatedlist");
    var z = setfilter(Updatedlist);
    console.log("z", filter);
  };

  const ShowProducts = (products) => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            onClick={() => setfilter(data)}
            className="btn btn-outline-dark me-2"
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="btn btn-outline-dark me-2"
          >
            Men Clothes
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="btn btn-outline-dark me-2"
          >
            Women Clothes
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="btn btn-outline-dark me-2"
          >
            Jewwellery
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="btn btn-outline-dark me-2"
          >
            Electronoics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4 " key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    height="200px"
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0 ">
                      {product.title.substring(0, 12)}"
                    </h5>
                    <p class="card-text fw-bold">"PRICE" ${product.price}</p>
                    <a href="#" className="btn btn-outline-dark">
                      BuyNow
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-border text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};
