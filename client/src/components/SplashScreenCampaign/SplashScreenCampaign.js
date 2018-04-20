import React from 'react';
import { Col } from 'react-bootstrap';
import './SplashScreenCampaign.css';


const SplashScreenCampaign = (props) => (
  <Col md={4} xs={12} className="splashScreenCampaign">
    <h3>{props.name}</h3>
    <p>{props.summary}</p>
  </Col>
)

export default SplashScreenCampaign;