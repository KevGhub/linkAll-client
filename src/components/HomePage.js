import React, { Component } from "react";

import "./HomePage.css";
import FavoriteFriends from "./FavoriteFriends";
import FavoriteChannels from "./FavoriteChannels";
import Search from "./Search";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <section>
          <h1>Link'All</h1>
          <h2>Welcome to Link'All ! Your favorite Chat counrtry.</h2>

          <Link to="/signup-page">
            <button>Sign Up</button>
          </Link>
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
