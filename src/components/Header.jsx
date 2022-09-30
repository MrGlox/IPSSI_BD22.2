import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div id="sidebar">
      <h1>
        <NavLink
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/"
        >
          App
        </NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : undefined
              }
              to="/todo"
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : undefined
              }
              to="/apparts"
            >
              Apparts
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : undefined
              }
              to="/clock"
            >
              Clock
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : undefined
              }
              to="/fetch"
            >
              Fetch
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
