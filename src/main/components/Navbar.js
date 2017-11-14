import React from "react";
import { Link } from "react-router-dom";
import classes from "../css/index.css"

function Navbar(props) {
  return (
    <div className={classes.mainNav}>
      <Link to = "/">About</Link>
      <Link to = "/contact">Contact</Link>
      <Link to = "/home">Home</Link>
      <Link to = "/portfolio">Portfolio</Link>
    </div>
  )
}

export default Navbar;
