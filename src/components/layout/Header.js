import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../image/logo.png";

function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={Logo} alt="statz" className="logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
