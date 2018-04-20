import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
// import axios from 'axios';
import './CampaignOverview.css';

const CampaignOverview = (props) => (
  <Media className="campaignOverview">
    <Media.Left>
      <img src="http://via.placeholder.com/150x150" alt=""/>
    </Media.Left>
    <Media.Body>
      <Media.Heading>{props.title}</Media.Heading>
      <p>{props.summary}</p>
    </Media.Body>
  </Media>
)

export default CampaignOverview;