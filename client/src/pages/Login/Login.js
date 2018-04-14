import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import { Grid, Row, Col } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <Grid className="login">
        <Row>
          <Col md={8} className="left-login">
            <h2 className="text-center">Start The Conversation</h2>
          </Col>  
          <Col md={4}>
            <LoginForm userLoggedIn={this.props.userLoggedIn} />
          </Col>
        </Row>      
      </Grid>
    )
  }
}

export default Login;