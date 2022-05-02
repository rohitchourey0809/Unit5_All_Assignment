import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homepage">
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      Welcome to Laptop service center. Please login to continue
    </div>
  );
};
