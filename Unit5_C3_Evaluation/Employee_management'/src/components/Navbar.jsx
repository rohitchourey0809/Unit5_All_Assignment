import { Link } from "react-router-dom";
// import "../App.css";
export const Navbar = () => {
  return (
    <div className="navbar" >
      <Link className="nav-home" to="/">
        <button className="btn btn-dark"> Home</button>
      </Link>
      <Link className="nav-list" to="/employees">
        <button className="btn btn-info"> Employee List</button>
      </Link>
      <Link className="nav-admin" to="/admin">
        <button className="btn btn-info"> Admin</button>
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-logout" to="/logout">
        <button className="btn btn-info"> Logout</button>
      </Link>

      <Link className="nav-login" to="/login">
        <button className="btn btn-info"> Login</button>
      </Link>
    </div>
  );
};
