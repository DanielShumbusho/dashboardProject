import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "18px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
      <Link to="/users" style={{ color: "white" }}>
        Users
      </Link>
    </nav>
  );
}

export default Navbar;
