import React, { Component } from "react";

import "./HomePage.css";
import FavoriteFriends from "./FavoriteFriends";
import FavoriteChannels from "./FavoriteChannels";
import Search from "./components/Search";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <section>
          <h1>Link'All</h1>
          <h2>Welcome to Link'All ! Your favorite Chat counrtry.</h2>
          <button>Sign Up</button>
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
