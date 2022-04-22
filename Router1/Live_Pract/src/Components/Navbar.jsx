import { Link } from "react-router-dom";
//changes href == >  to
export const NAVBAR = () => {
  const nav = [
    { title: "HOME", to: "/" },
    { title: "ABOUT", to: "/about" },
    { title: "USERS", to: "/users" },
  ];

  return (
    <div
      className="navbardiv"
      // style = "border: 1px solid red;"
    >
      {nav.map((e, i) => (
        <Link key={i} to={e.to} style={{ margin: "10px" }}>
          {e.title}
        </Link>
      ))}
    </div>
  );
};
