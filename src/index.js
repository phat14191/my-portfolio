import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import classes from './main/css/index.css';
import App from './main/components/App';

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById("root")
);
