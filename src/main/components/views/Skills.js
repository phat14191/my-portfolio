import React from "react";
import classes from "./css/skills.css";

class Skills extends React.Component {
  constructor() {
    super();
    this.state =
      {isShowForm: true}
    this.toggleShowForm = this.toggleShowForm.bind(this);
  }

  toggleShowForm() {
    this.setState({isShowForm: !this.state.isShowForm})
  }

  render() {

      let project1 = 'this is my first project using express';
      if(this.state.isShowForm) {
        project1 = (
          <div>
            <div className={classes.container}>
              <a><img src="https://camo.githubusercontent.com/b0c9dc0e2f5bcd190403159a24d4a541e496e30a/68747470733a2f2f636f6c69676f2e696f2f696d616765732f657870726573732e737667"/></a>
            </div>
          </div>
        )
      }

    return (
      <div className={classes.container}>
        <div className={classes.picSkills}>
          <div className={classes.picskill}> </div>
        </div>
          <div className={classes.mySkills}>
            <a><img src="https://wmira.gallerycdn.vsassets.io/extensions/wmira/react-playground-vscode/0.0.11/1494599205180/Microsoft.VisualStudio.Services.Icons.Default"/></a>
            <a><img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"/></a>
            <a><img src="https://vignette.wikia.nocookie.net/dreadnought/images/f/fd/Js-logo.png/revision/latest?cb=20160509122720"/></a>
            <a><img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/></a>
            <a><img src="http://www.blackbirdsolutions.com.au/sites/default/files/styles/medium/public/blog/css3-logo.png?itok=r8kt8WZA"/></a>
            <a><img src="https://townhack.github.io/git-101/img/git-logo.png"/></a>
            <a><img src="https://www.techuz.com/wp-content/themes/techuz/images/nodejs-icon.png"/></a>
            <a><img src="https://broadwayinfosys.com/uploads/courses/mongodb.png"/></a>
            <a><img src="https://camo.githubusercontent.com/b0c9dc0e2f5bcd190403159a24d4a541e496e30a/68747470733a2f2f636f6c69676f2e696f2f696d616765732f657870726573732e737667"/></a>
            <a><img src="http://getbootstrap.com/assets/img/bootstrap-stack.png"/></a>
            <a><img src="http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif"/></a>
          </div>
          <h2>My Skills</h2>
          <div className={classes.textSkills}>
            <div className={classes.cardStyle}>
              <p className={classes.desr} onClick={this.toggleShowForm}>{this.state.isShowForm ? "Show Project 1" : "Take A Look On Other Project"}</p>
              {console.log(this.state.isShowForm)}
              {project1}
                {/* <div className={classes.container}>
                  <a onClick={this.toggleShowForm.bind(this)}><img src="https://camo.githubusercontent.com/b0c9dc0e2f5bcd190403159a24d4a541e496e30a/68747470733a2f2f636f6c69676f2e696f2f696d616765732f657870726573732e737667"/></a>
                </div> */}
              </div>
          </div>
        </div>
    )
  }
}

export default Skills;
