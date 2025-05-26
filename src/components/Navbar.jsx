import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="grid grid-cols-20 grid-rows-1 h-[10vh]">
      <div className="row-span-1 col-span-20">
        <nav style={{ padding: "9px", background: "#333", color: "#fff" }}>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/users" style={{ color: "white" }}>
            Users
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
