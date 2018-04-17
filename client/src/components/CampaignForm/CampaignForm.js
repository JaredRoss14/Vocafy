import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button, InputGroup, Modal, Col, Row, Image } from 'react-bootstrap';
import axios from 'axios';
import './CampaignForm.css';


class CampaignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaign: "",
      campaignPath: "",
      summary: "",
      overview: "",
      changeActivators: [],
      campaignTwitter: "",
      campaignFacebook: "",
      campaignInstagram: "",
      supportsTweet: "",
      opposesTweet: "",
      undecidedTweet: "",
      unknownTweet: "",
      supportsEmail: "",
      opposesEmail: "",
      undecidedEmail: "",
      unknownEmail:"",
      modalPageNumber: 0,
      activatorType: "",
      activatorName: "",
      activatorEmployer: "",
      activatorPosition: "",
      activatorStance: "",
      activatorEmail: "",
      activatorTwitter: "",
      activatorPhone: 0,
      activatorWebsite: "",
      twitterButtonName: "",
      showModal: false,
      tweetModal: false,
      emailModal: false,
      tweetPageNumber: 0,
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleTweetShow = this.handleTweetShow.bind(this);
    this.handleShowNext = this.handleShowNext.bind(this);
    this.handleTweetShowNext = this.handleTweetShowNext.bind(this);
    this.handleShowPrevious = this.handleShowPrevious.bind(this); 
    this.handleTweetShowPrevious = this.handleTweetShowPrevious.bind(this); 
    this.handleClose = this.handleClose.bind(this);
    this.handleOrganization = this.handleOrganization.bind(this);
    this.handleIndividual = this.handleIndividual.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.handleShowSupportTweet = this.handleShowSupportTweet.bind(this);
    this.handleShowOppositionTweet = this.handleShowOppositionTweet.bind(this);
    this.handleShowUnknownTweet = this.handleShowUnknownTweet.bind(this);
    this.handleShowUndecidedTweet = this.handleShowUndecidedTweet.bind(this);
  }

  handleShowSupportTweet() {
    this.setState({tweetModal: 2})
  }

  handleShowOppositionTweet() {
    this.setState({tweetModal: 3})
  }

  handleShowUnknownTweet() {
    this.setState({tweetModal: 4})
  }

  handleShowUndecidedTweet() {
    this.setState({ tweetModal: 5 })
  }

  handleShow() {
    this.setState({
      showModal: true,
      modalPageNumber: 1,
      activatorType: "",
      activatorName: "",
      activatorEmployer: "",
      activatorPosition: "",
      activatorStance: "",
      activatorEmail: "",
      activatorTwitter: "",
      activatorPhone: 0,
      activatorWebsite: "",
    });
  }

  handleTweetShow() {
    this.setState({
      tweetModal: true,
      tweetPageNumber: 1
    });
  }

  handleShowNext() {
    this.setState({ modalPageNumber: this.state.modalPageNumber + 1})
  }

  handleTweetShowNext() {
    this.setState({ tweetPageNumber: this.state.tweetPageNumber + 1 })
  }

  handleShowPrevious() {
    this.setState({ modalPageNumber: this.state.modalPageNumber - 1 })
  }

  handleTweetShowPrevious() {
    this.setState({ tweetPageNumber: this.state.tweetPageNumber - 1 })
  }

  handleClose() {
    this.setState({
      showModal: false,
      tweetModal: false,
      modalPageNumber: 0,
      tweetPageNumber: 0
    });
  }

  handleOrganization() {
    this.setState({
      modalPageNumber: 5,
      activatorType: "organization"
    })
  }

  handleIndividual() {
    this.setState({
      modalPageNumber: 2,
      activatorType: "individual"
    })
  }

  handleModalSubmit = (event) => {
    event.preventDefault();
    let submission = {
      type: this.state.activatorType,
      name: this.state.activatorName,
      employer: this.state.activatorEmployer,
      position: this.state.activatorPosition,
      stance: this.state.activatorStance,
      email: this.state.activatorEmail,
      twitter: this.state.activatorTwitter,
      phone: this.state.activatorPhone,
      website: this.state.activatorWebsite,
      author: this.state.username
    };
    let changeActivatorArray = this.state.changeActivators
    if (changeActivatorArray.length === 0) {
      changeActivatorArray.push(submission)
    } else {
      changeActivatorArray.concat([submission]);
    }; 
    this.setState({
      activatorType: "",
      activatorName: "",
      activatorEmployer: "",
      activatorPosition: "",
      activatorStance: "",
      activatorEmail: "",
      activatorTwitter: "",
      activatorPhone: 0,
      activatorWebsite: "",
      changeActivators: changeActivatorArray
    });
    console.log(this.state.changeActivators);
  }

  handleFormInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <Form className="campaignForm">
        <h2>Build Your Movement</h2>

        {/* 
        Campaign Name 
        */}

        <FormGroup>
          <ControlLabel>Campaign:</ControlLabel>
          <FormControl
            type="text"
            name="campaign"
            placeholder="Name Your Movement..."
            value={this.state.campaign}
            onChange={this.handleFormInput}
          />
        </FormGroup>

        {/* 
        Campaign URL 
        */}

        <FormGroup>
          <ControlLabel>Custom Url:</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>vocafy.com/campaigns/</InputGroup.Addon>  
              <FormControl
                type="text"
                name="campaignPath"
                placeholder="Name Your Movement..."
                value={this.state.campaignPath}
                onChange={this.handleFormInput}
            />
          </InputGroup>
        </FormGroup>

        {/* 
        Campaign Summary 
        */}

        <FormGroup>
          <ControlLabel>Summary</ControlLabel>
          <FormControl
            type="text"
            name="summary"
            placeholder="Define Your Movement In Thirty Seconds Or Less..."
            value={this.state.summary}
            onChange={this.handleFormInput}
          />
        </FormGroup>

        {/* 
        Campaign Overview 
        */}

        <FormGroup>
          <ControlLabel>Overview</ControlLabel>
          <FormControl
            type="text"
            name="overview"
            placeholder="Describe Your Movement"
            value={this.state.overview}
            onChange={this.handleFormInput}
          />
        </FormGroup>

        {/* 
        Change Activators 
        */}        

        <FormGroup>
          <ControlLabel>Change Activators</ControlLabel>
          <InputGroup>
            
            {/* 
            Modal Display Button 
            */}     

            <Button className="modalButton" onClick={this.handleShow}>
              <i className="fas fa-plus-circle modalIcon"></i>
            </Button>
            
            {/* 
            Modal 
            */}  

            <Modal show={this.state.showModal} onHide={this.handleClose}>
              
              {/* 
              Modal Header 
              */}  

              <Modal.Header closeButton>
                <Modal.Title>
                  <span className={this.state.modalPageNumber === 1 ? 'text-center' : 'hidden'}>Public Figure or Organization?</span>
                  <span className={this.state.modalPageNumber === 2 ? 'text-center' : 'hidden'}>Public Figure</span>
                  <span className={this.state.modalPageNumber === 3 || this.state.modalPageNumber === 6 ? 'text-center' : 'hidden'}>Contact Information</span>
                  <span className={this.state.modalPageNumber === 5 ? 'text-center' : 'hidden'}>Organization</span>
                </Modal.Title>
              </Modal.Header>

              {/* 
              Modal Body 
              */}   
              
              <Modal.Body>

                {/* 
                User Selects Individual or Corporation 
                */}                  

                <div className={this.state.modalPageNumber === 1 ? '' : 'hidden'}>
                  <Row className="text-center">
                    
                    <Col smOffset={1} sm={4}>
                      <Button className="modalOption" onClick={this.handleIndividual}>
                        <i className="far fa-user"></i>
                        <h4>Public Figure</h4>
                      </Button>
                    </Col>

                    <Col sm={2} className="align-self-center">
                      <h3>or</h3>
                    </Col>  

                    <Col sm={4}>
                      <Button className="modalOption text-center" onClick={this.handleOrganization}>
                        <i className="far fa-building"></i>
                        <h4>Organization</h4>
                      </Button>
                    </Col>

                  </Row>
                </div>
              
                <Form>

                  {/* 
                  Individual Activator Bio 
                  */}  

                  <div className={this.state.modalPageNumber === 2 ? '' : 'hidden'}>
                    <FormGroup>
                      <ControlLabel>Name:</ControlLabel>
                      <FormControl
                        type="text"
                        name="activatorName"
                        placeholder="John Smith"
                        value={this.state.activatorName}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Organization:</ControlLabel>
                      <FormControl
                        type="text"
                        name="activatorEmployer"
                        placeholder="Company X"
                        value={this.state.activatorEmployer}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Position:</ControlLabel>
                      <FormControl
                        type="text"
                        name="activatorPosition"
                        placeholder="Director of Public Affairs"
                        value={this.state.activatorPosition}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Stance:</ControlLabel>
                      <FormControl
                        componentClass="select"
                        placeholder=""
                        type="text"
                        name="activatorStance"
                        onChange={this.handleFormInput}
                        value={this.state.activatorStance}
                      > 
                        <option value="supports">Supports</option>  
                        <option value="opposes">Opposes</option>
                        <option value="undecided">Undecided</option>
                        <option value="unknown">No Stance</option>
                      </FormControl>  
                    </FormGroup>
                  </div>

                  {/* 
                  Individual Activator Contact Information 
                  */}

                  <div className={this.state.modalPageNumber === 3 ? '' : 'hidden'}>
                    <FormGroup>
                      <ControlLabel>Email Address:</ControlLabel>
                      <FormControl
                        type="email"
                        name="activatorEmail"
                        placeholder="info@company.com"
                        value={this.state.activatorEmail}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Twitter:</ControlLabel>
                      <FormControl
                        type="text"
                        name="activatorTwitter"
                        placeholder="@Twitter"
                        value={this.state.activatorTwitter}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>
                  </div>
                </Form>

                <Form>

                  {/* 
                  Organization Activator Information 
                  */}

                  <div className={this.state.modalPageNumber === 5 ? '' : 'hidden'}>
                    <FormGroup>
                      <ControlLabel>Name:</ControlLabel>
                      <FormControl
                        type="text"
                        name="activatorName"
                        placeholder="Company X"
                        value={this.state.activatorName}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Stance:</ControlLabel>
                      <FormControl
                        componentClass="select"
                        placeholder=""
                        type="text"
                        name="activatorStance"
                        value={this.state.activatorStance}
                      >
                        <option value="supports">Supports</option>
                        <option value="opposes">Opposes</option>
                        <option value="undecided">Undecided</option>
                        <option value="unknown">No Stance</option>
                      </FormControl>
                    </FormGroup>
                    
                    <FormGroup>
                      <ControlLabel>Logo:</ControlLabel>
                      <FormControl
                        type="text"
                        name=""
                        placeholder="Upload Logo"
                      />
                    </FormGroup> 
                  </div>

                  <div className={this.state.modalPageNumber === 6 ? '' : 'hidden'}>
                    
                    {/* 
                    Organization Activator Contact Information 
                    */}
                    
                    <FormGroup>
                      <ControlLabel>Phone:</ControlLabel>
                      <FormControl
                        type="text"
                        name="activatorPhone"
                        placeholder="(555) 555-5555"
                        value={this.state.activatorPhone}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Email:</ControlLabel>
                      <FormControl
                        type="email"
                        name="activatorEmail"
                        placeholder="info@company.com"
                        value={this.state.activatorEmail}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Twitter:</ControlLabel>
                      <FormControl
                        type="text"
                        name="activatorTwitter"
                        placeholder="info@company.com"
                        value={this.state.activatorTwitter}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Website</ControlLabel>
                      <FormControl
                        type="text"
                        name="activatorWebsite"
                        placeholder="www.CompanyX.com"
                        value={this.state.activatorWebsite}
                        onChange={this.handleFormInput}
                      />
                    </FormGroup>
                  </div>  
                </Form>
              </Modal.Body>

              {/* 
              Modal Footer/Navigation 
              */}

              <Modal.Footer className={this.state.modalPageNumber > 1 ? '' : 'hidden'}>
                <Button bsStyle="primary" className={this.state.modalPageNumber === 2 || this.state.modalPageNumber === 5 ? '' : 'hidden'} onClick={this.handleShow}>Previous</Button>
                <Button bsStyle="primary" className={this.state.modalPageNumber > 2 && this.state.modalPageNumber < 5 || this.state.modalPageNumber > 5 ? '' : 'hidden'} onClick={this.handleShowPrevious}>Previous</Button>
                <Button bsStyle="primary" className={this.state.modalPageNumber === 3 || this.state.modalPageNumber === 6 ? 'hidden' : ''} onClick={this.handleShowNext}>Next</Button>
                <Button bsStyle="primary" className={this.state.modalPageNumber === 3 ? '' : 'hidden'} onClick={this.handleModalSubmit}>Submit</Button>
                <Button bsStyle="primary" className={this.state.modalPageNumber === 6 ? '' : 'hidden'} onClick={this.handleModalSubmit}>Submit</Button>
              </Modal.Footer>
            </Modal>

          </InputGroup>
        </FormGroup>

        {/* 
        Campaign Social Links 
        */}

        <FormGroup>
          <ControlLabel>External Links</ControlLabel>
            <InputGroup>
            <InputGroup.Addon>
              <Image src={require("../../images/twitter-logo-button.png")}/>
            </InputGroup.Addon>
              <FormControl
                type="text"
                name="campaignTwitter"
                placeholder="Twitter"
                value={this.state.campaignTwitter}
                onChange={this.handleFormInput}
              />
          </InputGroup>
          <InputGroup>
            <InputGroup.Addon><Image src={require("../../images/facebook-logo-button.png")}/></InputGroup.Addon>
            <FormControl
              type="text"
              name="campaignFacebook"
              placeholder="Facebook"
              value={this.state.campaignFacebook}
              onChange={this.handleFormInput}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Addon>I</InputGroup.Addon>
            <FormControl
              type="text"
              name="campaignInstagram"
              placeholder="Instagram"
              value={this.state.campaignInstagram}
              onChange={this.handleFormInput}
            />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Tweets</ControlLabel>
          <InputGroup>

          <Button className="modalButton" onClick={this.handleTweetShow}>
            <i className="fas fa-plus-circle modalIcon"></i>
          </Button>

          </InputGroup>  

          <Modal show={this.state.tweetModal} onHide={this.handleClose} className="modalDisplay">

            {/* 
            Twitter Modal Header 
            */}

            <Modal.Header closeButton>
              <Modal.Title>
                <span className={this.state.tweetPageNumber === 1 ? 'text-center' : 'hidden'}>For Campaign Supporters</span>
                <span className={this.state.tweetPageNumber === 2 ? 'text-center' : 'hidden'}>For Campaign Opponents</span>
                <span className={this.state.tweetPageNumber === 3 ? 'text-center' : 'hidden'}>For The Undecided</span>
                <span className={this.state.tweetPageNumber === 4 ? 'text-center' : 'hidden'}>For The Unknown</span>
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
              <Form>
                <div className={this.state.tweetPageNumber === 1 ? '' : 'hidden'}>
                  <FormGroup>
                    <ControlLabel>For Your Supporters</ControlLabel>
                    <FormControl
                      type="text"
                      name="supportsTweet"
                      placeholder="A tweet to thank supporters of your cause..."
                      value={this.state.supportsTweet}
                      onChange={this.handleFormInput}
                    />
                  </FormGroup>  
                </div>

                <div className={this.state.tweetPageNumber === 2 ? '' : 'hidden'}>
                  <FormGroup>
                    <ControlLabel>For Your Opponents</ControlLabel>
                    <FormControl
                      type="text"
                      name="opposesTweet"
                      placeholder="A tweet to change someone's mind..."
                      value={this.state.opposesTweet}
                      onChange={this.handleFormInput}
                    />
                  </FormGroup> 
                </div>  

                <div className={this.state.tweetPageNumber === 3 ? '' : 'hidden'}>
                  <FormGroup>
                    <ControlLabel>For Undecideds</ControlLabel>
                    <FormControl
                      type="text"
                      name="undecidedTweet"
                      placeholder="Here's why my cause is important..."
                      value={this.state.undecidedTweet}
                      onChange={this.handleFormInput}
                    />
                  </FormGroup>
                </div> 

                <div className={this.state.tweetPageNumber === 4 ? '' : 'hidden'}>
                  <FormGroup>
                    <ControlLabel>For Unknown</ControlLabel>
                    <FormControl
                      type="text"
                      name="unknownTweet"
                      placeholder="This cause is important to me and I'd like to know where you stand..."
                      value={this.state.unknownTweet}
                      onChange={this.handleFormInput}
                    />
                  </FormGroup>
                </div> 
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button bsStyle="primary" className={this.state.tweetPageNumber > 1 ? '' : 'hidden'} onClick={this.handleTweetShowPrevious}>Back</Button>
              <Button bsStyle="primary" className={this.state.tweetPageNumber < 4 ? '' : 'hidden'} onClick={this.handleTweetShowNext}>Next</Button>
              <Button bsStyle="primary" className={this.state.tweetPageNumber === 4 ? '' : 'hidden'} onClick={this.handleTweetSubmit}>Save</Button>
            </Modal.Footer>

          </Modal>  

        </FormGroup>

        <Button type="submit" onClick={this.onFormSubmit}>
          Create Campaign
        </Button>
      </Form>
    )
  }
}

export default CampaignForm;