import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import CampaignOverview from '../../components/CampaignOverview';
import UserMovements from '../../components/UserMovements';
import API from "../../utils/API";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
    }
  }

  componentDidMount() {
    this.loadTimeline()
  }

  loadTimeline = () => {
    // Load campaign
    API.findAllCampaigns()
      .then(res => {
        this.setState({
          campaigns: res.data
        }, () => {
          console.log(this.state);
        })
      })
      .catch(err => {
        console.log("error in page mount: " + err.response);
      })
  }

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
            {this.state.campaigns.length > 0 ? this.state.campaigns.map(campaign => (
              <CampaignOverview
                key={campaign.index}
                title={campaign.campaignName}
                summary={campaign.summary}
                url={campaign._id}
              />
            )) : <CampaignOverview
                title="Filler Title"
                summary="Filler Summary"
              />  
            }
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