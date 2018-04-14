import React, { Component } from "react";
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CampaignOverview from '../../components/CampaignOverview';
import UserMovements from '../../components/UserMovements';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} className="text-center">
          <h3>Recent Movements</h3>  
          </Col>
          <Col md={4}>
          <h4>My Movements</h4>    
          </Col>  
        </Row>
        <Row>
          <Col md={8}>
            <CampaignOverview />
          </Col>  
          <Col md={4}>
            <UserMovements />  
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home;