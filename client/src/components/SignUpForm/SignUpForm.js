import React from 'react';
import { Col, Row, Form, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

export const SignUpForm = props => (
    <Row>
      <Col md={4} mdOffset={4}>
        <Form>
          <FormGroup
            controlId={props.id}
            validationState={this.getValidationState()}
          >
            <ControlLabel>Username:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Username"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length</HelpBlock>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );

export default SignUpForm;