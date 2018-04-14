import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './SplashScreen.css';

export default class SplashScreen extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="show-grid text-center hero">
          <Col md={8} mdOffset={2} className="heroHeader">
            <h1>Giving A Voice To The People</h1>
            <h3>2000 Campaigns and Counting</h3>
            <Link to="/"><Button className="heroButton">Create Campaign</Button></Link>
          </Col>
        </Row>
        <Row fluid={true} className="show-grid text-center row-two">
          <Col mdOffset={1} md={3} xs={12}>
              <Image src={require("../../images/voice-announcer.jpg")} circle className="row-two-image"/>
            <h2>Vocalize.</h2>
          </Col>
          <Col md={4} xs={12}>
            <Image src={require("../../images/team.jpg")} circle className="row-two-image"/>
            <h2>Organize.</h2>
          </Col>
          <Col md={3} xs={12}>
            <Image src={require("../../images/worldwide.jpg")} circle className="row-two-image"/>
            <h2>Mobilize.</h2>
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
    )
  }
}
