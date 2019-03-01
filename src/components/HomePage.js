import React, { Component } from "react";

import "./HomePage.css";
import FavoriteFriends from "./FavoriteFriends";
import FavoriteChannels from "./FavoriteChannels";
import Search from "./Search";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <section>
          <h1>Link'All</h1>
          <h2>Welcome to Link'All ! Your favorite Chat counrtry.</h2>

          {/* <button onClick={() => { SignupForm }}>Sign Up</button> */}

          <SignupForm
            currentUser={this.props.currentUser}
            signupSuccess={this.props.signupSuccess}
          />
          <LoginForm currentUser={this.props.currentUser} />
        </section>

        <section>
          <Search />
          <FavoriteChannels />
          <FavoriteFriends />
        </section>
      </div>
    );
  }
}

export default HomePage;
