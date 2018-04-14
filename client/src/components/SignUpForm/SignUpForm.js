import React, {Component} from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import './SignUpForm.css';
// import API from '../../utils/API';


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      // passwordInvalid: false,
      emailInvalid: false,
      signupSubmitted: false
    }

    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.validateInput(name, value));
  }

  validateInput(inputName, value) {
    // let passwordInvalid = this.state.passwordInvalid;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (inputName) {
      case 'password':
      case 'confirmPassword':
        if (value === this.state.password && value === this.state.confirmPassword) {
          this.setState({ passwordInvalid: false });
        } else {
          this.setState({ passwordInvalid: true });
        }
      break;
      case 'email':
        if (emailRegex.test(value)) {
          this.setState({ emailInvalid: false });
        } else {
          this.setState({ emailInvalid: true });
        }
        break;
        default:
        break;
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.emailInvalid && !this.state.passwordInvalid) {
      axios.post("/user/signup", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      }).then((res) => this.setState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        signupSubmitted: true
      }))
    }
  }

  render() {
    return (
      <Form>
        <h2>Join Vocafy Today.</h2>
        <div>
          {this.state.signupSubmitted ? <p className="alert alert-success">Sign-up complete! Please check your email to verify your account. </p> : ''}
          {this.state.passwordInvalid ? <p className="alert alert-primary">Passwords do not match. </p> : ''}
          {this.state.emailInvalid ? <p className="alert alert-primary">Email is not valid. </p> : ''}
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
          <ControlLabel htmlFor="email">Email</ControlLabel>
          <FormControl
            className={this.state.emailInvalid ? 'warning' : ''}  
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleFormInput}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <FormControl
            className={this.state.passwordInvalid ? 'warning' : ''}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleFormInput}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="confirmPassword">Confirm Password</ControlLabel>
          <FormControl
            className={this.state.passwordInvalid ? 'warning' : ''}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleFormInput}
          />
        </FormGroup>
        <Button type="submit" onClick={this.onFormSubmit}>
          Sign Up
        </Button>
      </Form>  
    )
  }
}

export default SignUpForm;