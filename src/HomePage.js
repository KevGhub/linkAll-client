import React, { Component } from "react";

import "./HomePage.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <section className="HomePage">
        <header>
          <nav>
            <img src="#" alt="logo" />
            <button>Log in </button>
          </nav>
        </header>

        <h1>Link'All</h1>
        <p>Welcome to Link'All ! Your favorite Chat counrtry.</p>
      </section>
    );
  }
}

export default HomePage;
