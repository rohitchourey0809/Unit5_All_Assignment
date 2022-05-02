import { useEffect, useState } from "react-redux";

import React from "react";

export const Employelist = () => {
  const { emoployee, setemployee } = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata(req, res, next) {
    const data = await fetch("http://localhost:8080/employee").then((d) =>
      d.json()
    );
    setemployee(data);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
      }}
    >
      (employee.map((e) ={" "}
      {
        <>
          <div key={e.id}>
            <img src={e.Image} />
          </div>
          <div>{e.employee_name}</div>
        </>
      }
      ))
    </div>
  );
};
