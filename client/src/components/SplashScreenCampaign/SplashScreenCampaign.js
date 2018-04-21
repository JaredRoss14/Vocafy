import React from 'react';
import { Col } from 'react-bootstrap';
import './SplashScreenCampaign.css';


const SplashScreenCampaign = (props) => (
  <Col md={4} xs={12} className="splashScreenCampaign">
    <h3 className="text-center">{props.title}</h3>
    <p className="text-center">{props.summary} <a href={`/movement/${props.url}`}>Learn More...</a></p>
  </Col>
)

export default SplashScreenCampaign;