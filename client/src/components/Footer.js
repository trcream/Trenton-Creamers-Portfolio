import React from 'react';
import { Row, Col } from 'react-bootstrap';

const styles = {
    footerStyle:{
        padding: 25,
        textAlign: "center",
        fontSize: 15
    }
}

function Footer() {
  return (
    <Row style={styles.footerStyle}>
      <Col> Copyright @ Trenton Creamer </Col>
    </Row>
  );
}
export default Footer;
