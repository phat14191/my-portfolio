import React from "react";
import classes from "./css/about.css"
import Footer from "./Footer";

function About() {
  return (
    <div className={classes.greeting}>
      <div className={classes.gifCell}>
      <img className={classes.gif} src="https://i.imgur.com/FTlPKVt.gif"/>
      </div>
      <p className={classes.intro}>Hello! I am Phat Nguyen, a Full Stack Web Developer with a passion for creating things, solving problems, and always finding something new to learn.</p>
      <Footer />
    </div>

  )
}

export default About;
