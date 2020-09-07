import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const styles = {
  navStyle: {
    background: 'teal',
    backgroundColor:'teal'

  },
};

function TopNav(){
    return (
      <Navbar bg='light' expand='lg' style={styles.navStyle}>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};
export default TopNav