import React, { Component } from 'react';

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

                            <button>Sign Up</button>
                        </form>
                    </div>)}


            </section>
        );
    }
}



export default SignupForm;