import React, { Component, Fragment } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class FormPersonalDetails extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Success" />
          <h1>THank You For Your Submission</h1>
          <p>You Will Get An Email With Further Instructions</p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
