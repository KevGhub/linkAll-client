import React, { Component } from "react";

import "./HomePage.css";
import FavoriteFriends from "./FavoriteFriends";
import FavoriteChannels from "./FavoriteChannels";
import Search from "./Search";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="HomePage">
        <section>
          <h1>Link'All</h1>
          <h2>Welcome to Link'All ! Your favorite Chat counrtry.</h2>

          <SignupForm
            currentUser={this.props.currentUser}
            signupSuccess={this.props.signupSuccess}
          />
          <LoginForm
            currentUser={this.props.currentUser}
            loginSuccess={this.props.loginSuccess}
          />

          <section>
            <Search />
            <FavoriteChannels />
          </section>
        </section>
      </div>
    );
  }
}

export default HomePage;
