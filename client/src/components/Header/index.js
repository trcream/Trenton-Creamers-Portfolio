import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css"

const styles = {
  headerStyle: {
    backgroundImage:
      'url(' +
      'https://cdn.pixabay.com/photo/2015/08/27/09/22/banner-909710_1280.jpg' +
      ')',
  },
  headingStyle: {
    fontSize: 30,
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <Jumbotron style={styles.headerStyle}>
      <header >
        
      </header>
    </Jumbotron>
  );
}

export default Header;
