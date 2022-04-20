import { Outlet, Link, NavLink } from "react-router-dom";
import "./styles/App.css";
export default function App() {
  return (
    <div>
    <header>
      <nav>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="cat">Generate</NavLink>
        <NavLink className="nav-button" to="login">Login</NavLink>
      </nav>
    </header>
    <Outlet />
  </div>
  );
}
