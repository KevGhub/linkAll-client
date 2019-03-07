import React, { Component } from "react";

import "./SignupForm.css";
import { postSignUp, postFile } from "../api.js";

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
  
  uploadOnChange(event) {
      const { name, files } = event.target;

      postFile(files).then(response => {
        console.log("Upload File Info", response.data);
        this.setState({ [name]: response.data.fileUrl });
      });
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
            <div className="form-group">
            <label>
                Name:
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
                Pseudo:
            </label>
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Your pseudo"
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
            

            <div className="form-check">
              <p>Gender</p>
              <input className="form-check-input"
                onChange={event => this.genericOnChange(event)}
                checked={this.state.gender === "female"}
                value="female"
                name="gender"
                type="radio"
                placeholder="Your name"
                id="gender-female"
              />
              <label className="form-check-label" htmlFor="gender-female">Female:</label>

              <input className="form-check-input"
                onChange={event => this.genericOnChange(event)}
                checked={this.state.gender === "male"}
                value="male"
                name="gender"
                type="radio"
                placeholder="Your name"
                id="gender-male"
              />
              <label className="form-check-label" htmlFor="gender-male">Male:</label>

              <input className="form-check-input"
                onChange={event => this.genericOnChange(event)}
                checked={this.state.gender === "neutral"}
                value="neutral"
                name="gender"
                type="radio"
                placeholder="Your name"
                id="gender-neutral"
              />
              <label className="form-check-label" htmlFor="gender-neutral">Neutral:</label>
            </div>

              <div className="form-group">
            <label>
              Location:
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.location}
                name="location"
                type="text"
                placeholder="Your city and country (ex: Paris, FRANCE)"
              />
                </label>
              </div>

              <div className="form-group">
            <label>
                Email:
            </label>
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.email}
                name="email"
                type="email"
                placeholder="Your email address"
              />
              </div>


              <div className="form-group">
            <label>
                Password (with 1 number minimum):
            </label>
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.originalPassword}
                name="originalPassword"
                type="password"
                placeholder="Your password"
              />
              </div>
              
              <div className="form-group">
            <label>
                Picture:
            </label>
              <input className="form-control"
                onChange={event => this.uploadOnChange(event)}
                name="avatarURL"
                type="file"
              />
              <img src={this.state.avatarURL} />
              </div>
              
            <div className="form-group">
            <label>
                Describe yourself in #:
            </label>
              <input className="form-control"
                onChange={event => this.genericOnChange(event)}
                value={this.state.description}
                name="description"
                type="text"
                placeholder="#geek #photography (up to 6)"
              />
            </div>

            <button type="submit"
                className="btn btn-success" 
                onClick={() => this.props.onClickSign()}
                data-dismiss="modal">Sign Up</button>
              
            
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
