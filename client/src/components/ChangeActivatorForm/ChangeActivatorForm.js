import React, { Component } from 'react';
import { Row, Col, ControlLabel, Button, Image, Media } from 'react-bootstrap';
import './ChangeActivatorForm.css';

const ChangeActivatorForm = (props) => (
  <div className="changeActivatorFormIcon text-center">
    <Button className="changeActivatorButton">
      <i className={props.type === 'individual' ? 'far fa-user changeActivatorLogo' : 'far fa-building changeActivatorLogo'}></i>  
    </Button>
    <h4 className="text-center">{props.name}</h4>
  </div>
)

export default ChangeActivatorForm;