import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './CampaignOverview.css';

const CampaignOverview = (props) => (
  <Media className="campaignOverview">
    <Media.Left>
      <img src="http://via.placeholder.com/150x150" alt=""/>
    </Media.Left>
    <Media.Body>
      <Media.Heading>{props.title}</Media.Heading>
      <p>{props.summary} <a href={`/movement/${props.url}`}>Learn More...</a></p>
    </Media.Body>
  </Media>
)

export default CampaignOverview;