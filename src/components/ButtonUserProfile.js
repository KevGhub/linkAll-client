import React, { Component } from "react";
import "./ButtonUserProfile.css";
import { postUserEditDetails } from "../api";

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
    postUserEditDetails(this.state).then(response => {
      this.props.editSuccess(response.data);
      console.log("User", response.data);
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

            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ButtonUserProfile;
