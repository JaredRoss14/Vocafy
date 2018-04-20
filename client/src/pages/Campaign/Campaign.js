import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import CampaignForm from '../../components/CampaignForm';

class Campaign extends Component {
  render() {
    return (
      <Grid className="campaign">
        <Row>
          <Col md={8} mdOffset={2}>
            <CampaignForm />  
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Campaign;