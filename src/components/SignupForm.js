import React, { Component } from "react";

import "./SignupForm.css";
import { postSignUp } from "../api.js";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      originalPassword: "",
      name: "", // PSEUDO linked to CHATKIT
      age: 0,
      location: "",
      avatarURL: "", // linked to CHATKIT
      gender: "",
      description: "",
      id: "" // created for CHATKIT id
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    postSignUp(this.state).then(response => {
      console.log("Sign Up Result", response.data);
      this.props.signupSuccess(response.data);
    });
  }

  render() {
    return (
      <section className="SignupForm">
        <div>
          <h2>Sign Up</h2>

          <form onSubmit={event => this.handleSubmit(event)}>
            <label>
              Name:
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.fullName}
                name="fullName"
                type="text"
                placeholder="Your name"
              />
            </label>

            <label>
              Pseudo:
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Your pseudo"
              />
            </label>

            <label>
              Age:
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.age}
                name="age"
                type="number"
                placeholder="Your age (must be at least 18)"
              />
            </label>

            <div>
              <p>Gender</p>
              <input
                onChange={event => this.genericOnChange(event)}
                checked={this.state.gender === "female"}
                value="female"
                name="gender"
                type="radio"
                placeholder="Your name"
                id="gender-female"
              />
              <label htmlFor="gender-female">Female:</label>

              <input
                onChange={event => this.genericOnChange(event)}
                checked={this.state.gender === "male"}
                value="male"
                name="gender"
                type="radio"
                placeholder="Your name"
                id="gender-male"
              />
              <label htmlFor="gender-male">Male:</label>

              <input
                onChange={event => this.genericOnChange(event)}
                checked={this.state.gender === "neutral"}
                value="neutral"
                name="gender"
                type="radio"
                placeholder="Your name"
                id="gender-neutral"
              />
              <label htmlFor="gender-neutral">Neutral:</label>
            </div>

            <label>
              Location:
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.location}
                name="location"
                type="text"
                placeholder="Your city and country (ex: Paris, FRANCE)"
              />
            </label>

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
              Password (with 1 number minimum):
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.originalPassword}
                name="originalPassword"
                type="password"
                placeholder="Your password"
              />
            </label>

            <label>
              Picture:
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.avatarURL}
                name="avatarURL"
                type="file"
              />
            </label>

            <label>
              Description:
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.description}
                name="description"
                type="text"
                placeholder="#geek #photography #tennis #TeamDog"
              />
            </label>

            <button>Sign Up</button>
          </form>
        </div>
      </section>
    );
  }
}

export default SignupForm;

/*

chatkit.createUser({
  id: 'userId',
  name: 'Some name',
})
  .then(() => {
    console.log('User created successfully');
  }).catch((err) => {
    console.log(err);
  });




  
*/
