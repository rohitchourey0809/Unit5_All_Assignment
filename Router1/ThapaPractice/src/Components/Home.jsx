import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>This is our Home Page</h1>
      <Link to="about"></Link>
      <Link to="contact"></Link>
    </div>
  );
};
