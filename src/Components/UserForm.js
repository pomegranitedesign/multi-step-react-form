import React, { Component } from "react";

import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export default class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // Proceed to the next step
  nextStep = _ => {
    const { step } = this.state;
    this.setState(_ => ({ step: step + 1 }));
  };

  // Go back to the previous step
  prevStep = _ => {
    const { step } = this.state;
    this.setState(_ => ({ step: step - 1 }));
  };

  // Handle fields change
  handleChange = input => event =>
    this.setState({ [input]: event.target.value });

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        break;

      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
        break;

      case 3:
        return (
          <Confirm
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
        break;

      case 4:
        return <h1>Success</h1>;
        break;

      default:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        break;
    }
  }
}
