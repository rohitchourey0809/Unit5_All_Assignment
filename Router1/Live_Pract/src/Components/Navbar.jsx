export const NAVBAR = () => {
  const nav = [
    { title: "HOME", to: "/" },
    { title: "ABOUT", to: "/about" },
    { title: "USERS", to: "/users" },
  ];

  return (
    <div>
      {nav.map((e, i) => (
        <a key={i} href={e.to} style={{ margin: "10px" }}>
          {e.title}
        </a>
      ))}
    </div>
  );
};
