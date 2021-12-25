import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Play</Link>
      <Link to="/manage">Manage Cards</Link>
    </div>
  );
}
export default Header;
