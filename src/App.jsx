import { Outlet, Link, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Quck-start project</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "blue",
            };
          }}
          to="/"
        >
          home
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "blue",
            };
          }}
          to="/login"
        >
          login
        </NavLink>{" "}
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "blue",
            };
          }}
          to="/link2"
        >
          link2
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
