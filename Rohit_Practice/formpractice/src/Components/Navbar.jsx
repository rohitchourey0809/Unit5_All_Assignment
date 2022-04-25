import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

export const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    // <div classname="navbardiv">
    <>
      <nav className="navbar navbar-dark bg-dark">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/signout">
              <button className="btn btn-dark">Signup</button>
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <button type="button" className="btn btn-success">
                Signin
              </button>
            </Link>
          </li>
          <li>
            {/* <Link> */}
            <button type="button" class="btn btn-info">
              Add To Card
            </button>
            {/* </Link> */}
          </li>
        </ul>
      </nav>
      <div className="$teal-900">CartValue{cart}</div>
    </>
  );
};
