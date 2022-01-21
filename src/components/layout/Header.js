import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">statz</Link>
      </div>
    </header>
  );
}

export default Header;
