import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import API from "../../utils/API";
import './SplashScreen.css';
import SplashScreenCampaign from "../../components/SplashScreenCampaign";


export default class SplashScreen extends Component {

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
      <Grid fluid>
        <Row className="show-grid text-center hero">
          <Col md={8} mdOffset={2} className="heroHeader">
            <h1>Giving A Voice To The People</h1>
            <h3>{this.state.campaigns.length} Campaigns And Counting</h3>
            <Link to="/signup"><Button className="heroButton">Create Campaign</Button></Link>
          </Col>
        </Row>
        <Row className="show-grid text-center row-two">
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
        <Row>
          {this.state.campaigns.length > 0 ? this.state.campaigns.splice(0,3).map(campaign => (
            <SplashScreenCampaign
              key={campaign.index}
              title={campaign.campaignName}
              summary={campaign.summary}
              url={campaign._id}
            />
          )) : <SplashScreenCampaign
              title="Filler Title"
              summary="Filler Summary"
            />
          }
        </Row>
      </Grid>
    )
  }
}
