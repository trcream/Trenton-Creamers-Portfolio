/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./App.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from './pages/About';
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer"



function App() {
  //render() 
    return (
      <Router>
   
        <div>
          <TopNav />
          <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer/>
        </div>
        
      </Router>
    );
  
}

export default App;
