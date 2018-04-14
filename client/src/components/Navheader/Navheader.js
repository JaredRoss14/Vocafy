import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navheader.css';

class Navheader extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect fixedTop>
        <Row>
          <Col md={2}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><i className="fas fa-bullhorn"></i> Vocafy</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
          </Col>  
          <Col md={4} mdOffset={2}>
          <Navbar.Form className="center-form">
            <FormGroup className="form-submit">    
              <FormControl className="form-text" type="text" placeholder="What Are You Passionate About?" />
            </FormGroup>
              <Button type="submit" bsStyle="link" className="form-button"><i className="fas fa-search"></i></Button>  
          </Navbar.Form>
          </Col>  
          <Col md={2} mdOffset={2}>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href="/signup" to="/signup">
                Get Started
            </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/login" to="/login">
                Log In
            </NavItem>
            </Nav>
            </Navbar.Collapse>
          </Col>  
        </Row>  
      </Navbar>
    );
  }
}

export default Navheader;