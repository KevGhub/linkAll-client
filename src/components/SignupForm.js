import React, { Component } from 'react';
import { MDCSlider } from '@material/slider';
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

        this.slider = null;

        this.sliderDOM = React.createRef();
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

    componentDidMount() {
        this.slider = new MDCSlider(this.sliderDOM.current);
    }

    testClick() {
        this.slider.stepUp(1);
    }

    render() {
        // currentUser is now sent by App.js as a prop
        const { currentUser } = this.props;
        return (
            <section className="SignupForm">
                {currentUser ? (
                    <div>
                        <h2>Successfully Signed Up !</h2>
                        <p>Welcome, {currentUser.pseudo} !</p>

                        <p>Hey Welcome here how to use our Chat 
                        </p>
                        

                        <div ref={this.sliderDOM} className="mdc-slider" tabIndex="0" role="slider"
                            aria-valuemin="1" aria-valuemax="5" aria-valuenow="1"
                            aria-label="Select Value">
                            <div className="mdc-slider__track-container">
                                <div className="mdc-slider__track"></div>
                            </div>
                            <div className="mdc-slider__thumb-container">
                                <svg className="mdc-slider__thumb" width="21" height="21">
                                    <circle cx="10.5" cy="10.5" r="7.875"></circle>
                                </svg>
                                <div className="mdc-slider__focus-ring"></div>
                            </div>
                        </div>
                        <button onClick={() => this.testClick()}>Button</button>

                    </div>
                    
                )
                    :

                    (<div>
                        <h2>Sign Up</h2>

                        <form onSubmit={event => this.handleSubmit(event)}>
                            <label>
                                Full Name:
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.fullName}
                                    name="fullName"
                                    type="text"
                                    placeholder="Your name" />
                            </label>

                            <label>
                                Email:
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.email}
                                    name="email"
                                    type="email"
                                    placeholder="Your email address" />
                            </label>

                            <label>
                                Password:
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.originalPassword}
                                    name="originalPassword"
                                    type="password"
                                    placeholder="Your password" />
                            </label>

                            <label>
                                Pseudo:
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.pseudo}
                                    name="pseudo"
                                    type="text"
                                    placeholder="Your pseudo" />
                            </label>

                            <label>
                                Age:
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.age}
                                    name="age"
                                    type="number"
                                    placeholder="Your age (must be at least 18)" />
                            </label>

                            <label>
                                Location:
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.location}
                                    name="location"
                                    type="text"
                                    placeholder="Your city and country (ex: Paris, FRANCE)" />
                            </label>

                            <label>
                                Picture:
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.profileImg}
                                    name="profileImg"
                                    type="file" />
                            </label>

                            <p>Gender</p>
                            <label>Female:</label>
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.gender.female}
                                    name="gender"
                                    type="radio"
                                    placeholder="Your name"
                            />

                            <label>Male:</label>
                            <input
                                onChange={event => this.genericOnChange(event)}
                                value={this.state.gender.male}
                                name="gender"
                                type="radio"
                                placeholder="Your name"
                            />

                            <label>Male:</label>
                            <input
                                onChange={event => this.genericOnChange(event)}
                                value={this.state.gender.neutral}
                                name="gender"
                                type="radio"
                                placeholder="Your name"
                            />
                            

                            <label>
                                Description:
                            <input
                                    onChange={event => this.genericOnChange(event)}
                                    value={this.state.description}
                                    name="description"
                                    type="text"
                                    placeholder="#geek #photography #tennis #TeamDog" />
                            </label>

                            <button>Sign Up</button>
                        </form>
                    </div>)}


            </section>
        );
    }
}



export default SignupForm;