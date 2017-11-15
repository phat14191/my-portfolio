import React from "react";
import { Link } from "react-router-dom";
import classes from "../css/index.css"

function Navbar(props) {
  return (
    <div className={classes.nav}>
      <Link to="/">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/portfolio">Portfolio</Link>
    </div>
  )
}

export default Navbar;
