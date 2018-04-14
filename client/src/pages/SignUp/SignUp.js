import React, { Component } from 'react';
import './SignUp.css';
import SignUpForm from '../../components/SignUpForm'
import { Col, Row, Grid } from 'react-bootstrap';

export default class SignUp extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={4} mdOffset={4}>
            <SignUpForm />
          </Col>  
        </Row>  
      </Grid>
    )
  }
}