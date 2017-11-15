import React from 'react';
import Navbar from './Navbar';
import About from './views/About';
import Footer from './views/Footer';
import Skills from './views/Skills';
import Portfolio from './views/Portfolio';
import classes from '../css/index.css'

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className ={classes.App}>
        <Navbar />
        <Switch>
          <Route  exact path="/" component={About}/>
          {/* <Route path="/contact" component = {Contact}/> */}
          <Route path="/skills" component = {Skills}/>
          <Route path="/portfolio" component = {Portfolio}/>
        </Switch>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;
