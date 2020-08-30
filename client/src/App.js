/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from './pages/About'
import Contact from "./pages/Contact"


function App() {
  //render() 
    return (
      <Router>
        <div>
          <Header />
          <TopNav />
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  
}

export default App;
