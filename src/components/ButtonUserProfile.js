import React, { Component } from "react";
import "./ButtonUserProfile.css";
import { postUserEditDetails } from "../api";
import { deleteUserProfile } from "../api";
import { Redirect } from "react-router-dom";

class ButtonUserProfile extends Component {
  constructor(props) {
    super(props);
    // copy the userInfo object as our state
    this.state = { ...this.props.userInfo };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleEditSubmit(event) {
    event.preventDefault();

    // eslint-disable-next-line no-undef
    getUserEditDetails(this.state).then(response => {
      console.log("User", response.data);
      this.setState({ userInfo: response.data });
    });
  }

  render() {
    return (
      <div className="ButtonUserProfile">
        <div className="EditBtn">
          <form onSubmit={event => this.handleEditSubmit(event)}>
            <label>
              Full Name:
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
              Picture:
              <input
                onChange={event => this.genericOnChange(event)}
                name="profileImg"
                type="file"
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
              Description:
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.description}
                name="description"
                type="text"
                placeholder="#geek #photography #tennis #TeamDog"
              />
            </label>

            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ButtonUserProfile;
