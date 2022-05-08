/* eslint-disable no-undef */
import React, { useRef, useState } from "react";

export const Useref = () => {
  //? its like usestate onlhy and its preserve  the  value.No render
  const LuckyName = useRef(null);
  const [show, setshow] = useState(false);
  const SubmitForm = (e) => {
    e.preventDefault();
    const name = LuckyName.current.value;
    name === "" ? alert("Please enter name") : setshow(true);
  };

  return (
    <>
      <div>
        <form action=" " onSubmit={SubmitForm} className="form-Vertical">
          <label htmlFor="LuckyName">Enter Your Lucky Name</label>
          <br />
          <input ref={LuckyName} type="text" />
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>

      <div className="container -fluid mt-5">Data</div>
      <p>{show ? `Your LUckNamee ${LuckyName.current.value}` : ""}</p>
    </>
  );
};
