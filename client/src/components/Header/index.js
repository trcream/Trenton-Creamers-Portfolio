import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css"

const styles = {
  headerStyle: {
    background: "black",
  },
  headingStyle: {
    fontSize: 30,
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <Jumbotron>
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>
          Welcome to Trenton Creamer's Portfolio Page
        </h1>
      </header>
    </Jumbotron>
  );
}

export default Header;
