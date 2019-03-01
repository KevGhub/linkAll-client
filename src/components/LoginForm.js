import React, { Component } from "react";

import "./LoginForm.css";
import { postLogin } from "../api";
import { Redirect } from "react-router-dom";

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
      <Redirect to="/countries" />
    ) : (
      <section className="LoginForm">
        <h2>You are at few steps from joining the LinkAll community</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <img src={this.state.profileImg} />

          <label>
            Email:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.email}
              name="email"
              type="email"
              placeholder="Your email address"
            />
          </label>

          <label>
            Password:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.originalPassword}
              name="originalPassword"
              type="password"
              placeholder="Your password"
            />
          </label>

          <button>Log In</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
