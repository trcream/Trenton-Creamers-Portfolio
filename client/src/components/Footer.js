import React from 'react';
import { Row } from 'react-bootstrap';

const styles = {
    footerStyle:{
        padding: 25,
        textAlign: "center"
    }
}

function Footer() {
  return <Row style = {styles.footerStyle}>Copyright </Row>;
}
export default Footer;
