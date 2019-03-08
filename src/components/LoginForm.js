import React, { Component, Fragment } from "react";

import "./LoginForm.css";
import { postLogin } from "../api";
import { Redirect } from "react-router-dom";
import HomePage from "./HomePage";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      originalPassword: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //submit login into the backend
    postLogin(this.state).then(response => {
      //console.log("Log In Result", response.data);
      this.props.loginSuccess(response.data);
    });
  }

  render() {
    return this.props.currentUser ? (
      <Fragment>
        <p>WELCOME, let's start to CHAT</p>
        <img
          className="img-thumbnail rounded mx-auto d-block"
          src="https://media.giphy.com/media/7OVRDntHUDGpLrDpjV/giphy.gif"
          alt="login okay"
        />
      </Fragment>
    ) : (
      <section className="LoginForm">
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              onChange={event => this.genericOnChange(event)}
              value={this.state.email}
              name="email"
              type="email"
              placeholder="Your email address"
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              onChange={event => this.genericOnChange(event)}
              value={this.state.originalPassword}
              name="originalPassword"
              type="password"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={() => this.props.onClickLog()}
            id="closeModal"
          >
            Log In
          </button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
