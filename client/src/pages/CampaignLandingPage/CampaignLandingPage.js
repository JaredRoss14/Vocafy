import React, { Component } from "react";
import { Grid, Row, Col, Image } from 'react-bootstrap';
import API from "../../utils/API";
import ChangeActivatorDisplay from "../../components/ChangeActivatorDisplay";
import { encode } from "punycode";
import './CampaignLandingPage.css';

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
        <Row className="text-center">
          <Image src="https://via.placeholder.com/250x250/" circle/>
        </Row>  
        <Row className="text-center">
          <Col md={12}>
            <h1>{this.state.campaignName}</h1> 
            <a href={this.state.socialMedia.facebook}><i className="fab fa-facebook-f socialIcon"></i></a>
            <a href={this.state.socialMedia.instagram}><i className="fab fa-instagram socialIcon"></i></a>
            <a href={this.state.socialMedia.twitter}><i className="fab fa-twitter socialIcon"></i></a>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2>Summary:</h2>
            <p>{this.state.summary}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2>Description:</h2>
            <p>{this.state.overview}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2>Key Influencers:</h2>
            <h4 className="text-center">Those in <span className="opposeText">RED</span> Oppose, Those in <span className="supportText">GREEN</span> support, Those in <span className="undecidedText">YELLOW</span> are undecided, Those in <span className="unknownText">GRAY</span> have yet to take a stance.</h4>
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