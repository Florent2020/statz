import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const [open, toggleOpen] = useState(false);

  function toggle() {
    toggleOpen(!open);
  }

  const navigate = useNavigate();

  function logout() {
    toggleOpen(!open);
    navigate("/");
  }

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/">Hjem</NavLink>
        </li>
        <li
          className={`nav-link login-link ${open ? "closed" : ""}`}
          onClick={toggle}
        >
          <NavLink to="/login">Login</NavLink>
        </li>
        <div className={`dashboard__menu ${open ? "" : "closed"}`}>
          <li className="nav-link">
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li
            className={`nav-link login-link ${open ? "" : "closed"}`}
            onClick={logout}
          >
            <NavLink to="/">Log Out</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
