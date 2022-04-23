import React from "react";

export const Footer = () => {
  let footerstyle = {
    // position: "absolute",
    top: "100vh",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light" style={footerstyle}>
      <h2>Footer</h2>

      <p className="text-center">Copy right &copy ; MyTodoList.com</p>
    </footer>
  );
};
