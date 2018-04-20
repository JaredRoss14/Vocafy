import React, { Component } from 'react';
import { Row, Col, ControlLabel, Button, Image, Media } from 'react-bootstrap';
import './ChangeActivatorDisplay.css';
import API from "../../utils/API";

const ChangeActivatorDisplay = (props) => (

  <div className="changeActivatorDisplayIndividual">
    <Image src={ props.type === 'individual' ?
      require("../../images/avatar.png") : require("../../images/skyline.png") }
      className="changeActivatorDisplayImage" />  
    <div className={props.stance}></div>
    <h4 className="text-center">{props.name}</h4>
    <a href={props.twitterUri +
      `${
      props.stance === 'supports' ? props.supportTweet
      : props.stance === 'opposes' ? props.opposeTweet
      : props.stance === 'undecided' ? props.undecidedTweet
      : props.stance === 'unknown' ? props.unknownTweet : ''
    }`} target="_blank">
      <Button>Tweet</Button>
    </a>
  </div>
)

export default ChangeActivatorDisplay;