import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button, InputGroup, Modal, Col, Row, Image } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './CampaignForm.css';
import API from "../../utils/API";
import ChangeActivatorForm from "../ChangeActivatorForm";
import newId from '../../utils/newid';

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
      formSubmitted: false,
      changeActivatorsId: [],
      redirect: false,
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleShowNext = this.handleShowNext.bind(this);
    this.handleShowPrevious = this.handleShowPrevious.bind(this); 
    this.handleClose = this.handleClose.bind(this);
    this.handleOrganization = this.handleOrganization.bind(this);
    this.handleIndividual = this.handleIndividual.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
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

  handleShowNext() {
    this.setState({ modalPageNumber: this.state.modalPageNumber + 1})
  }

  handleShowPrevious() {
    this.setState({ modalPageNumber: this.state.modalPageNumber - 1 })
  }

  handleClose() {
    this.setState({
      showModal: false,
      modalPageNumber: 0,
    });
  }

  componentWillMount() {
    this.id = newId();
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

  cleanTwitterHandle = (handle) => {
    let twitterAccount = handle.replace("@", "");
    return twitterAccount
  }

  twitterHandleUri = (handle) => {
    let newHandle = ".@" + handle + " "
    let uriHandle = encodeURI(newHandle);
    let uri = "http://twitter.com/home?status=" + uriHandle;
    return uri
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
      twitter: this.cleanTwitterHandle(this.state.activatorTwitter),
      phone: this.state.activatorPhone,
      website: this.state.activatorWebsite,
      author: this.state.username,
      uri: this.twitterHandleUri(this.cleanTwitterHandle(this.state.activatorTwitter))
    };
    let changeActivators = this.state.changeActivators.concat([submission]);
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
      changeActivators,
      showModal: false,
      modalPageNumber: 0
    }, () => console.log(this.state.changeActivators));
    API.createChangeActivator({
      type: submission.type,
      name: submission.name,
      employer: submission.employer,
      position: submission.position,
      stance: submission.stance,
      email: submission.email,
      twitter: submission.twitter,
      phone: submission.phone,
      website: submission.website,
      author: submission.author,
      twitterUri: submission.uri
    })
      .then(res => this.state.changeActivatorsId.push(res.data._id))
      .catch(err => console.log(err));
  }

  handleFormInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();
    API.createCampaign({
      author: this.state.username,
      campaignName: this.state.campaign,
      campaignUrl: this.state.campaignPath,
      summary: this.state.summary,
      overview: this.state.overview,
      changeActivators: this.state.changeActivatorsId,
      socialMedia:
        {
          twitterUrl: this.state.campaignTwitter,
          facebookUrl: this.state.campaignFacebook,
          instagramUrl: this.state.campaignInstagram
        },
      campaignTweets:
        {
          supports: this.state.supportsTweet,
          opposes: this.state.opposesTweet,
          undecided: this.state.undecidedTweet,
          unknown: this.state.unknownTweet
        },
    }).then(res => {
      console.log(res.data);
      this.setState({ redirect: true });
    })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <Form className="campaignForm">
        {this.state.redirect ? <Redirect to='/' /> : ''}  
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
            type="textarea"
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

            <div className="changeActivatorFormIcon">
              <Button className="changeActivatorButton" onClick={this.handleShow}>
                <i className="fas fa-plus-circle changeActivatorLogo"></i>
              </Button>
            </div> 

            {/* 
            Change Activator Mapping 
            */}

            {this.state.changeActivators.map(activator => (
              <ChangeActivatorForm
              key={activator.index}
              name={activator.name}
              type={activator.type}
              stance={activator.stance}/>
            ))}   
            
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
                        placeholder="select"
                        type="text"
                        name="activatorStance"
                        onChange={this.handleFormInput}
                        value={this.state.activatorStance}
                      >
                        <option value="select">Select</option>
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
                        placeholder="select"
                        type="text"
                        name="activatorStance"
                        onChange={this.handleFormInput}
                        value={this.state.activatorStance}
                      >
                        <option value="select">Select</option>  
                        <option value="supports">Supports</option>
                        <option value="opposes">Opposes</option>
                        <option value="undecided">Undecided</option>
                        <option value="unknown">No Stance</option>
                      </FormControl>
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
            <InputGroup className="inputGroupMarginBottom">
            <InputGroup.Addon><i className="fab fa-twitter"></i></InputGroup.Addon>
              <FormControl
                type="text"
                name="campaignTwitter"
                placeholder="www.twitter.com/YourMovement"
                value={this.state.campaignTwitter}
                onChange={this.handleFormInput}
              />
          </InputGroup>
          <InputGroup className="inputGroupMarginBottom">
            <InputGroup.Addon><i className="fab fa-facebook-f"></i></InputGroup.Addon>
            <FormControl
              type="text"
              name="campaignFacebook"
              placeholder="www.facebook.com/YourMovement"
              value={this.state.campaignFacebook}
              onChange={this.handleFormInput}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Addon><i className="fab fa-instagram"></i></InputGroup.Addon>
            <FormControl
              type="text"
              name="campaignInstagram"
              placeholder="www.instagram.com/YourMovement"
              value={this.state.campaignInstagram}
              onChange={this.handleFormInput}
            />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Tweets</ControlLabel>
          <InputGroup className="inputGroupMarginBottom" >
            <InputGroup.Addon>
              <span className="tweetFormSupporting">Supporting</span>
            </InputGroup.Addon>
            <FormControl
              type="text"
              name="supportsTweet"
              placeholder="Thank you for supporting our cause"
              value={this.state.supportsTweet}
              onChange={this.handleFormInput}
            />
          </InputGroup>
          <InputGroup className="inputGroupMarginBottom">
            <InputGroup.Addon>
              <span className="tweetFormOpposing">Opposing</span>
            </InputGroup.Addon>
            <FormControl
              type="text"
              name="opposesTweet"
              placeholder="Here is why I think you should change your mind"
              value={this.state.opposesTweet}
              onChange={this.handleFormInput}
            />
          </InputGroup>

          <InputGroup className="inputGroupMarginBottom">
            <InputGroup.Addon>
              Undecided  
            </InputGroup.Addon>
            <FormControl
              type="text"
              name="undecidedTweet"
              placeholder="Here is why I think you should support my cause"
              value={this.state.undecidedTweet}
              onChange={this.handleFormInput}
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Addon>
              <span className="tweetFormUnknown">Unknown</span>
            </InputGroup.Addon>
            <FormControl
              type="text"
              name="unknownTweet"
              placeholder="I see that you are unaware of my campaign, here is why I think it is important."
              value={this.state.unknownTweet}
              onChange={this.handleFormInput}
            />
          </InputGroup>
        </FormGroup>

        <Button type="submit" onClick={this.onFormSubmit}>
          Create Campaign
        </Button>
      </Form>
    )
  }
}

export default CampaignForm;