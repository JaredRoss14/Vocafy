import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
// import axios from 'axios';
import './CampaignOverview.css';

class CampaignOverview extends Component {

  render() {
    return (
      <Media className="campaignOverview">
        <Media.Left>
          <img src="http://via.placeholder.com/150x150" alt=""/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Campaign Header</Media.Heading>
          <p>
            Campaign Overview: Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
        </p>
        </Media.Body>
      </Media>
    )
  }
}

export default CampaignOverview;