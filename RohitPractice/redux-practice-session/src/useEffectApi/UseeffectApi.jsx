import React, { useEffect, useState } from "react";
import { Apilist } from "./compo/Apilist";
import { Loading } from "./Loading";


export const UseeffectApi = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  const getUsers = async () => {
    try {
        setloading(false)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      console.log(response, "response");
      setusers(await response.json());
      //   console.log("result", result);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Apilist users = {users} />
    </>
  );
};
