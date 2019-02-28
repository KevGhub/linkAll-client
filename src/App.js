import React, { Component } from "react";
import AppMessenger from "./AppMessenger";
import { Switch, Route, NavLink } from "react-router-dom";

import HomePage from "./components/HomePage.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="HomePage">
        <header>
          <nav>
            <img src="#" alt="logo" />
            <button> Log in </button>
          </nav>
        </header>
      </section>
    );
  }
}

export default App;
