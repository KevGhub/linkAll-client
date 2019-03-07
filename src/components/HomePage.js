import React, { Component } from "react";

import "./HomePage.css";
import Search from "./Search";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import CountryFavList from "./CountryFavList";
import { getCountries } from "../api.js";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryArray: []
    };
  }

  componentDidMount() {

    getCountries().then(response => {
      console.log("Countries", response.data);
      this.setState({ countryArray: response.data });
    });
  }


  render() {
    return (
      <div className="HomePage">
        <section>
          <h1>Link'All </h1>
          <h2>Welcome to Link'All ! Your favorite Chat country.</h2>

          <SignupForm
            currentUser={this.props.currentUser}
            signupSuccess={this.props.signupSuccess}
          />
          <LoginForm
            currentUser={this.props.currentUser}
            loginSuccess={this.props.loginSuccess}
          />
        </section>

        <section className="SearchChannel">
          <Search />
        </section>
        {/* <section className="FavListing">
          <CountryFavList
            favListImport={this.props.favListImport}/>
        </section> */}
      </div>
    );
  }
}

export default HomePage;
