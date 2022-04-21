import { useState } from "react";

export const NAVBAR = () => {
  const [logdata, setlogdata] = useState({
    username: "",
    age: "",
    address: "",
  });

  const handlechange = (e) => {
    //*const id = e.target.id;
    //*const value = e.target.value;
    //?destructuiring input data
    const { id, value } = e.target;

    setlogdata({
      ...logdata,
      [id]: value,
    });

    console.log(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logdata);

    const payload = {
      username: logdata.username,
      age: logdata.age,
      address: logdata.address,
    };
    console.log("payload", payload);

    fetch("http://localhost:8080/LOGINDATA", {
      method: "POST",
      //
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  return (
    <div className="navdiv">
      <forms onSubmit={handleSubmit}>
        <input
          onChange={handlechange}
          // value={formdata.username}
          id="username"
          type="text"
          placeholder="Enter Username"
        />

        <br />
        <input
          onChange={handlechange}
          // value={formdata.age}

          id="age"
          type="number"
          placeholder="Enter Age"
        />

        <br />
        <input
          onChange={handlechange}
          // value={formdata.age}
          id="address"
          type="text"
          placeholder="Enter Address"
        />

        {/* <button
          onClick={() => {
            logindata;
          }}
          className="login"
        >
          Login
        </button> */}
        <br />
        <input onChange={handlechange} type="submit" value="signupdata" />
      </forms>
      {/* <button className="logout">Logout</button> */}

      {/* <div className="logindatadiv"></div> */}
    </div>
  );
};
