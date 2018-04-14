import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import './CampaignForm.css';


class CampaignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      summary: "",
      overview: "",
      confirmPassword: "",
      email: ""
    }

    this.handleFormInput = this.handleFormInput.bind(this);
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
      <Form>
        <h2>Build Your Movement</h2>
        <FormGroup>
          <ControlLabel htmlFor="">Campaign:</ControlLabel>
          <FormControl
            type="text"
            name=""
            placeholder="Name Your Movement..."
            value={this.state.name}
            onChange={this.handleFormInput}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="">Summary</ControlLabel>
          <FormControl
            type="text"
            name=""
            placeholder="Define Your Movement In Thirty Seconds Or Less..."
            value={this.state.summary}
            onChange={this.handleFormInput}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="">Overview</ControlLabel>
          <FormControl
            type="text"
            name=""
            placeholder="Describe Your Movement"
            value={this.state.overview}
            onChange={this.handleFormInput}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="">Change Activators</ControlLabel>
        </FormGroup>
        <Button type="submit" onClick={this.onFormSubmit}>
          Sign Up
        </Button>
      </Form>
    )
  }
}

export default CampaignForm;