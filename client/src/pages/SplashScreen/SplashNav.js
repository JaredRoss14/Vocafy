import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SplashNav extends Component {
  render() {
    return (
      <Navbar fluid={true} inverse default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><i className="fas fa-bullhorn"></i> Vocafy</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="What Are You Passionate About?" />
          </FormGroup>{' '}
          <Button type="submit">Search</Button>
        </Navbar.Form>

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
      </Navbar>
    );
  }
}

export default SplashNav;