import React, { Component } from "react";
// import {MDCSlider} from '@material/slider';
import "./SignupForm.css";
import { postSignUp } from "../api.js";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      originalPassword: "",
      pseudo: "",
      age: "",
      location: "",
      profileImg: "",
      gender: "",
      description: ""
    };

    // this.slider = null;

    // this.sliderDOM = React.createRef();
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

  // componentDidMount() {
  //     this.slider = new MDCSlider(this.sliderDOM.current);
  // }

  // testClick() {
  //     this.slider.stepUp(1);
  // }

  render() {
    // currentUser is now sent by App.js as a prop
    // const { currentUser } = this.props;
    return (
      <section className="SignupForm">
        <div>
          <h2>Sign Up</h2>

          <form onSubmit={event => this.handleSubmit(event)}>
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

            <label>
              Pseudo:
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.pseudo}
                name="pseudo"
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
                value={this.state.profileImg}
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

            <button>Sign Up</button>
          </form>
        </div>
      </section>
    );
  }
}

export default SignupForm;
