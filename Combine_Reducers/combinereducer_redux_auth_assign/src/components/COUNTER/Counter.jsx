/* eslint-disable react/style-prop-object */
import { Button } from "react-bootstrap";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../../Action/incdecaction";
import "./Counter.css";
export const Counter = () => {
  const myState = useSelector((state) => state.ChangerReducer);

  const dispatch = useDispatch();
  return (
  <>
    {/* // *<------------CounterDiv--------------------------------> */}
    

    <div className="counterdiv">
      <div className="mx-0 display-inline-block">
        <Button onClick={() => dispatch(incNumber(10))} variant="primary">
          Inc
        </Button>
        <p className="border:1px ">Count:{myState}</p>
        <Button onClick={() => dispatch(decNumber(10))} variant="success">
          Dec
        </Button>
      </div>
    </div>

    {/* // *<------------CounterDiv--------------------------------> */}
    {/* //?Counter Demo */}
    <div>
      <h2 className="head">Counter</h2>

        <div className='col-lg-4 col-md-6 mb-4 mb-lg-0'>
          <div className="d-flex mb-4" style="max-width: 300px">
            <button
              className="btn btn-primary px-3 me-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i className="fas fa-minus"></i>
            </button>

            <div className="form-outline">
              <input
                id="form1"
                min="0"
                name="quantity"
                value="1"
                type="number"
                className="form-control"
              />
              <label className="form-label" for="form1">
                Quantity
              </label>
            </div>

            <button
              className="btn btn-primary px-3 ms-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
  </>
  );
};
