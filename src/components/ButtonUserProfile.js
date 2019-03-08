import React, { Component } from "react";
import "./ButtonUserProfile.css";
import { postUserEditDetails, postFile } from "../api";

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

  uploadOnChange(event) {
    const { name, files } = event.target;

    postFile(files).then(response => {
      console.log("Upload File Info", response.data);
      this.setState({ [name]: response.data.fileUrl });
    });
  }



 


  render() {
    return (
      <div className="ButtonUserProfile">
        <div className="EditBtn">
          <form onSubmit={event => this.handleEditSubmit(event)}>
            <div className="form-group">
            <label>
                Full Name:
            </label>
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.fullName}
                name="fullName"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
            <label>
              Age:
            </label>
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.age}
                name="age"
                type="number"
                placeholder="Your age (must be at least 18)"
              />
            </div>
            <div className="form-group">
            <label>
              Location:
            </label>
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.location}
                name="location"
                type="text"
                placeholder="Your city and country (ex: Paris, FRANCE)"
              />
            </div>

            <div className="form-group">
              <label>
                Picture:
            </label>
              <img className="img-thumbnail rounded" src={this.state.avatarURL} />
              <input className="form-control"
                onChange={event => this.uploadOnChange(event)}
                name="avatarURL"
                type="file"
              />
              
            </div>


            <div className="form-group">
            <label>
              Description:
            </label>
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.description}
                name="description"
                type="text"
                placeholder="#geek #photography #tennis #TeamDog"
              />
</div>
            <button type="submit" className="btn btn-success">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ButtonUserProfile;
