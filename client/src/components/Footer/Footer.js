import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

const Footer = () => (
  <Grid fluid>
    <Col>  
      <Row>
        <h4 className="text-center">Vocafy</h4>
        <h6 className="text-center">Crafted in RVA</h6>
        <h6 className="text-center">&copy; 2018 Designed by
          <a href="https://github.com/JaredRoss14"> Jared</a>
        </h6>
      </Row>  
    </Col>  
  </Grid >
)

export default Footer;