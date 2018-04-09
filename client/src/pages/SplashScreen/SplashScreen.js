import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './SplashScreen.css';
import SplashNav from './SplashNav.js';

export default class SplashScreen extends Component {
  render() {
    return (
      <div>
        <SplashNav />
        <Grid>
          <Row className="show-grid text-center">
            <Col md={4} mdOffset={1}>
              <p>Now we can begin working on lots of happy little things. We'll put some happy little leaves here and there. If you've been in Alaska less than a year you're a Cheechako. We don't have to be committed. We are just playing here. As trees get older they lose their chlorophyll. I sincerely wish for you every possible joy life could bring.</p>
              <Button bsStyle="warning">Create Campaign</Button>
            </Col>
            <Col md={6} mdOffset={1}>
              <h3>[INSERT number] movements started</h3>
            </Col>
          </Row>
          <Row className="show-grid text-center">
            <Col md={4} xs={12}>
              <span className="border border-dark">
                <Image src={require("../../images/voice-announcer.png")} circle />
              </span>
              <h4>Vocalize</h4>
            </Col>
            <Col md={4} xs={12}>
              <span className="border border-dark">
                <Image src={require("../../images/team.png")} circle />
              </span>  
              <h4>Organize</h4>
            </Col>
            <Col md={4} xs={12}>
              <span className="border border-dark">
                <Image src={require("../../images/worldwide.png")} circle />
              </span>   
              <h3>Mobilize</h3>
            </Col>
          </Row>
          <Row className="show-grid text-center">
            <Col md={12}>
            <h2>Popular Campaigns</h2>  
            </Col>  
          </Row>  
          <Row className="show-grid text-center">
            <Col md={4} xs={12}>
              <h4>Campaign 1</h4>
              <p>Explanation 1</p>
            </Col>
            <Col md={4} xs={12}>
              <h4>Campaign 2</h4>
              <p>Explanation 2</p>
            </Col>
            <Col md={4} xs={12}>
              <h4>Campaign 3</h4>
              <p>Explanation 3</p>
            </Col>
          </Row> 
        </Grid>
      </div> 
    )
  }
}
