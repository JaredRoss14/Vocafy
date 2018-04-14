import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavheaderLog.css';

class NavheaderLog extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect fixedTop>
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
          <Col md={3} mdOffset={1}>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/signup" to="/home">
                  <i class="fas fa-home"></i>
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/signup" to="/home">
                  <i class="far fa-user"></i>
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/signup" to="/home">
                  <i class="far fa-envelope"></i>
                </NavItem>
                <NavItem eventKey={4} componentClass={Link} href="/signup" to="/home">
                  <i class="far fa-edit"></i>
                </NavItem>
                <NavItem eventKey={5} componentClass={Link} href="/signup" to="/home">
                  <i class="fas fa-sign-out-alt"></i>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

export default NavheaderLog;