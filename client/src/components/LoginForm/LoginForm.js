import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import './LoginForm.css';


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: ""
    }

    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    axios.post('/user/login', {
      username: this.state.username,
      password: this.state.password,
    }).then((res) => {
      this.props.userLoggedIn((JSON.parse(res.config.data).username));
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <Form>
        <h1 className="text-center">Login</h1>
        <div>
          {this.state.message ? <p className="alert alert-primary">{this.state.message}</p> : ''}
        </div>
        <FormGroup>
          <ControlLabel htmlFor="username">Username</ControlLabel>
          <FormControl
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleFormInput}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleFormInput}
          />
        </FormGroup>
        <Button type="submit" onClick={this.onFormSubmit.bind(this)}>
          Login
        </Button>
      </Form>
    )
  }
}

export default LoginForm;