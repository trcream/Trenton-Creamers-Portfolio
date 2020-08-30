/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav"

class App extends Component {
  render() {
    return (
     <div>
       <Header/>
       <TopNav/>
     </div>
    );
  }
}

export default App;
