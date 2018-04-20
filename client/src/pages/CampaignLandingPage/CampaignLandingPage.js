import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import ChangeActivatorDisplay from "../../components/ChangeActivatorDisplay";
import { encode } from "punycode";

class CampaignLandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdDate: "",
      author: "",
      campaignName: "",
      summary: "",
      overview: "",
      changeActivators: [],
      socialMedia: {
        twitter: "",
        facebook: "",
        instagram: "",
      },
      campaignTweets: {
        supports: "",
        opposes: "",
        undecided: "",
        unknown: "",
      }
    }
  }

  componentDidMount() {
    this.loadCampaign()
  }

  renderUriTweet(tweet) {
    let uri = encodeURI(tweet);
    return uri;
  }

  loadCampaign() {
    // Load campaign
    API.findCampaign(this.props.match.params.id)
      .then(res => {
        const campaign = res.data;
        const changeActivators = res.data.changeActivators
        this.setState({
          createdDate: campaign.createdDate,
          author: campaign.author,
          campaignName: campaign.campaignName,
          summary: campaign.summary,
          overview: campaign.overview,
          changeActivators,
          socialMedia: {
            twitter: campaign.socialMedia.twitterUrl,
            facebook: campaign.socialMedia.facebookUrl,
            instagram: campaign.socialMedia.instagramUrl,
          },
          campaignTweets: {
            supports: this.renderUriTweet(campaign.campaignTweets.supports),
            opposes: this.renderUriTweet(campaign.campaignTweets.opposes),
            undecided: this.renderUriTweet(campaign.campaignTweets.undecided),
            unknown: this.renderUriTweet(campaign.campaignTweets.unknown),
          }
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
      <Grid className="campaignLandingPage">
        <Row>
          <Col md={12}>
            <h1 className="text-center">{this.state.campaignName}</h1> 
            <a href={this.state.socialMedia.facebook}><i className="fab fa-facebook-f"></i></a>
            <a href={this.state.socialMedia.instagram}><i className="fab fa-instagram"></i></a>
            <a href={this.state.socialMedia.twitter}><i className="fab fa-twitter"></i></a>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h4>Summary:</h4>
            <p>{this.state.summary}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h4>Description:</h4>
            <p>{this.state.overview}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h4>Key Influencers:</h4>
            <div className="changeActivatorDisplay">
              {this.state.changeActivators.map(activator => (
                <ChangeActivatorDisplay
                  key={activator.index}
                  name={activator.name}
                  type={activator.type}
                  stance={activator.stance}
                  twitterUri={activator.twitterUri}
                  twitterHandle={activator.twitter}
                  supportTweet={this.state.campaignTweets.supports}
                  opposeTweet={this.state.campaignTweets.opposes}
                  undecidedTweet={this.state.campaignTweets.undecided}
                  unknownTweet={this.state.campaignTweets.unknown}
                />
              ))}  
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default CampaignLandingPage;