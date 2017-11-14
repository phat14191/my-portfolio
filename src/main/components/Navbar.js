import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav main-nav">
      <Link to = "/">About</Link>
      <Link to = "/contact">Contact</Link>
      <Link to = "/home">Home</Link>
      <Link to = "/portfolio">Portfolio</Link>
    </div>
  )
}

export default Navbar;
