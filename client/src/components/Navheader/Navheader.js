import React from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navheader.css';

const Navheader = (props) => (
  <div>
  <Navbar default collapseOnSelect fixedTop>
    {props.loggedIn ?
      <Row>
        <Col md={6}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">V</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Form>
            <FormGroup className="form-submit-log">
              <FormControl className="form-text-log" type="text" placeholder="Search Movements" />
            </FormGroup>
            <Button type="submit" bsStyle="link" className="form-button-log"><i className="fas fa-search"></i></Button>
          </Navbar.Form>
        </Col>
        <Col md={3} mdOffset={3}>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                <i className="fas fa-home"></i>
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/" to="/">
                <i className="far fa-user"></i>
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/" to="/">
                <i className="far fa-envelope"></i>
              </NavItem>
              <NavItem eventKey={4} componentClass={Link} href="/startmovement" to="/startmovement">
                <i className="far fa-edit"></i>
              </NavItem>
              <NavItem eventKey={5} componentClass={Link} onClick={props.logOut} href="/" to="/">
                <i className="fas fa-sign-out-alt"></i>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    :  
      <Row>
        <Col md={2}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Vocafy</Link>
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
    }  
    </Navbar>  
  </div>  
);

export default Navheader;